import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "../content";
import { images } from "../images";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm shadow-navy-900/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          {images.logo.src ? (
            <img src={images.logo.src} alt={images.logo.alt} className="h-9 w-auto object-contain" />
          ) : (
            <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#08696b" />
              <path d="M32 12L52 28V50H38V36H26V50H12V28L32 12Z" fill="#ffffff" />
              <rect x="26" y="36" width="12" height="14" fill="#0a0a0a" />
            </svg>
          )}
          <span
            className={`font-display text-sm font-bold tracking-tight sm:text-base ${
              scrolled ? "text-navy-950" : "text-navy-950"
            }`}
          >
            LAND ADVISORS <span className="text-teal-600">CO. LTD</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-navy-950 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="touch-manipulation rounded-lg px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="sr-only">{brand.name}</p>
    </motion.header>
  );
}
