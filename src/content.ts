/**
 * All site copy lives here so it can be edited without touching component code.
 */

export const brand = {
  name: "LAND ADVISORS CO. LIMITED",
  shortName: "Land Advisors",
  tagline: "Your Trusted Partner in Real Estate and Beyond",
  slogan: "Professional Advice • Reliable Solutions • Sustainable Value",
};

export const whatsapp = {
  number: "255719399316",
  url: "https://wa.me/255719399316",
};

export const contact = {
  addressLines: [
    "Head Office, Mpakani Centre Building",
    "Plot No. 8, Block 46 Mpakani, Sam Nujoma",
    "Kinondoni District, Dar es Salaam, Tanzania",
  ],
  poBox: "P.O. Box 35461, Dar es Salaam",
  phones: ["+255 719 399 316", "+255 714 276 334"],
  email: "info@landadvisorstz.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Sam+Nujoma+Road,+Kinondoni,+Dar+es+Salaam,+Tanzania&output=embed",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Registered & Licensed Real Estate Consultancy — Tanzania",
  heading: brand.name,
  tagline: brand.tagline,
  subhead:
    "A comprehensive real estate consultancy delivering valuation, land management, real estate agency, feasibility studies, and investment support across Tanzania.",
  primaryCta: "Chat on WhatsApp",
  secondaryCta: "Our Services",
};

export const about = {
  eyebrow: "About Us",
  heading: "A trusted, locally owned consultancy built on expertise",
  paragraphs: [
    "Incorporated in 2025 in Tanzania, LAND ADVISORS CO. LIMITED is a professionally registered real estate consultancy providing real estate consultancy, valuation, land management, real estate agency, feasibility studies, and investment support to public and private sector clients.",
    "We deliver practical, reliable, professional solutions so our clients can make informed land, property, and infrastructure investment decisions — combining professional expertise, local market knowledge, and modern technology.",
    "LAND ADVISORS CO. LIMITED is 100% locally owned by Tanzanians, giving us deep-rooted market insight paired with international-standard practice.",
  ],
  stats: [
    { label: "Est. 2025", value: "Est. 2025" },
    { label: "AREPTA Corporate Member", value: "AREPTA" },
    { label: "Nationwide coverage", value: "Nationwide" },
    { label: "Licensed Valuers", value: "Licensed" },
  ],
};

export type Service = {
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Real Estate Valuation",
    items: [
      "Market value assessments",
      "Mortgage & loan security valuations",
      "Insurance valuations",
      "Investment valuations",
      "Financial reporting valuations",
      "Rental valuations",
      "Probate & estate valuations",
      "Auction & forced sale valuations",
    ],
  },
  {
    title: "Plant, Machinery & Equipment Valuation",
    items: [
      "Industrial plant & machinery",
      "Manufacturing equipment",
      "Construction equipment",
      "Agricultural machinery",
      "Heavy equipment",
      "Vehicles & fleet valuation",
    ],
  },
  {
    title: "Land & Property Consultancy",
    items: [
      "Land acquisition advisory",
      "Property development consultancy",
      "Land administration & management",
      "Land tenure advisory",
      "Property portfolio management",
      "Property market analysis",
    ],
  },
  {
    title: "Compensation & Resettlement Services",
    items: [
      "Property compensation assessments",
      "Land acquisition valuation",
      "Resettlement Action Plans (RAP)",
      "Compensation negotiation support",
    ],
  },
  {
    title: "Property Management Services",
    items: [
      "Property leasing & letting",
      "Rent collection & administration",
      "Property maintenance coordination",
      "Tenant management",
      "Service charge administration",
    ],
  },
  {
    title: "Real Estate Investment Advisory",
    items: [
      "Investment feasibility studies",
      "Highest & best use analysis",
      "Property due diligence",
      "Investment risk assessment",
      "Market research & analysis",
    ],
  },
  {
    title: "Research & Advisory Services",
    items: [
      "Real estate market surveys",
      "Land policy & regulatory advisory",
      "Economic & financial analysis",
      "Institutional asset verification",
      "Strategic property advisory",
    ],
  },
  {
    title: "Asset Verification & Inventory",
    items: [
      "Fixed asset verification",
      "Asset register development",
      "Asset tagging & coding",
      "Asset condition assessment",
      "Asset management advisory",
    ],
  },
  {
    title: "Training & Capacity Building",
    items: [
      "Property valuation training",
      "Land management workshops",
      "Asset management training",
      "Professional development programs",
    ],
  },
];

export type TeamMember = {
  key: "mbunda" | "saule" | "hyera";
  name: string;
  title: string;
  credentials: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    key: "mbunda",
    name: "FRV. Nelson S. Mbunda",
    title: "Managing Director",
    credentials:
      "BSc Land Management & Valuation (Ardhi University) · Fully Registered and Licensed Valuer (FRV) · Certified Hotel Valuer (CHV) · Member, AREPTA",
    bio: "Over 9 years' experience in valuation, land management, compensation assessments, and real estate advisory. Formerly Senior Valuer at Proper Consult (T) Ltd for 8+ years, serving banks, government institutions, NGOs, corporates, and private clients across Mainland Tanzania and Zanzibar.",
  },
  {
    key: "saule",
    name: "FRV. Gerald S. Saule",
    title: "Director",
    credentials:
      "BSc Land Management & Valuation (UCLAS) · Fully Registered and Licensed Valuer (VRB) · Member, AREPTA",
    bio: "Extensive experience in property valuation, estate management, land administration, and asset management. Former Senior Valuer at Proper Consult and Property Mark Company Limited, Senior Valuer/Property Consultant at J&B Property Management, and Head of Estate Management at A1 Outdoor.",
  },
  {
    key: "hyera",
    name: "Adv. Paulo Patience Hyera",
    title: "Company Secretary",
    credentials: "Bachelor of Laws (LLB), Iringa University · Active Member, Tanganyika Law Society (TLS)",
    bio: "Corporate law and governance specialist; Founder & Principal Advocate of Wakili Wako & Associates, with expertise in commercial law, property & land law, contract drafting, and dispute resolution. Advises the Board on compliance, statutory filings, and corporate governance.",
  },
];


export const whyChooseUs = [
  { label: "Registered & Licensed Valuers (VRB)" },
  { label: "AREPTA Corporate Member" },
  { label: "Professional Indemnity Insured" },
  { label: "Locally Owned, Nationwide Reach" },
  { label: "Integrity, Confidentiality, Technical Excellence" },
];

export const footerCopy = {
  description:
    "A comprehensive real estate consultancy delivering valuation, land management, real estate agency, feasibility studies, and investment support across Tanzania.",
};
