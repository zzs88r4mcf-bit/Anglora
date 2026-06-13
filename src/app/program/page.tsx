'use client';
import { useProgress } from '@/hooks/useProgress';
import DayCard from '@/components/DayCard';
import { curriculum } from '@/data';
import ProgressBar from '@/components/ProgressBar';

export default function ProgramPage() {
  const { progress, validatedCount, globalProgress } = useProgress();

  return (
    <div className="max-w-lg mx-auto px-4 pt-10 pb-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-brand-black">Programme</h1>
        <p className="text-brand-gray text-sm mt-0.5">60 jours · 1200 mots · 600 expressions</p>
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-xs text-brand-gray">
            <span>{validatedCount} jours validés</span>
            <span>{60 - validatedCount} restants</span>
          </div>
          <ProgressBar value={globalProgress} showLabel />
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-5 text-xs text-brand-gray">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-brand-green inline-block" /> Validé
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border-2 border-brand-green inline-block" /> En cours
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-brand-gray-border inline-block" /> Verrouillé
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {curriculum.map(day => {
          const dayProgress = progress.days[day.id];
          return (
            <DayCard
              key={day.id}
              id={day.id}
              theme={day.theme}
              status={dayProgress?.status ?? 'locked'}
              score={dayProgress?.score ?? null}
            />
          );
        })}
      </div>
    </div>
  );
}
