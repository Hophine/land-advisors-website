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
    src: "",
    alt: "Dar es Salaam skyline / real estate development",
    caption: "Add hero photo here",
  },
  about: {
    src: "",
    alt: "Land Advisors office or Dar es Salaam property skyline",
    caption: "Add about-section photo here",
  },
  contact: {
    src: "",
    alt: "Land Advisors office front or location photo",
    caption: "Add office / location photo here",
  },
  logo: {
    src: "",
    alt: "Land Advisors Co. Limited logo",
    caption: "Add high-res logo file here",
  },
  team: {
    mbunda: { src: "", alt: "FRV. Nelson S. Mbunda", caption: "Add headshot" },
    saule: { src: "", alt: "FRV. Gerald S. Saule", caption: "Add headshot" },
    hyera: { src: "", alt: "Adv. Paulo Patience Hyera", caption: "Add headshot" },
  },
  experience: {
    subdivision: { src: "", alt: "Land subdivision advisory", caption: "Add project photo" },
    agaKhan: { src: "", alt: "Plant & machinery valuation", caption: "Add project photo" },
    jehovah: { src: "", alt: "Real estate market appraisal, Mtwara", caption: "Add project photo" },
    dreamrise: { src: "", alt: "Industrial facility valuation", caption: "Add project photo" },
    crdb: { src: "", alt: "Property verification for loan processing", caption: "Add project photo" },
    lodges: { src: "", alt: "Serengeti & Lake Manyara wildlife lodges", caption: "Add project photo" },
  },
} as const satisfies Record<string, ImageSlot | Record<string, ImageSlot>>;
