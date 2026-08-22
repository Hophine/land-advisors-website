import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  Factory,
  Map,
  Handshake,
  Building2,
  TrendingUp,
  Search,
  ListChecks,
  GraduationCap,
  Plus,
} from "lucide-react";
import { services } from "../content";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal, Stagger, staggerItem } from "./ui/Reveal";

const icons = [
  ClipboardCheck,
  Factory,
  Map,
  Handshake,
  Building2,
  TrendingUp,
  Search,
  ListChecks,
  GraduationCap,
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="services" tone="muted">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          A full spectrum of real estate expertise
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy-700">
          Nine specialist practice areas covering valuation, land, investment, and advisory services —
          tap a card to explore.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          const isOpen = openIndex === i;
          return (
            <motion.button
              key={service.title}
              type="button"
              variants={staggerItem}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 text-left shadow-sm shadow-navy-900/5 transition-shadow hover:shadow-lg hover:shadow-navy-900/10"
              aria-expanded={isOpen}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </div>

              <h3 className="font-display mt-5 text-lg font-bold text-navy-950">{service.title}</h3>

              <p className="mt-2 text-sm text-navy-600">
                {service.items.length} specialist services
              </p>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden space-y-2 border-t border-navy-900/8 pt-4"
                  >
                    {service.items.map((sub) => (
                      <li key={sub} className="flex items-start gap-2 text-sm text-navy-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                        {sub}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </Stagger>
    </Section>
  );
}
