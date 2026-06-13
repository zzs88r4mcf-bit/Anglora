'use client';
import { useProgress } from '@/hooks/useProgress';
import ProgressBar from '@/components/ProgressBar';

const TOTAL = 60;

export default function StatsPage() {
  const {
    progress,
    validatedCount,
    globalProgress,
    formattedTime,
    completedExercises,
    successRate,
    currentStreak,
    bestStreak,
    reset,
  } = useProgress();

  const remaining = TOTAL - validatedCount;

  // Average score
  const scores = Object.values(progress.days)
    .filter(d => d.status === 'validated' && d.score !== null)
    .map(d => d.score as number);
  const avgScore = scores.length > 0
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  return (
    <div className="max-w-lg mx-auto px-4 pt-10 pb-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-black">Statistiques</h1>
        <p className="text-brand-gray text-sm mt-0.5">Ton parcours en chiffres</p>
      </div>

      {/* Global progress */}
      <div className="border border-brand-gray-border rounded-2xl p-5 space-y-3">
        <h2 className="text-sm font-semibold text-brand-gray uppercase tracking-wide">Progression globale</h2>
        <div className="flex justify-between items-end">
          <span className="text-4xl font-black text-brand-black">{globalProgress}%</span>
          <span className="text-brand-gray text-sm">{validatedCount} / {TOTAL} jours</span>
        </div>
        <ProgressBar value={globalProgress} showLabel={false} />
      </div>

      {/* Main stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <BigStat label="Jours validés" value={`${validatedCount}`} sub="sur 60" color="green" />
        <BigStat label="Jours restants" value={`${remaining}`} sub="encore à faire" color="gray" />
        <BigStat label="Série actuelle" value={`${currentStreak}`} sub="jours consécutifs" color="orange" />
        <BigStat label="Meilleure série" value={`${bestStreak}`} sub="jours de record" color="purple" />
      </div>

      {/* Exercise stats */}
      <div className="border border-brand-gray-border rounded-2xl p-5 space-y-4">
        <h2 className="text-sm font-semibold text-brand-gray uppercase tracking-wide">Exercices</h2>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-2xl font-bold text-brand-black">{completedExercises}</p>
            <p className="text-xs text-brand-gray mt-0.5">terminés</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-black">{successRate}%</p>
            <p className="text-xs text-brand-gray mt-0.5">réussite</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-black">{avgScore}%</p>
            <p className="text-xs text-brand-gray mt-0.5">score moyen</p>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-brand-gray">
            <span>Taux de réussite</span>
            <span>{successRate}%</span>
          </div>
          <ProgressBar value={successRate} />
        </div>
      </div>

      {/* Time */}
      <div className="border border-brand-gray-border rounded-2xl p-5">
        <h2 className="text-sm font-semibold text-brand-gray uppercase tracking-wide mb-3">Temps d'apprentissage</h2>
        <p className="text-4xl font-black text-brand-black">{formattedTime}</p>
        <p className="text-brand-gray text-sm mt-1">temps total passé</p>
      </div>

      {/* Vocabulary knowledge */}
      <div className="border border-brand-gray-border rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-semibold text-brand-gray uppercase tracking-wide">Contenu débloqué</h2>
        <div className="grid grid-cols-3 gap-3 text-center mt-2">
          <div>
            <p className="text-xl font-bold text-brand-black">{validatedCount * 20}</p>
            <p className="text-xs text-brand-gray mt-0.5">mots vus</p>
          </div>
          <div>
            <p className="text-xl font-bold text-brand-black">{validatedCount * 10}</p>
            <p className="text-xs text-brand-gray mt-0.5">expressions</p>
          </div>
          <div>
            <p className="text-xl font-bold text-brand-black">{validatedCount}</p>
            <p className="text-xs text-brand-gray mt-0.5">points gramm.</p>
          </div>
        </div>
      </div>

      {/* Motivational message */}
      {validatedCount > 0 && (
        <div className="bg-brand-green-pale rounded-xl px-4 py-4">
          <p className="text-brand-green font-semibold text-sm">
            {validatedCount >= 60 ? '🏆 Félicitations ! Tu as terminé les 60 jours !' :
             validatedCount >= 45 ? '🔥 Incroyable, tu es presque au bout !' :
             validatedCount >= 30 ? '⭐ Mi-parcours ! Tu es à mi-chemin, continue !' :
             validatedCount >= 15 ? '💪 Tu es dans le rythme, continue comme ça !' :
             '🌱 Bon début ! Chaque jour compte !'}
          </p>
        </div>
      )}

      {/* Reset button */}
      <div className="pt-2">
        <button
          onClick={() => {
            if (window.confirm('Remettre toute la progression à zéro ? Cette action est irréversible.')) {
              reset();
            }
          }}
          className="w-full border border-red-200 text-red-400 font-medium py-3 rounded-xl text-sm active:scale-[0.98] transition-transform"
        >
          Réinitialiser la progression
        </button>
      </div>
    </div>
  );
}

function BigStat({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  color: 'green' | 'gray' | 'orange' | 'purple';
}) {
  const bg = {
    green: 'bg-brand-green-pale',
    gray: 'bg-brand-gray-light',
    orange: 'bg-orange-50',
    purple: 'bg-purple-50',
  }[color];

  const text = {
    green: 'text-brand-green',
    gray: 'text-brand-black',
    orange: 'text-orange-600',
    purple: 'text-purple-600',
  }[color];

  return (
    <div className={`${bg} rounded-xl p-4`}>
      <p className={`text-3xl font-black ${text}`}>{value}</p>
      <p className="text-xs text-brand-gray mt-0.5">{sub}</p>
      <p className="text-xs font-semibold text-brand-black mt-1">{label}</p>
    </div>
  );
}
