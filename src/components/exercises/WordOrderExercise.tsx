'use client';
import { useState } from 'react';
import type { WordOrderExercise as WExercise } from '@/types';

interface Props {
  exercise: WExercise;
  onResult: (correct: boolean, answer: string) => void;
  disabled?: boolean;
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[.,!?;:]+$/, '').replace(/\s+/g, ' ');
}

export default function WordOrderExercise({ exercise, onResult, disabled }: Props) {
  const [available, setAvailable] = useState<string[]>([...exercise.words]);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const addWord = (index: number) => {
    if (submitted || disabled) return;
    const word = available[index];
    setSelected(prev => [...prev, word]);
    setAvailable(prev => prev.filter((_, i) => i !== index));
  };

  const removeWord = (index: number) => {
    if (submitted || disabled) return;
    const word = selected[index];
    setSelected(prev => prev.filter((_, i) => i !== index));
    setAvailable(prev => [...prev, word]);
  };

  const handleSubmit = () => {
    if (selected.length === 0 || submitted) return;
    const answer = selected.join(' ');
    const isCorrect = normalize(answer) === normalize(exercise.answer);
    setCorrect(isCorrect);
    setSubmitted(true);
    onResult(isCorrect, answer);
  };

  const handleReset = () => {
    if (submitted) return;
    setAvailable([...exercise.words]);
    setSelected([]);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-gray font-medium">Remets les mots dans l'ordre :</p>
      <div className="bg-brand-gray-light rounded-xl px-4 py-3">
        <p className="text-sm font-medium text-brand-black">{exercise.question}</p>
      </div>

      {/* Selected words area */}
      <div className={`min-h-[52px] rounded-xl border-2 border-dashed px-3 py-2 flex flex-wrap gap-2 transition-colors
        ${submitted
          ? correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'
          : 'border-brand-gray-border bg-white'
        }`}>
        {selected.length === 0 && !submitted && (
          <span className="text-brand-gray text-sm self-center">Appuie sur les mots pour les ajouter...</span>
        )}
        {selected.map((word, i) => (
          <button
            key={i}
            onClick={() => removeWord(i)}
            disabled={submitted || disabled}
            className={`px-3 py-1 rounded-lg text-sm font-medium border transition-all active:scale-95
              ${submitted
                ? correct
                  ? 'bg-green-100 border-green-300 text-green-800'
                  : 'bg-red-100 border-red-300 text-red-800'
                : 'bg-brand-green text-white border-brand-green'
              }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Available words */}
      {!submitted && (
        <div className="flex flex-wrap gap-2">
          {available.map((word, i) => (
            <button
              key={i}
              onClick={() => addWord(i)}
              disabled={disabled}
              className="px-3 py-1.5 rounded-lg text-sm font-medium border border-brand-gray-border bg-white text-brand-black active:scale-95 transition-all hover:border-brand-green"
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {!submitted && (
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex-1 py-3 rounded-xl border border-brand-gray-border text-brand-gray font-medium text-sm"
          >
            Réinitialiser
          </button>
          <button
            onClick={handleSubmit}
            disabled={selected.length === 0 || disabled}
            className="flex-2 flex-grow py-3 px-6 bg-brand-green text-white rounded-xl font-semibold disabled:opacity-40 active:scale-[0.98] transition-transform"
          >
            Valider
          </button>
        </div>
      )}

      {submitted && (
        <div className={`rounded-xl px-4 py-3 ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {correct ? (
            <p className="text-green-700 font-semibold text-sm">✅ Parfait !</p>
          ) : (
            <div>
              <p className="text-red-700 font-semibold text-sm">❌ Pas tout à fait</p>
              <p className="text-sm text-red-600 mt-1">Bonne réponse : <span className="font-medium">{exercise.answer}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
