'use client';
import { useState, useEffect, useCallback } from 'react';
import type { AppProgress, DayProgress, DayStatus } from '@/types';

const STORAGE_KEY = 'english60_progress';
const TOTAL_DAYS = 60;

function buildInitialProgress(): AppProgress {
  const days: Record<number, DayProgress> = {};
  for (let i = 1; i <= TOTAL_DAYS; i++) {
    days[i] = {
      status: i === 1 ? 'unlocked' : 'locked',
      score: null,
      completedAt: null,
      exerciseResults: [],
    };
  }
  return {
    days,
    totalTimeSeconds: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastActiveDate: null,
  };
}

function load(): AppProgress {
  if (typeof window === 'undefined') return buildInitialProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildInitialProgress();
    const parsed = JSON.parse(raw) as AppProgress;
    // Ensure all 60 days exist (migration safety)
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (!parsed.days[i]) {
        parsed.days[i] = { status: 'locked', score: null, completedAt: null, exerciseResults: [] };
      }
    }
    return parsed;
  } catch {
    return buildInitialProgress();
  }
}

function save(progress: AppProgress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// ─── Hook ──────────────────────────────────────────────────────────────────────
export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>(buildInitialProgress);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = load();
    // Update streak on load
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (stored.lastActiveDate === yesterday) {
      // streak continues (already correct in stored)
    } else if (stored.lastActiveDate !== today) {
      // streak broken
      stored.currentStreak = 0;
    }
    setProgress(stored);
  }, []);

  const updateAndSave = useCallback((updater: (prev: AppProgress) => AppProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      save(next);
      return next;
    });
  }, []);

  // ── Validate a day ────────────────────────────────────────────────────────
  const validateDay = useCallback((dayId: number, score: number, results: boolean[]) => {
    updateAndSave(prev => {
      const today = new Date().toISOString().split('T')[0];
      const next = { ...prev, days: { ...prev.days } };

      // Mark day as validated
      next.days[dayId] = {
        ...next.days[dayId],
        status: 'validated',
        score,
        completedAt: today,
        exerciseResults: results,
      };

      // Unlock next day
      if (dayId < TOTAL_DAYS) {
        if (next.days[dayId + 1].status === 'locked') {
          next.days[dayId + 1] = { ...next.days[dayId + 1], status: 'unlocked' };
        }
      }

      // Update streak
      if (next.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (next.lastActiveDate === yesterday) {
          next.currentStreak = prev.currentStreak + 1;
        } else {
          next.currentStreak = 1;
        }
        next.bestStreak = Math.max(next.currentStreak, prev.bestStreak);
        next.lastActiveDate = today;
      }

      return next;
    });
  }, [updateAndSave]);

  // ── Add time ──────────────────────────────────────────────────────────────
  const addTime = useCallback((seconds: number) => {
    updateAndSave(prev => {
      const today = new Date().toISOString().split('T')[0];
      return {
        ...prev,
        totalTimeSeconds: prev.totalTimeSeconds + seconds,
        lastActiveDate: today,
      };
    });
  }, [updateAndSave]);

  // ── Reset (dev) ───────────────────────────────────────────────────────────
  const reset = useCallback(() => {
    const fresh = buildInitialProgress();
    save(fresh);
    setProgress(fresh);
  }, []);

  // ─── Computed helpers ─────────────────────────────────────────────────────
  const validatedCount = Object.values(progress.days).filter(d => d.status === 'validated').length;
  const currentDay = (() => {
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (progress.days[i]?.status === 'unlocked') return i;
    }
    return TOTAL_DAYS;
  })();
  const globalProgress = Math.round((validatedCount / TOTAL_DAYS) * 100);
  const totalMinutes = Math.floor(progress.totalTimeSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const formattedTime = `${totalHours}h${String(remainingMinutes).padStart(2, '0')}`;

  const completedExercises = Object.values(progress.days)
    .reduce((sum, d) => sum + d.exerciseResults.length, 0);

  const correctExercises = Object.values(progress.days)
    .reduce((sum, d) => sum + d.exerciseResults.filter(Boolean).length, 0);

  const successRate = completedExercises > 0
    ? Math.round((correctExercises / completedExercises) * 100)
    : 0;

  return {
    progress,
    validateDay,
    addTime,
    reset,
    // Computed
    validatedCount,
    currentDay,
    globalProgress,
    formattedTime,
    completedExercises,
    successRate,
    currentStreak: progress.currentStreak,
    bestStreak: progress.bestStreak,
  };
}
