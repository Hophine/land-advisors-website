import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { brand, contact, whatsapp } from "../content";
import { images } from "../images";
import { Section, Eyebrow } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

export function Contact() {
  return (
    <Section id="contact" tone="muted">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {brand.tagline}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gold-700">
            {brand.slogan}
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
              <div className="text-sm leading-relaxed text-navy-700">
                {contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-1 text-navy-500">{contact.poBox}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
              <div className="text-sm leading-relaxed text-navy-700">
                {contact.phones.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
              <a href={`mailto:${contact.email}`} className="text-sm text-navy-700 hover:text-teal-700">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="mt-9">
            <Button href={whatsapp.url} variant="primary" size="lg" icon={<MessageCircle className="h-5 w-5" />}>
              Chat with us on WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-sm">
            <iframe
              title="Land Advisors location map"
              src={contact.mapEmbedUrl}
              className="h-72 w-full grayscale-[15%] sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ImagePlaceholder slot={images.contact} aspect="aspect-[16/9]" />
        </Reveal>
      </div>
    </Section>
  );
}
