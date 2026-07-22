interface ProgressBarProps {
  value?: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ value = 0, label, className = "" }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && <p className="mb-2 text-sm font-medium text-muted">{label}</p>}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-hover"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-linear-to-r from-accent to-primary transition-all duration-300" style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}
