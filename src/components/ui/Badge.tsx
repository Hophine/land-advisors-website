import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-teal-600/20 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800 ${className}`}
    >
      {children}
    </span>
  );
}
