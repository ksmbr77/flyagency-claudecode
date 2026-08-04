"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
};

export default function PremiumButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  target,
}: Props) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-violet to-violet-secondary glow-violet"
      : "text-white/90 glass hover:bg-white/[0.07]";

  const motionProps = {
    className: `${base} ${styles} ${className}`,
    initial: "rest" as const,
    whileHover: "hover" as const,
    whileTap: { scale: 0.97 },
    animate: "rest" as const,
    variants: { rest: { scale: 1 }, hover: { scale: 1.045 } },
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  };

  const content = (
    <>
      <span>{children}</span>
      <motion.span
        className="inline-block"
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        →
      </motion.span>
    </>
  );

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} {...motionProps}>
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      {...motionProps}
    >
      {content}
    </motion.a>
  );
}
