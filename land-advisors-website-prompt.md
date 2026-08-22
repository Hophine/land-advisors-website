# Claude Code Prompt — Land Advisors Co. Ltd Website

Copy everything below into Claude Code as your project brief.

---

Build a modern, professional, animation-rich marketing website for a Tanzanian real estate consultancy called **LAND ADVISORS CO. LIMITED**. This is a fully static site — **no backend, no database, no CMS**. All content is hardcoded from the brief below. The only "action" on the site is a Contact button that opens WhatsApp directly (no contact form, no email backend).

## Tech stack
- Next.js (App Router) + TypeScript, or Vite + React + TypeScript if you prefer something lighter — pick whichever renders fastest and cleanest for a static marketing site.
- Tailwind CSS for styling.
- Framer Motion for animations (scroll-reveals, staggered fades, hover micro-interactions, smooth page transitions).
- Fully responsive (mobile-first) — a large share of Tanzanian visitors will be on phones.
- Deployable as a static export (no server-side requirements).

## Brand
- **Name:** LAND ADVISORS CO. LIMITED
- **Tagline:** "Your Trusted Partner in Real Estate and Beyond"
- **Slogan:** "Professional Advice • Reliable Solutions • Sustainable Value"
- **Vibe:** trustworthy, established, premium real estate/valuation consultancy — think clean corporate real-estate site (teal/deep-blue + white + a warm gold/amber accent), generous whitespace, confident typography, subtle parallax/scroll animation rather than flashy gimmicks. Avoid generic stock-photo cheesiness — use icon-driven sections and elegant cards instead where real photography isn't available.
- Logo concept (for a simple SVG/icon mark if needed): a teal roofline/house icon — feel free to recreate something similar and clean.

## Site structure / sections

### 1. Hero
- Company name + tagline, animated entrance (fade/slide + staggered text reveal).
- Short subhead: comprehensive real estate consultancy, valuation, land management, real estate agency, feasibility studies and investment support across Tanzania.
- Primary CTA button: **"Chat on WhatsApp"** → opens `https://wa.me/255719399316` in a new tab (use the format `https://wa.me/<countrycode+number, no plus/spaces>`).
- Secondary CTA: **"Our Services"** → scrolls to services section.
- Subtle animated background (soft gradient blobs, slow parallax, or a subtle grid/line pattern) — nothing distracting.

### 2. About / Company Overview
- Incorporated in 2025 in Tanzania, professionally registered real estate consultancy.
- Provides real estate consultancy, valuation, land management, real estate agency, feasibility studies, and investment support to public and private sector clients.
- Mission line: delivers practical, reliable, professional solutions so clients can make informed land, property and infrastructure investment decisions, combining professional expertise, local market knowledge, and modern technology.
- 100% locally owned by Tanzanians (mention as a trust signal, tastefully).
- Animate as a two-column layout: text on one side, an animated stat/credential strip on the other (e.g. "Est. 2025", "AREPTA Corporate Member", "Nationwide coverage", "Licensed Valuers").

### 3. Services (this is the core content section — make it feel rich)
Present as an animated grid of expandable/hoverable cards (9 categories). Each card: icon + title + short list of sub-services. On hover/tap, reveal the full sub-list or expand slightly.

1. **Real Estate Valuation** — Market value assessments, mortgage & loan security valuations, insurance valuations, investment valuations, financial reporting valuations, rental valuations, probate & estate valuations, auction & forced sale valuations.
2. **Plant, Machinery & Equipment Valuation** — Industrial plant & machinery, manufacturing equipment, construction equipment, agricultural machinery, heavy equipment, vehicles & fleet valuation.
3. **Land & Property Consultancy** — Land acquisition advisory, property development consultancy, land administration & management, land tenure advisory, property portfolio management, property market analysis.
4. **Compensation & Resettlement Services** — Property compensation assessments, land acquisition valuation, Resettlement Action Plans (RAP), compensation negotiation support.
5. **Property Management Services** — Property leasing & letting, rent collection & administration, property maintenance coordination, tenant management, service charge administration.
6. **Real Estate Investment Advisory** — Investment feasibility studies, highest & best use analysis, property due diligence, investment risk assessment, market research & analysis.
7. **Research & Advisory Services** — Real estate market surveys, land policy & regulatory advisory, economic & financial analysis, institutional asset verification, strategic property advisory.
8. **Asset Verification & Inventory** — Fixed asset verification, asset register development, asset tagging & coding, asset condition assessment, asset management advisory.
9. **Training & Capacity Building** — Property valuation training, land management workshops, asset management training, professional development programs.

### 4. Leadership / Team
Three profile cards with photo placeholder (initials avatar or simple silhouette icon — no real photos available), name, title, credentials, and a short bio. Animate in with a staggered scroll-reveal.

