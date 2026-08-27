/**
 * Central image registry. Every image slot on the site pulls its `src` from
 * here. To drop in real photography later, replace the empty string with a
 * path (e.g. "/images/hero.jpg" for a file placed in /public/images) — no
 * component code needs to change.
 */
export type ImageSlot = {
  src: string;
  alt: string;
  caption: string;
};

export const images = {
  heroBackground: {
    src: "/images/serving-all-of-tanzania.jpg",
    alt: "Land Advisors serving all of Tanzania",
    caption: "Add hero photo here",
  },
  about: {
    src: "/images/about.jpeg",
    alt: "Land Advisors office or Dar es Salaam property skyline",
    caption: "Add about-section photo here",
  },
  contact: {
    src: "",
    alt: "Land Advisors office front or location photo",
    caption: "Add office / location photo here",
  },
  logo: {
    src: "/images/logo.png",
    alt: "Land Advisors Co. Limited logo",
    caption: "Add high-res logo file here",
  },
  team: {
    mbunda: { src: "/images/nelson.jpeg", alt: "FRV. Nelson S. Mbunda", caption: "Add headshot" },
    saule: { src: "/images/gerald.jpeg", alt: "FRV. Gerald S. Saule", caption: "Add headshot" },
    hyera: { src: "/images/paulo.jpeg", alt: "Adv. Paulo Patience Hyera", caption: "Add headshot" },
  },
  experience: {
    agaKhan: { src: "/images/agakhan.jpeg", alt: "The Aga Khan Hospital, Dar es Salaam", caption: "Add client logo" },
    jehovah: { src: "/images/jw.jpeg", alt: "Jehovah's Witnesses of Tanzania", caption: "Add client logo" },
    dreamrise: { src: "/images/megapipes.jpeg", alt: "Mega Pipes Solutions Ltd", caption: "Add client logo" },
    crdb: { src: "/images/crdb.jpeg", alt: "CRDB Bank PLC", caption: "Add client logo" },
    lodges: { src: "/images/hotel-and-lodges.jpeg", alt: "Hotels & Lodges (T) Ltd", caption: "Add client logo" },
  },
} as const satisfies Record<string, ImageSlot | Record<string, ImageSlot>>;
