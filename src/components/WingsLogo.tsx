export default function WingsLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8c-6 8-16 12-24 12 4 4 12 6 18 4-6 6-10 14-10 22 6-4 12-12 14-20 2 8 8 16 14 20 0-8-4-16-10-22 6 2 14 0 18-4-8 0-18-4-24-12"
        stroke="url(#wing-gradient)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="url(#wing-gradient-fill)"
        fillOpacity="0.15"
      />
      <defs>
        <linearGradient id="wing-gradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d8b4fe" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="wing-gradient-fill" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9d5ff" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
