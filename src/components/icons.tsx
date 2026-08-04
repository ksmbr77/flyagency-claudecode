type IconProps = { className?: string };
const base = "h-6 w-6";
const props = (className?: string) => ({
  viewBox: "0 0 24 24",
  fill: "none" as const,
  className: className ?? base,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true" as const,
});
const stroke = { stroke: "url(#iconGradient)", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconTarget({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <circle cx="12" cy="12" r="4.5" {...stroke} />
      <circle cx="12" cy="12" r="1.2" fill="url(#iconGradient)" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M12 3.5 19 6v6c0 4.2-2.9 7.3-7 8.5-4.1-1.2-7-4.3-7-8.5V6l7-2.5Z" {...stroke} />
      <path d="M9 12l2 2 4-4" {...stroke} />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M3.5 11.5 8 8l3 2 3-2 4.5 3.5" {...stroke} />
      <path d="M5 11l4 5 3-1.5 3 1.5 4-5" {...stroke} />
    </svg>
  );
}

export function IconLayout({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" {...stroke} />
      <path d="M3.5 9.5h17" {...stroke} />
      <path d="M8 9.5V20" {...stroke} />
    </svg>
  );
}

export function IconFunnel({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M4 4.5h16l-6 8v6l-4 2v-8l-6-8Z" {...stroke} />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M4 20V10M11 20V4M18 20v-7" {...stroke} />
      <path d="M3.5 20h17" {...stroke} />
    </svg>
  );
}

export function IconReport({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M6 3.5h9l3.5 3.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" {...stroke} />
      <path d="M9 12h6M9 15.5h6M9 8.5h3" {...stroke} />
    </svg>
  );
}

export function IconLoop({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8" {...stroke} />
      <path d="M17.2 3.5v3.2h-3.2M6.8 20.5v-3.2H10" {...stroke} />
    </svg>
  );
}

export function IconTrending({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M3.5 16.5 9.5 10.5 13.5 14.5 20.5 6.5" {...stroke} />
      <path d="M14.5 6.5h6v6" {...stroke} />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <path d="M15 9l-2 5-4.5 1.5L10.5 10 15 9Z" {...stroke} />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M13 4.5c3 1 5.5 4 5.5 7-2 1-4 1.2-5.5-.2-1.4-1.4-1.3-3.4-.2-5.5A9 9 0 0 1 13 4.5Z" {...stroke} />
      <path d="M11 12.5 6.5 17M8 20l1-2.5M4 16l2.5-1" {...stroke} />
      <circle cx="14.2" cy="9.8" r="1" fill="url(#iconGradient)" />
    </svg>
  );
}
