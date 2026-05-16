type LogoProps = { size?: number; className?: string };

export function Logo({ size = 22, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a5b4ff" />
            <stop offset="55%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="8" fill="#0a0a12" stroke="url(#lg)" strokeWidth="1.25" />
        <path
          d="M10 12.5C10 11.1193 11.1193 10 12.5 10H19C21.7614 10 24 12.2386 24 15V17C24 19.7614 21.7614 22 19 22H14L10 25.5V12.5Z"
          stroke="url(#lg)"
          strokeWidth="1.6"
          fill="rgba(99,102,241,0.08)"
        />
        <circle cx="14.5" cy="16" r="1.1" fill="#a5b4ff" />
        <circle cx="18.5" cy="16" r="1.1" fill="#38bdf8" />
      </svg>
      <span className="font-medium tracking-tight text-[15px] text-ink-50">
        Chris<span className="text-ink-300">.AI</span>
      </span>
    </span>
  );
}
