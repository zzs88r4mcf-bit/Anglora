'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { useTimer } from '@/hooks/useTimer';
import { getDay } from '@/data';
import ExerciseWrapper from '@/components/exercises/ExerciseWrapper';
import ProgressBar from '@/components/ProgressBar';

type Tab = 'vocab' | 'expressions' | 'grammar' | 'exercises';

// ─── Main Component ────────────────────────────────────────────────────────────
export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = use(params);
  const dayId = parseInt(idParam, 10);
  const router = useRouter();
  const { progress, validateDay, addTime } = useProgress();
  const timer = useTimer();

  const dayContent = getDay(dayId);
  const dayProgress = progress.days[dayId];
  const isValidated = dayProgress?.status === 'validated';
  const isLocked = dayProgress?.status === 'locked';

  const [tab, setTab] = useState<Tab>('vocab');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [exerciseDone, setExerciseDone] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [expandedVocab, setExpandedVocab] = useState<number | null>(null);
  const [expandedExpr, setExpandedExpr] = useState<number | null>(null);

  useEffect(() => {
    timer.start();
    return () => {
      const elapsed = timer.stop();
      if (elapsed > 0) addTime(elapsed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dayContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-brand-gray">Jour introuvable</p>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-16 text-center space-y-4">
        <div className="text-5xl">🔒</div>
        <h2 className="text-xl font-bold">Jour verrouillé</h2>
        <p className="text-brand-gray">Valide les jours précédents pour débloquer ce contenu.</p>
        <Link href="/program" className="inline-block mt-4 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold">
          Voir le programme
        </Link>
      </div>
    );
  }

  const handleExerciseResult = (correct: boolean) => {
    const newResults = [...results, correct];
    setResults(newResults);

    if (newResults.length < dayContent.exercises.length) {
      setTimeout(() => setExerciseIndex(i => i + 1), 800);
    } else {
      setTimeout(() => setExerciseDone(true), 800);
    }
  };

  const handleValidate = () => {
    const score = results.length > 0
      ? Math.round((results.filter(Boolean).length / results.length) * 100)
      : 100;
    validateDay(dayId, score, results);
    setShowValidation(false);
    router.push('/program');
  };

  const exerciseProgress = results.length / dayContent.exercises.length * 100;

  // ── Render tabs ──────────────────────────────────────────────────────────────
  return (
    <div className="max-w-lg mx-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-brand-gray-border px-4 pt-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <Link href="/program" className="text-brand-gray p-1 -ml-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <div className="text-center">
            <p className="text-xs text-brand-gray font-medium">Jour {dayId}</p>
            <p className="text-sm font-bold text-brand-black leading-tight">{dayContent.theme}</p>
          </div>
          {isValidated ? (
            <span className="text-xs text-brand-green font-semibold">✅ Validé</span>
          ) : (
            <span className="text-xs text-brand-gray w-16 text-right">{timer.seconds}s</span>
          )}
        </div>

        {/* Tab nav */}
        <div className="flex">
          {(['vocab', 'expressions', 'grammar', 'exercises'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 text-xs font-semibold py-2.5 border-b-2 transition-colors capitalize
                ${tab === t
                  ? 'border-brand-green text-brand-green'
                  : 'border-transparent text-brand-gray'
                }`}
            >
              {t === 'vocab' ? 'Vocab' : t === 'expressions' ? 'Expres.' : t === 'grammar' ? 'Gramm.' : 'Exerc.'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-6">

        {/* ── VOCAB TAB ─────────────────────────────────────────────────────── */}
        {tab === 'vocab' && (
          <div className="space-y-2">
            <p className="text-xs text-brand-gray mb-3">20 mots · Appuie pour l'exemple</p>
            {dayContent.vocabulary.map((word, i) => (
              <button
                key={i}
                onClick={() => setExpandedVocab(expandedVocab === i ? null : i)}
                className="w-full text-left border border-brand-gray-border rounded-xl px-4 py-3 hover:border-brand-green transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-brand-black">{word.en}</span>
                    <span className="text-brand-gray text-sm ml-2">— {word.fr}</span>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`text-brand-gray transition-transform ${expandedVocab === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedVocab === i && (
                  <div className="mt-2 pt-2 border-t border-brand-gray-border space-y-1">
                    <p className="text-sm text-brand-black italic">{word.exampleEn}</p>
                    <p className="text-xs text-brand-gray">{word.exampleFr}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ── EXPRESSIONS TAB ───────────────────────────────────────────────── */}
        {tab === 'expressions' && (
          <div className="space-y-2">
            <p className="text-xs text-brand-gray mb-3">10 expressions · Appuie pour l'exemple</p>
            {dayContent.expressions.map((expr, i) => (
              <button
                key={i}
                onClick={() => setExpandedExpr(expandedExpr === i ? null : i)}
                className="w-full text-left border border-brand-gray-border rounded-xl px-4 py-3 hover:border-brand-green transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-brand-black">{expr.expression}</span>
                    <span className="text-brand-gray text-sm block mt-0.5">{expr.translation}</span>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`text-brand-gray transition-transform flex-shrink-0 ml-2 ${expandedExpr === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedExpr === i && (
                  <div className="mt-2 pt-2 border-t border-brand-gray-border space-y-1">
                    <p className="text-sm text-brand-black italic">{expr.example}</p>
                    <p className="text-xs text-brand-gray">{expr.exampleTranslation}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ── GRAMMAR TAB ───────────────────────────────────────────────────── */}
        {tab === 'grammar' && (
          <div className="space-y-4">
            <div className="bg-brand-green-pale rounded-2xl px-5 py-4">
              <p className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-1">Point de grammaire</p>
              <h2 className="text-xl font-bold text-brand-black">{dayContent.grammar.title}</h2>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-brand-black leading-relaxed text-[15px] whitespace-pre-line">
                {dayContent.grammar.content}
              </p>
            </div>
            <button
              onClick={() => setTab('exercises')}
              className="w-full bg-brand-green text-white font-semibold py-3.5 rounded-xl active:scale-[0.98] transition-transform mt-4"
            >
              Passer aux exercices →
            </button>
          </div>
        )}

        {/* ── EXERCISES TAB ─────────────────────────────────────────────────── */}
        {tab === 'exercises' && (
          <div>
            {/* Progress */}
            <div className="mb-5 space-y-2">
              <div className="flex justify-between text-xs text-brand-gray">
                <span>Exercice {Math.min(exerciseIndex + 1, dayContent.exercises.length)} / {dayContent.exercises.length}</span>
                <span>{results.filter(Boolean).length} corrects</span>
              </div>
              <ProgressBar value={exerciseProgress} size="sm" />
            </div>

            {/* Exercise done → summary */}
            {exerciseDone ? (
              <ExerciseSummary
                results={results}
                total={dayContent.exercises.length}
                isAlreadyValidated={isValidated}
                onValidate={() => setShowValidation(true)}
                onRetry={() => {
                  setExerciseIndex(0);
                  setResults([]);
                  setExerciseDone(false);
                }}
              />
            ) : (
              <ExerciseWrapper
                key={exerciseIndex}
                exercise={dayContent.exercises[exerciseIndex]}
                index={exerciseIndex}
                total={dayContent.exercises.length}
                onResult={handleExerciseResult}
              />
            )}
          </div>
        )}
      </div>

      {/* Validate modal */}
      {showValidation && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-8">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm space-y-4">
            <div className="text-center">
              <p className="text-3xl mb-2">🎉</p>
              <h3 className="text-lg font-bold text-brand-black">Valider le jour {dayId} ?</h3>
              <p className="text-brand-gray text-sm mt-1">
                Score : <span className="font-bold text-brand-green">
                  {Math.round((results.filter(Boolean).length / results.length) * 100)}%
                </span>
              </p>
              <p className="text-xs text-brand-gray mt-1">
                Le jour {dayId + 1} sera débloqué.
              </p>
            </div>
            <button
              onClick={handleValidate}
              className="w-full bg-brand-green text-white font-bold py-4 rounded-xl text-lg active:scale-[0.98] transition-transform"
            >
              J'ai compris, valider ce jour ✅
            </button>
            <button
              onClick={() => setShowValidation(false)}
              className="w-full text-brand-gray font-medium py-2 text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Exercise Summary ──────────────────────────────────────────────────────────
function ExerciseSummary({
  results,
  total,
  isAlreadyValidated,
  onValidate,
  onRetry,
}: {
  results: boolean[];
  total: number;
  isAlreadyValidated: boolean;
  onValidate: () => void;
  onRetry: () => void;
}) {
  const correct = results.filter(Boolean).length;
  const score = Math.round((correct / total) * 100);

  return (
    <div className="space-y-5 text-center">
      <div className={`rounded-2xl px-6 py-8 ${score >= 70 ? 'bg-brand-green-pale' : 'bg-orange-50'}`}>
        <p className="text-5xl font-black mb-2" style={{ color: score >= 70 ? '#1a4731' : '#c2410c' }}>
          {score}%
        </p>
        <p className="font-semibold text-brand-black">
          {correct} / {total} correct{correct > 1 ? 's' : ''}
        </p>
        <p className="text-sm text-brand-gray mt-1">
          {score === 100 ? 'Parfait ! Excellent travail ! 🏆' :
           score >= 80 ? 'Très bien ! Continue comme ça 🌟' :
           score >= 60 ? 'Bien ! Tu progresses 👍' :
           'Continue à t\'entraîner, tu vas y arriver 💪'}
        </p>
      </div>

      {!isAlreadyValidated && (
        <button
          onClick={onValidate}
          className="w-full bg-brand-green text-white font-bold py-4 rounded-xl text-base active:scale-[0.98] transition-transform"
        >
          J'ai compris, valider ce jour ✅
        </button>
      )}

      {isAlreadyValidated && (
        <div className="text-brand-green font-semibold text-sm">✅ Ce jour est déjà validé</div>
      )}

      <button
        onClick={onRetry}
        className="w-full border border-brand-gray-border text-brand-gray font-medium py-3 rounded-xl text-sm"
      >
        Recommencer les exercices
      </button>

      <Link
        href="/program"
        className="block w-full text-center text-brand-gray font-medium py-2 text-sm"
      >
        ← Retour au programme
      </Link>
    </div>
  );
}
