import Link from 'next/link';
import type { DayStatus } from '@/types';

interface DayCardProps {
  id: number;
  theme: string;
  status: DayStatus;
  score: number | null;
}

export default function DayCard({ id, theme, status, score }: DayCardProps) {
  const isLocked = status === 'locked';
  const isValidated = status === 'validated';
  const isUnlocked = status === 'unlocked';

  const card = (
    <div
      className={`
        relative rounded-2xl p-4 border transition-all
        ${isLocked
          ? 'bg-brand-gray-light border-brand-gray-border opacity-60'
          : isValidated
            ? 'bg-brand-green border-brand-green text-white shadow-sm'
            : 'bg-white border-brand-gray-border shadow-sm hover:shadow-md hover:border-brand-green-muted'
        }
      `}
    >
      {/* Day number */}
      <div className={`text-xs font-semibold mb-1 ${isValidated ? 'text-white/70' : 'text-brand-gray'}`}>
        Jour {id}
      </div>

      {/* Theme */}
      <div className={`text-sm font-semibold leading-snug line-clamp-2 ${
        isLocked ? 'text-brand-gray' : isValidated ? 'text-white' : 'text-brand-black'
      }`}>
        {theme}
      </div>

      {/* Status / score */}
      <div className="mt-2 flex items-center justify-between">
        {isValidated && score !== null ? (
          <span className="text-xs font-bold text-white/90">{score}%</span>
        ) : isUnlocked ? (
          <span className="text-xs font-semibold text-brand-green">En cours →</span>
        ) : (
          <LockIcon />
        )}
      </div>

      {/* Validated checkmark */}
      {isValidated && (
        <div className="absolute top-3 right-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </div>
  );

  if (isLocked) return card;

  return <Link href={`/day/${id}`} className="block">{card}</Link>;
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gray">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
