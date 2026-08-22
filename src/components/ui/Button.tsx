import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-teal-600 text-white shadow-lg shadow-teal-900/20 hover:bg-teal-700 focus-visible:outline-teal-600",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/30 hover:bg-navy-50 focus-visible:outline-navy-800",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:outline-white",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  external = true,
  className = "",
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
      {children}
    </motion.a>
  );
}
