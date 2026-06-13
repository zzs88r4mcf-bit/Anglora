'use client';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import ProgressBar from '@/components/ProgressBar';
import { getDay } from '@/data';

export default function HomePage() {
  const {
    validatedCount,
    currentDay,
    globalProgress,
    formattedTime,
    currentStreak,
    bestStreak,
  } = useProgress();

  const dayData = getDay(currentDay);

  return (
    <div className="max-w-lg mx-auto px-4 pt-12 space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold text-brand-green uppercase tracking-widest mb-1">English in 60 Days</p>
        <h1 className="text-3xl font-bold text-brand-black tracking-tight">Bonjour 👋</h1>
        <p className="text-brand-gray mt-1 text-sm">Continue ton apprentissage quotidien</p>
      </div>

      {/* Main progress card */}
      <div className="bg-brand-green rounded-2xl p-5 text-white space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wide">Progression</p>
            <p className="text-4xl font-bold mt-0.5">{globalProgress}%</p>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-xs font-medium uppercase tracking-wide">Jours validés</p>
            <p className="text-4xl font-bold mt-0.5">{validatedCount}<span className="text-xl font-medium text-white/60">/60</span></p>
          </div>
        </div>
        <ProgressBar value={globalProgress} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Série actuelle" value={`${currentStreak}j`} icon="🔥" />
        <StatCard label="Meilleure série" value={`${bestStreak}j`} icon="⭐" />
        <StatCard label="Temps total" value={formattedTime} icon="⏱" />
      </div>

      {/* Current day card */}
      {dayData && (
        <div className="border border-brand-gray-border rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide">Jour actuel</p>
              <h2 className="text-xl font-bold text-brand-black mt-0.5">
                Jour {currentDay}
              </h2>
              <p className="text-brand-gray text-sm mt-0.5">{dayData.theme}</p>
            </div>
            <div className="text-right">
              <div className="w-14 h-14 rounded-2xl bg-brand-green-pale flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-green">{currentDay}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center py-2 border-t border-brand-gray-border">
            <div>
              <p className="text-lg font-bold text-brand-black">20</p>
              <p className="text-[11px] text-brand-gray">mots</p>
            </div>
            <div>
              <p className="text-lg font-bold text-brand-black">10</p>
              <p className="text-[11px] text-brand-gray">expressions</p>
            </div>
            <div>
              <p className="text-lg font-bold text-brand-black">20</p>
              <p className="text-[11px] text-brand-gray">exercices</p>
            </div>
          </div>

          <Link
            href={`/day/${currentDay}`}
            className="block w-full bg-brand-green text-white text-center font-semibold py-3.5 rounded-xl active:scale-[0.98] transition-transform"
          >
            Continuer →
          </Link>
        </div>
      )}

      {/* Quick tip */}
      <div className="bg-brand-gray-light rounded-xl px-4 py-3">
        <p className="text-xs text-brand-gray">
          💡 <span className="font-medium">Conseil :</span> 20 minutes par jour suffisent. La régularité est la clé !
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="border border-brand-gray-border rounded-xl p-3 text-center">
      <p className="text-xl">{icon}</p>
      <p className="text-lg font-bold text-brand-black mt-1">{value}</p>
      <p className="text-[10px] text-brand-gray leading-tight mt-0.5">{label}</p>
    </div>
  );
}
