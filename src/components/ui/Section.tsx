import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "muted" | "dark";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-white",
  muted: "bg-teal-50",
  dark: "bg-navy-950 text-white",
};

export function Section({ id, children, className = "", tone = "light" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-700 ${className}`}
    >
      {children}
    </span>
  );
}
