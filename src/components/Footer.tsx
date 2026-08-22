import { MessageCircle, Phone, Mail } from "lucide-react";
import { brand, contact, footerCopy, nav, whatsapp } from "../content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
                <rect width="64" height="64" rx="14" fill="#17968c" />
                <path d="M32 12L52 28V50H38V36H26V50H12V28L32 12Z" fill="#071c2c" />
                <rect x="26" y="36" width="12" height="14" fill="#d9ab3c" />
              </svg>
              <span className="font-display text-sm font-bold tracking-tight text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{footerCopy.description}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-teal-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                {contact.phones[0]}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-teal-300">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Talk to Us</h4>
            <p className="mt-4 text-sm leading-relaxed">
              Have a question about a valuation, land matter, or investment? Message us directly.
            </p>
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-white/50">{brand.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
