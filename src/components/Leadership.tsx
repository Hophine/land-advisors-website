import { motion } from "framer-motion";
import { team } from "../content";
import { images } from "../images";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal, Stagger, staggerItem } from "./ui/Reveal";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

function initialsOf(name: string) {
  const clean = name.replace(/^(FRV\.|Adv\.)\s*/i, "");
  return clean
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Leadership() {
  return (
    <Section id="leadership" tone="light">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          Meet the team behind Land Advisors
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy-700">
          Registered valuers and a corporate governance specialist with decades of combined experience
          across Tanzania's real estate sector.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.1}>
        {team.map((member) => (
          <motion.div
            key={member.key}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-900/5"
          >
            <div className="relative">
              <ImagePlaceholder
                slot={images.team[member.key]}
                aspect="aspect-square"
                className="mb-5"
              />
              <span className="absolute bottom-8 left-3 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-lg font-bold text-white shadow-md">
                {initialsOf(member.name)}
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-navy-950">{member.name}</h3>
            <p className="mt-0.5 text-sm font-semibold text-teal-700">{member.title}</p>
            <p className="mt-3 text-xs leading-relaxed text-navy-600">{member.credentials}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">{member.bio}</p>
          </motion.div>
        ))}
      </Stagger>
    </Section>
  );
}
