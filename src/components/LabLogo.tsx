interface LabLogoProps {
  size?: number;
  className?: string;
}

export default function LabLogo({ size = 36, className = "" }: LabLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="url(#logo-grad)" />

      {/* Exon blocks — E1, E2, E3 */}
      <rect x="5"  y="13" width="6" height="6" rx="1.5" fill="white" />
      <rect x="17" y="13" width="6" height="6" rx="1.5" fill="white" />
      <rect x="29" y="13" width="6" height="6" rx="1.5" fill="white" />

      {/* Intron lines between exons */}
      <line x1="11" y1="16" x2="17" y2="16" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <line x1="23" y1="16" x2="29" y2="16" stroke="white" strokeWidth="1.5" opacity="0.35" />

      {/* Normal splicing — two small teal arcs joining adjacent exons */}
      <path d="M11 16 Q14 26 17 16" stroke="#5eead4" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M23 16 Q26 26 29 16" stroke="#5eead4" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Cancer — one large red arc skipping E2 */}
      <path d="M11 16 Q20 38 29 16" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
