# Polat Antalya Kebab & Pizza

Complete Polish restaurant website built with **Next.js 14.2.35**, React 18, TypeScript, Tailwind CSS 3, Inter and Playfair Display through `next/font`, and Lucide icons. The requested framework version is preserved.

## Run locally

Use Node.js 22 LTS (build also verified on Node 24) and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Production:

```bash
npm test
npm run typecheck
npm run build
npm start
```

The first build downloads Google font files. A network connection to Google Fonts is needed at build time; visitors receive self-hosted fonts from Next.js. All dish photographs are included locally. `npm run build` regenerates `public/sitemap.xml` and `public/robots.txt` from `NEXT_PUBLIC_SITE_URL` and `.env.local` before Next.js builds the pages.

## Pages

| Route                   | Contents                                                                    |
| ----------------------- | --------------------------------------------------------------------------- |
| `/`                     | Hero, menu tabs, delivery, about/gallery, review placeholders, FAQ, contact |
| `/menu`                 | 56 dishes across the full categories, search, mobile order button           |
| `/o-nas`                | About, Turkish menu highlights, eight-image gallery, philosophy             |
| `/dostawa`              | Ordering steps, pickup, delivery information and delivery FAQ               |
| `/polityka-prywatnosci` | Clearly marked privacy draft for the demonstration                          |
| `/regulamin`            | Clearly marked demonstration terms                                          |
| Unmatched paths         | Custom 404                                                                  |

All content pages are prerendered by Next.js. Interactive widgets hydrate in the browser. `next/image` optimizes local JPEGs at runtime on Vercel or `next start`. This is a normal Next.js deployment, not an `output: export` build; do not upload only `public/` to a static host.

## Edit the project

```text
app/                    App Router pages, layout and metadata
components/layout/      Navigation and footer
components/sections/    Page sections and interactive menu/contact
components/ui/          Shared buttons, cards, accordion, gallery, map and utilities
data/menu.ts            56 typed menu entries
data/faq.ts             General and delivery FAQ
lib/constants.ts        Business details, links, hours and historical brief figures
lib/contact.ts          Contact validation
lib/metadata.ts         Per-page SEO helper
lib/utils.ts            Class names, prices and search normalization
public/images/          Local product photos and clearly marked SVG placeholders
styles/globals.css      Design system and responsive layouts
scripts/generate-seo.mjs SEO asset generation
tests/                  Behavioral tests and DOM accessibility checks
```

Colors are configured in `tailwind.config.ts` and CSS variables: yellow `#F2C94C`, charcoal `#1A1A1A`, red `#D32F2F`, off-white `#F9F9F9`. Body and heading fonts are mapped in the Tailwind config. UI components accept `className`; Badge supports arbitrary labels including “Nowość” and “Bestseller”. No dish is falsely marked as new.

## Content decisions and demonstration features

- Business name, owner, address, phone, email and hours come from the supplied brief. There is no invented founding date, chef biography or supplier story. Confirm business details and holiday hours with the owner before public launch.
- Product names/prices were checked against the restaurant's [Glovo listing](https://glovoapp.com/pl/pl/olawa/stores/polat-antalya-kebab-pizza-ola) on 13 October 2026. Prices are a snapshot, not a live API; checkout is authoritative. Descriptions are brief editorial summaries, not an allergen list. The listing's falafel-on-a-plate description was inconsistent, so this item asks the customer to confirm ingredients.
- The brief had conflicting delivery figures: 5 zł, 1.99 zł, 8–60 minutes and free delivery above 40 zł. They remain in `UNVERIFIED_BRIEF` and are transparently contextualized on `/dostawa`, not advertised as verified offers. Price, delivery zones and ETA are checked in Glovo for the entered address.
- The supplied 86% recommendation rate is explicitly labeled unverified. No fictitious customer endorsements are presented as genuine. Three review cards are visibly marked placeholders. Replace them only with genuine permissioned reviews; no fabricated aggregate rating is added to JSON-LD.
- Form submission validates input locally and announces **that no message was sent**. A successful validation offers a `mailto:` draft containing the submitted details. No server request, storage, payment or email sending happens automatically. Add an actual server endpoint before changing the success copy.
- Instagram/Facebook links appear only after verified URLs are set in environment variables. No invented account URLs are used. The review button defaults to the restaurant's Maps search; configure `NEXT_PUBLIC_GOOGLE_REVIEW_URL` for a verified direct review link.
- Google Maps loads only after the visitor explicitly chooses it. The initial diagram is visibly labeled illustrative and is not a geographic map.
- Food photos are from the restaurant's Glovo listing. Interior, team, ingredients and kitchen illustrations are clearly marked photo placeholders. See `ASSET-SOURCES.md`. Replace these with the owner's approved photographs for a finished public launch.
- Privacy and terms pages are demonstration drafts, explicitly marked and `noindex`. Complete them with the actual operator and deployment details before public launch.

## Accessibility and mobile behavior

Semantic landmarks, Polish document language, skip link, one page H1, named controls, label/error associations, focus-visible styles, reduced-motion support and nonblocking loading notification are included. Mobile navigation uses native `<dialog>` for browser focus trapping, Escape and focus restoration. The menu uses roving tab focus with Left/Right/Home/End. FAQ exposes its expanded state and linked region; collapsed text is hidden from assistive technology. Search handles case and Polish diacritics, including ł.

Layouts are authored for 320, 375, 768, 1024 and 1440 px. Menu columns switch from one to two at 768 px and three at 1024 px. Tabs scroll horizontally. Main controls are at least 44 px. A bottom order button is present on the mobile full menu; scroll-to-top moves above it.

`npm test` checks the meaningful interactions in jsdom, with axe-core checks for labels, roles and ARIA relationships. These tests are **not** a browser, screen reader or visual audit. Browser layout, overflow, color-contrast detection and actual native-dialog focus trapping must be checked in Chrome/Safari/Firefox and VoiceOver/NVDA. See `VALIDATION.md` for executed checks and limits.

## Deploy to Vercel

1. Put this folder into a Git repository and import it in Vercel.
2. Use the **Next.js** preset. Install: `npm ci`. Build: `npm run build`. Leave the output directory at the Next.js default.
3. Set `NEXT_PUBLIC_SITE_URL=https://polatantalya.pl` and any verified social/review URLs in the Vercel environment. Rebuild after changing public variables.
4. Deploy and inspect the preview. Set preview access protection and/or noindex in the hosting configuration while demonstration content remains.
5. In **Project Settings → Domains**, add `polatantalya.pl` and optionally `www.polatantalya.pl`. At your DNS provider, enter the exact A/CNAME records Vercel displays for your project; do not guess fixed IP values. Choose a primary domain and redirect the alternative. Wait for domain verification and TLS issuance.
6. Confirm canonical URLs, sitemap, telephone/Glovo links, image optimization and HTTPS security headers on the real domain.

This handoff prepares deployment; it does not buy a domain, change DNS or deploy publicly. Security headers are configured in `next.config.js`. Future secret API keys belong in server-side environment variables; never prefix a secret with `NEXT_PUBLIC_`. Review current framework support/security updates before a production launch while preserving the user's requested Next.js 14 baseline in this deliverable.

Technical references: [Next.js 14 deployment](https://nextjs.org/docs/14/app/building-your-application/deploying), [font optimization](https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts), [Vercel custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
