import type { ReactNode } from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: "0 20px 40px -12px rgba(11,42,63,0.18)" } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-900/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}
