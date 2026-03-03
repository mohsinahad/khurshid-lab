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

      {/* RNA strand — left backbone */}
      <path
        d="M12 8 C12 12, 18 14, 18 18 C18 22, 12 24, 12 28 C12 32, 18 34, 18 36"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* RNA strand — right backbone */}
      <path
        d="M28 8 C28 12, 22 14, 22 18 C22 22, 28 24, 28 28 C28 32, 22 34, 22 36"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Base pair rungs */}
      <line x1="14" y1="11" x2="26" y2="11" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="1.5 1.5" />
      <line x1="17" y1="16" x2="23" y2="16" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="1.5 1.5" />
      <line x1="14" y1="21" x2="26" y2="21" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="1.5 1.5" />
      <line x1="17" y1="26" x2="23" y2="26" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="1.5 1.5" />
      <line x1="14" y1="31" x2="26" y2="31" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="1.5 1.5" />

      {/* Nucleotide dots */}
      <circle cx="14" cy="11" r="2" fill="#a5b4fc" />
      <circle cx="26" cy="11" r="2" fill="#5eead4" />
      <circle cx="17" cy="16" r="2" fill="#5eead4" />
      <circle cx="23" cy="16" r="2" fill="#a5b4fc" />
      <circle cx="14" cy="21" r="2" fill="#fbbf24" />
      <circle cx="26" cy="21" r="2" fill="#a5b4fc" />
      <circle cx="17" cy="26" r="2" fill="#a5b4fc" />
      <circle cx="23" cy="26" r="2" fill="#5eead4" />
      <circle cx="14" cy="31" r="2" fill="#5eead4" />
      <circle cx="26" cy="31" r="2" fill="#fbbf24" />

      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
