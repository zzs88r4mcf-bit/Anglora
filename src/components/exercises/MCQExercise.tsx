'use client';
import { useState } from 'react';
import type { MCQExercise as MExercise } from '@/types';

interface Props {
  exercise: MExercise;
  onResult: (correct: boolean, answer: string) => void;
  disabled?: boolean;
}

export default function MCQExercise({ exercise, onResult, disabled }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number) => {
    if (submitted || disabled) return;
    setSelected(index);
    const isCorrect = index === exercise.correctIndex;
    setSubmitted(true);
    onResult(isCorrect, exercise.options[index]);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-gray font-medium">Choisis la bonne réponse :</p>
      <div className="bg-brand-gray-light rounded-xl px-4 py-3">
        <p className="text-base font-medium text-brand-black">{exercise.question}</p>
      </div>

      <div className="space-y-2">
        {exercise.options.map((option, i) => {
          let style = 'border-brand-gray-border bg-white text-brand-black';
          if (submitted) {
            if (i === exercise.correctIndex) {
              style = 'border-green-500 bg-green-50 text-green-800';
            } else if (i === selected) {
              style = 'border-red-400 bg-red-50 text-red-800';
            } else {
              style = 'border-brand-gray-border bg-white text-brand-gray opacity-50';
            }
          } else if (selected === i) {
            style = 'border-brand-green bg-brand-green-pale text-brand-green';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={submitted || disabled}
              className={`w-full text-left px-4 py-3 rounded-xl border font-medium text-sm transition-all active:scale-[0.99]
                ${style}`}
            >
              <span className="text-xs font-bold mr-2 opacity-60">
                {['A', 'B', 'C', 'D'][i]}.
              </span>
              {option}
              {submitted && i === exercise.correctIndex && (
                <span className="float-right">✅</span>
              )}
              {submitted && i === selected && i !== exercise.correctIndex && (
                <span className="float-right">❌</span>
              )}
            </button>
          );
        })}
      </div>

      {submitted && exercise.explanation && (
        <div className="rounded-xl px-4 py-3 bg-blue-50 border border-blue-200">
          <p className="text-blue-700 text-sm">💡 {exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}
