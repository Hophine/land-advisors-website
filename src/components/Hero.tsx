import { motion, type Variants } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { hero, whatsapp } from "../content";
import { images } from "../images";
import { Button } from "./ui/Button";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 pb-20 pt-32 sm:pt-40 sm:pb-28">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-teal-600/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-gold-500/15 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-400"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.heading}
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-lg font-medium text-teal-200 sm:text-xl">
            {hero.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {hero.subhead}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={whatsapp.url} variant="primary" size="lg" icon={<MessageCircle className="h-5 w-5" />}>
              {hero.primaryCta}
            </Button>
            <Button href="#services" variant="ghost" size="lg" external={false} icon={<ArrowDown className="h-4 w-4" />}>
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ImagePlaceholder
              slot={images.heroBackground}
              aspect="aspect-[4/3]"
              className="border-white/15 bg-white/5 text-white/50 backdrop-blur-sm"
            />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/95 px-6 py-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Serving</p>
            <p className="font-display text-lg font-bold text-navy-950">All of Tanzania</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
