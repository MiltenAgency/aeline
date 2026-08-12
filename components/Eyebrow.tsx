export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink ${className}`}>
      <span className="text-[9px] text-ink" aria-hidden>
        ▪
      </span>
      <span>{children}</span>
    </div>
  );
}

