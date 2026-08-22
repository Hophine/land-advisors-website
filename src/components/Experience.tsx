import { motion } from "framer-motion";
import { MapPin, CalendarDays, CheckCircle2 } from "lucide-react";
import { experience, clientSectors } from "../content";
import { images } from "../images";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal, Stagger, staggerItem } from "./ui/Reveal";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

export function Experience() {
  return (
    <Section id="experience" tone="muted">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Track Record</Eyebrow>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          Recent assignments across Tanzania
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy-700">{clientSectors}</p>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-teal-600/20 lg:block" />

        <Stagger className="space-y-6 lg:space-y-10" staggerDelay={0.08}>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.key}
              variants={staggerItem}
              className={`relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <span className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-teal-600 bg-white lg:block" />

              <div className="[direction:ltr]">
                <ImagePlaceholder
                  slot={images.experience[exp.key]}
                  aspect="aspect-[16/10]"
                />
              </div>

              <div className="[direction:ltr] rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-900/5">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-navy-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {exp.year}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-teal-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {exp.status}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-lg font-bold text-navy-950">{exp.assignment}</h3>
                <p className="mt-1.5 text-sm font-medium text-navy-700">{exp.client}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
