interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export default function ProgressBar({ value, className = '', showLabel = false, size = 'md' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const height = size === 'sm' ? 'h-1.5' : 'h-2';

  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full bg-brand-gray-border rounded-full overflow-hidden ${height}`}>
        <div
          className="h-full bg-brand-green rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-right mt-1">
          <span className="text-xs text-brand-gray font-medium">{clamped}%</span>
        </div>
      )}
    </div>
  );
}
