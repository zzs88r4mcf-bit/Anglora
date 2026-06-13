'use client';
import type { Exercise } from '@/types';
import TranslationExercise from './TranslationExercise';
import WordOrderExercise from './WordOrderExercise';
import FillBlankExercise from './FillBlankExercise';
import MCQExercise from './MCQExercise';
import GuidedExercise from './GuidedExercise';

interface Props {
  exercise: Exercise;
  index: number;
  total: number;
  onResult: (correct: boolean, answer: string) => void;
  disabled?: boolean;
}

const typeLabels: Record<string, string> = {
  'translation': 'Traduction',
  'word-order': 'Ordre des mots',
  'fill-blank': 'Mot manquant',
  'mcq': 'QCM',
  'guided': 'Construction guidée',
};

export default function ExerciseWrapper({ exercise, index, total, onResult, disabled }: Props) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">
          {typeLabels[exercise.type] ?? exercise.type}
        </span>
        <span className="text-xs text-brand-gray">
          {index + 1} / {total}
        </span>
      </div>

      {/* Exercise */}
      {exercise.type === 'translation' && (
        <TranslationExercise exercise={exercise} onResult={onResult} disabled={disabled} />
      )}
      {exercise.type === 'word-order' && (
        <WordOrderExercise exercise={exercise} onResult={onResult} disabled={disabled} />
      )}
      {exercise.type === 'fill-blank' && (
        <FillBlankExercise exercise={exercise} onResult={onResult} disabled={disabled} />
      )}
      {exercise.type === 'mcq' && (
        <MCQExercise exercise={exercise} onResult={onResult} disabled={disabled} />
      )}
      {exercise.type === 'guided' && (
        <GuidedExercise exercise={exercise} onResult={onResult} disabled={disabled} />
      )}
    </div>
  );
}
