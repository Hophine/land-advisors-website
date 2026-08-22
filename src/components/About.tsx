import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { about } from "../content";
import { images } from "../images";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal, Stagger, staggerItem } from "./ui/Reveal";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

export function About() {
  return (
    <Section id="about" tone="light">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-navy-700">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <ImagePlaceholder slot={images.about} aspect="aspect-[4/3]" />
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-xl border border-teal-600/15 bg-teal-50 px-4 py-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-600" />
                <span className="text-sm font-semibold text-navy-900">{stat.value}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
