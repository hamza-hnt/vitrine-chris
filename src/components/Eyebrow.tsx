type EyebrowProps = { children: React.ReactNode; index?: string };

export function Eyebrow({ children, index }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-300 font-mono">
      {index && (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full hairline text-ink-200">
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-ink-600/60" />
      <span>{children}</span>
    </div>
  );
}