- **FRV. Nelson S. Mbunda — Managing Director.** BSc Land Management & Valuation (Ardhi University); Fully Registered and Licensed Valuer (FRV); Certified Hotel Valuer (CHV); Member, Association of Real Estate Professionals of Tanzania (AREPTA). Over 9 years' experience in valuation, land management, compensation assessments, and real estate advisory; formerly Senior Valuer at Proper Consult (T) Ltd for 8+ years, serving banks, government institutions, NGOs, corporates, and private clients across Mainland Tanzania and Zanzibar.
- **FRV. Gerald S. Saule — Director.** BSc Land Management & Valuation (UCLAS); Fully Registered and Licensed Valuer (VRB); Member, AREPTA. Extensive experience in property valuation, estate management, land administration, and asset management; former Senior Valuer at Proper Consult and Property Mark Company Limited, Senior Valuer/Property Consultant at J&B Property Management, and Head of Estate Management at A1 Outdoor.
- **Adv. Paulo Patience Hyera — Company Secretary.** Bachelor of Laws (LLB), Ruaha University; Active Member, Tanganyika Law Society (TLS). Corporate law and governance specialist; Founder & Principal Advocate of Wakili Wako & Associates, with expertise in commercial law, property & land law, contract drafting, and dispute resolution. Advises the Board on compliance, statutory filings, and corporate governance.

### 5. Experience / Track Record
Animated timeline or card grid of completed assignments (do NOT present as a rigid literal table — style it as elegant project/case cards or a horizontal timeline with scroll animation):

- **Prof. Louis Azaria Mbughuni** — Valuation of Land for Subdivision Advisory — Dar es Salaam — 2025 — Completed
- **The Aga Khan Health Service Tanzania** — Valuation of Plant & Machinery — Dar es Salaam — 2025 — Completed
- **Association of Jehovah's Witness of Tanzania** — Real Estate Market Appraisal — Mtwara — 2026 — Completed
- **Dreamrise Investment Ltd** — Valuation of an Industrial Facility for Tax Assessment — Dar es Salaam — 2026 — Completed
- **CRDB Bank PLC** — Property Verification for Loan Processing — Dar es Salaam — 2026 — Completed
- **Hotels & Lodges (T) Ltd** — Valuation of Hotels (Seronera Wildlife Lodge, Lobo Wildlife Lodge & Lake Manyara Wildlife Lodge) for Insurance Purpose — Serengeti National Park & Lake Manyara — 2026 — Completed

Also mention client sectors served in prose: commercial banks & financial institutions, government institutions & public agencies, NGOs, corporate organizations, private companies & individuals.

### 6. Why Choose Us / Credentials strip
A row of animated badges/highlights (icon + short label), e.g.:
- Registered & Licensed Valuers (VRB)
- AREPTA Corporate Member
- Professional Indemnity Insured
- Locally owned, nationwide reach
- Integrity, confidentiality, technical excellence

(Do not render the actual certificate images/documents — just reference the credentials as text/badges.)

### 7. Contact / CTA section
- Reinforce the tagline and slogan.
- Company address: Head Office, Mpakani Centre Building, Plot No. 8 Block 46 Mpakani, Sam Nujoma, Kinondoni District, Dar es Salaam, Tanzania. P.O. Box 35461, Dar es Salaam.
- Phone: +255 719 399 316 / +255 714 276 334
- Email: info@landadvisorstz.com
- Large, prominent **"Chat with us on WhatsApp"** button (same `wa.me` link as hero) — this is the primary conversion action on the whole site.
- Optional: a simple embedded Google Map pin for the Dar es Salaam location (static iframe, no API key needed) — skip if it adds friction.

### 8. Footer
- Company name, tagline, quick nav links, phone/email, WhatsApp icon link, copyright line with current year (computed dynamically, not hardcoded).

## Image placeholders
No real photography is available yet, so build the site to look complete now but make it trivial to drop real images in later. For every image spot below, use a clearly labeled placeholder (a styled `<div>` with a subtle background, icon, and small caption like "Add hero photo here") sized and cropped exactly as the final image should be, and pull the actual `src` from a single constants/config file (e.g. `images.ts`) so swapping in real photos later is a one-line change per spot.

Add placeholders in at least these spots:
- **Hero background/side image** — a large real-estate/skyline or office exterior shot behind or beside the hero text.
- **About section image** — office building, team at work, or a Dar es Salaam property/skyline shot next to the company overview text.
- **Leadership cards** — a photo slot for each of the 3 team members (currently initials/silhouette avatars), sized as square or portrait headshots.
- **Services section** — optional small icon-style images or background photos per category (can stay icon-only if photos aren't available, but leave the slot).
- **Experience/Track record cards** — an optional property/project photo per case card (e.g. Serengeti lodges, industrial facility, office).
- **Contact/CTA section** — a map or office-front photo near the address block.
- **Footer or About** — company logo file slot (currently using the SVG mark) in case a higher-res logo file is provided later.

## Animation guidance
- Scroll-triggered fade/slide-ins for each section (use Framer Motion's `whileInView`).
- Staggered reveal for service cards and team cards.
- Smooth hover states on cards/buttons (slight scale/lift + shadow).
- Sticky/animated navbar that changes background on scroll.
- Keep it tasteful and fast — no long load-blocking animations, respect `prefers-reduced-motion`.

## Explicit exclusions
- Do **not** include a contact form, database, CMS, or any backend/API routes.
- Do **not** reproduce or display the certificate/appendix documents (Certificate of Incorporation, Business License, TIN Certificate, Tax Clearance, VRB Certificate, AREPTA Certificate, PDPC Certificate) anywhere on the site — credentials should only appear as short text/badges, not as scanned images.
- No login, no user accounts, no dynamic data fetching.

## Deliverable
A polished, deployable static site (e.g. `next build && next export`, or Vite build output) with clean component structure, reusable UI primitives (Button, Card, Section, Badge), and all copy above wired in as static content/constants (e.g. a `content.ts` file) so it's easy for the client to edit text later without touching component code.
