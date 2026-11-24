# CORE & CRAFT

CORE & CRAFT is a multi-page website for a digital product, software, and creative technology agency. It pairs a dark, immersive visual identity with service, industry, solution, work, insights, and contact pages.

> **Content readiness:** Work entries are studio demonstrations and are not presented as verified client engagements or measured results. Legal content is published for general website use; any jurisdiction-specific terms or a formal policy for a new business entity should be reviewed before launch.

## Website

| Page | Routes |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Services | `/services`, `/services/[slug]` |
| Solutions | `/solutions`, `/solutions/[slug]` |
| Industries | `/industries`, `/industries/[slug]` |
| Work | `/work`, `/work/[slug]` |
| Insights | `/insights`, `/insights/[slug]` |
| Contact | `/contact` |
| Legal | `/privacy`, `/terms` |

The navigation and service, solution, and industry detail content are driven by `src/lib/company-content.ts`. Work and article content lives in `src/lib/work-content.ts` and `src/lib/insights.ts`. Legacy detail URLs redirect to their canonical route.

The app also serves `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, and a generated `/opengraph-image`.

## Features

- Responsive layouts, shared navigation and footer, and nested mobile menus.
- An interactive Three.js scene built with React Three Fiber and Drei: galaxy particles, star fields, a solar system, and a camera that follows the home-page scroll journey.
- GSAP/ScrollTrigger, Framer Motion, and Lenis for scroll, reveal, and transition effects, with reduced-motion handling in animated components.
- Service, solution, industry, project, and article detail pages generated from typed content.
- A project inquiry form with client/server validation, accessible field errors, a honeypot, and clear sending/success/error states.
- Server-side email delivery through Resend; API credentials are not used in browser code.
- Metadata, conditional canonical URLs, sitemap and robots output, and security headers.

## Technology

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS 4
- Three.js, React Three Fiber, Drei, and React Three Postprocessing
- GSAP and `@gsap/react`, Framer Motion, and Lenis
- Resend and Zod
- Vitest, V8 coverage, Testing Library, and jsdom

## Project structure

```text
src/
├── app/
│   ├── (site)/       # Public pages and the shared agency site shell
│   ├── api/contact/  # Contact form endpoint
│   └── ...           # Root layout, metadata, sitemap, robots, and styles
├── components/
│   ├── company/      # About, service, solution, and industry pages
│   ├── insights/     # Insights listing, article, and visuals
│   ├── layout/       # Navigation, footer, cursor, and preloader
│   ├── sections/     # Home sections and project inquiry form
│   ├── three/        # Galaxy, stars, solar system, and scroll camera
│   ├── ui/           # Shared visual and animation components
│   └── work/         # Portfolio listing, detail, and visuals
├── hooks/            # Media, pointer, scroll, and quality hooks
├── lib/              # Content, validation, email, SEO, and utilities
└── types/
tests/                # Vitest and Testing Library suites
public/               # Static assets
```

## Requirements and local development

Use Node.js 24 (the version used by CI) and npm.

```bash
npm ci
cp .env.example .env.local
# Set the local environment values described below.
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can be explored without email credentials, but inquiry delivery will fail clearly until Resend is configured.

### Environment variables

Set these in `.env.local` for local development and in the appropriate Vercel environment settings for deployment. `.env.local` is ignored by Git; never commit credentials.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | For production SEO | Public site origin used for metadata, canonical URLs, robots, and sitemap. Without it, canonical metadata is omitted and the sitemap has no entries. |
| `RESEND_API_KEY` | For email delivery | Resend API key. Server-side only. |
| `CONTACT_TO_EMAIL` | For email delivery | Inbox that receives project inquiries. |
| `CONTACT_FROM_EMAIL` | Optional | Sender address verified with Resend. Defaults to Resend's onboarding sender. |

Example values only:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.example
RESEND_API_KEY=replace_with_your_resend_api_key
CONTACT_TO_EMAIL=hello@your-domain.example
CONTACT_FROM_EMAIL=website@your-verified-domain.example
```

`NEXT_PUBLIC_WHATSAPP_URL` is not currently consumed by the application; the displayed WhatsApp destination is defined in the relevant component.

The contact API validates input with Zod, rejects invalid payloads, and uses a honeypot plus a 5-request-per-minute in-memory IP limiter. The limiter is per running process and is not shared across serverless instances.

## Commands

```bash
npm run dev           # Start the Next.js development server
npm run build         # Create the production build
npm run start         # Serve the production build (run build first)
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript without emitting files
npm test              # Run the Vitest suite
npm run test:watch    # Run Vitest in watch mode
npm run test:coverage # Run tests with V8 coverage
```

See [`tests/README.md`](tests/README.md) for the test layout and limitations.

## Production and Vercel

This is a standard Next.js application; the repository has no `vercel.json` and does not need SPA rewrites. To deploy with Vercel:

1. Import the `uwork010/ZK` repository in Vercel and keep the Next.js framework preset.
2. Use Node.js 24 and the default Next.js install/build settings (`npm ci` and `npm run build`).
3. Configure `NEXT_PUBLIC_SITE_URL` and the Resend variables for the relevant Preview and Production environments. Use the real public origin and a Resend-verified sender address.
4. Confirm Vercel's configured Production Branch before pushing; pushes to that branch may publish the site.
5. Have jurisdiction-specific legal requirements reviewed and confirm the studio portfolio classifications before launch.

The production server can also be started locally after a build:

```bash
npm run build
npm run start
```
