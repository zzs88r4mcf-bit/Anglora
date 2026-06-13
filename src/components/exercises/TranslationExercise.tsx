'use client';
import { useState } from 'react';
import type { TranslationExercise as TExercise } from '@/types';

interface Props {
  exercise: TExercise;
  onResult: (correct: boolean, answer: string) => void;
  disabled?: boolean;
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[.,!?;:]+$/, '').replace(/\s+/g, ' ');
}

export default function TranslationExercise({ exercise, onResult, disabled }: Props) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleSubmit = () => {
    if (!input.trim() || submitted) return;
    const norm = normalize(input);
    const isCorrect = exercise.answers.some(a => normalize(a) === norm);
    setCorrect(isCorrect);
    setSubmitted(true);
    onResult(isCorrect, input.trim());
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-gray font-medium">Traduis en anglais :</p>
      <div className="bg-brand-gray-light rounded-xl px-4 py-3">
        <p className="text-base font-medium text-brand-black">{exercise.question}</p>
      </div>

      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKey}
        disabled={submitted || disabled}
        placeholder="Ta réponse en anglais..."
        className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors
          ${submitted
            ? correct
              ? 'border-green-500 bg-green-50 text-green-800'
              : 'border-red-400 bg-red-50 text-red-800'
            : 'border-brand-gray-border focus:border-brand-green bg-white'
          }`}
      />

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || disabled}
          className="w-full bg-brand-green text-white font-semibold py-3 rounded-xl disabled:opacity-40 active:scale-[0.98] transition-transform"
        >
          Valider
        </button>
      )}

      {submitted && (
        <div className={`rounded-xl px-4 py-3 ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {correct ? (
            <p className="text-green-700 font-semibold text-sm">✅ Correct !</p>
          ) : (
            <div className="space-y-1">
              <p className="text-red-700 font-semibold text-sm">❌ Pas tout à fait</p>
              <p className="text-sm text-red-600">Bonne réponse : <span className="font-medium">{exercise.answers[0]}</span></p>
              {exercise.answers.length > 1 && (
                <p className="text-xs text-red-500">Aussi accepté : {exercise.answers.slice(1).join(', ')}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
