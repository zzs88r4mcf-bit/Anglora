'use client';
import { useState } from 'react';
import type { FillBlankExercise as FExercise } from '@/types';

interface Props {
  exercise: FExercise;
  onResult: (correct: boolean, answer: string) => void;
  disabled?: boolean;
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[.,!?;:]+$/, '').replace(/\s+/g, ' ');
}

export default function FillBlankExercise({ exercise, onResult, disabled }: Props) {
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

  // Render the question with the blank as an inline input or highlighted text
  const parts = exercise.question.split('___');

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-gray font-medium">Complète la phrase :</p>

      {exercise.hint && (
        <p className="text-xs text-brand-gray italic">💡 {exercise.hint}</p>
      )}

      <div className="bg-brand-gray-light rounded-xl px-4 py-3 text-base font-medium text-brand-black leading-relaxed">
        {parts[0]}
        {submitted ? (
          <span className={`px-2 py-0.5 rounded font-semibold ${correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {input}
          </span>
        ) : (
          <span className="inline-block min-w-[80px] border-b-2 border-brand-green mx-1 text-center text-brand-green">
            {input || '        '}
          </span>
        )}
        {parts[1]}
      </div>

      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKey}
        disabled={submitted || disabled}
        placeholder="Le mot manquant..."
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
            <div>
              <p className="text-red-700 font-semibold text-sm">❌ Pas tout à fait</p>
              <p className="text-sm text-red-600 mt-1">Réponse : <span className="font-medium">{exercise.answers[0]}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
