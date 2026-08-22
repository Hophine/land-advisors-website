import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck2, Globe2, HeartHandshake } from "lucide-react";
import { whyChooseUs } from "../content";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal, Stagger, staggerItem } from "./ui/Reveal";

const icons = [ShieldCheck, Award, FileCheck2, Globe2, HeartHandshake];

export function WhyChooseUs() {
  return (
    <Section id="why-us" tone="dark">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow className="bg-gold-500/15 text-gold-400">Why Choose Us</Eyebrow>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Credentials you can rely on
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.08}>
        {whyChooseUs.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item.label}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-semibold leading-snug text-white/90">{item.label}</p>
            </motion.div>
          );
        })}
      </Stagger>
    </Section>
  );
}
