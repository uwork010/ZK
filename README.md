# CORE & CRAFT

Multi-page website for CORE & CRAFT, a Full-Service Technology & Creative Agency. The immersive homepage and Three.js scene provide the visual foundation. Company pages, sample work concepts, insights, and legal pages contain clearly identified placeholder copy and need approved content before launch.

## Routes

- `/` — existing immersive homepage
- `/services` and `/services/[slug]`
- `/solutions` and `/solutions/[slug]`
- `/industries` and `/industries/[slug]`
- `/work` and `/work/[slug]` — sample/demo concepts only
- `/about`
- `/insights` and `/insights/[slug]` — sample editorial concepts
- `/contact`
- `/privacy` and `/terms` — draft placeholders, not launch-ready legal copy

Navigation and content slugs are defined in `src/lib/company-content.ts`. Dynamic detail routes are generated from those entries.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **3D:** React Three Fiber, Drei, Three.js
- **Animation:** GSAP (ScrollTrigger), Framer Motion
- **Scrolling:** Lenis (smooth scroll)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript

## Features

- Interactive 3D galaxy background with configured quality presets
- Solar system visualization for project showcase
- Smooth scroll-driven animations
- Route-aware desktop navigation and nested mobile menus
- Custom cursor, magnetic buttons, glass styling, and responsive layouts
- Full SEO (Open Graph, sitemap, robots)
- Responsive design with mobile optimizations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev           # next dev (Turbopack)
npm run build         # production build
npm run start         # serve production build
npm run lint          # eslint
npm run type-check    # tsc --noEmit
npm test              # vitest one-shot
npm run test:watch    # vitest watch mode
npm run test:coverage # vitest + v8 coverage report
```

## Testing

Vitest + @testing-library/react with jsdom covers libraries, hooks, the contact API
route, navigation, and UI / layout / section components. See
[tests/README.md](tests/README.md) for the testing strategy and what is
intentionally covered by Playwright instead (3D / WebGL).

## Environment

The contact form at `/contact` uses the existing endpoint (`src/app/api/contact/route.ts`) and needs:

- `NEXT_PUBLIC_SITE_URL` — verified public origin used for canonical metadata and sitemap URLs
- `RESEND_API_KEY` — sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
- `CONTACT_TO_EMAIL` — where submissions are delivered
- `CONTACT_FROM_EMAIL` — optional verified sender (defaults to Resend's onboarding sender)

Without these set, submissions cannot be delivered and the form displays an error. Configure the recipient and sender for the organization before launch.

## Project Structure

```
src/
├── app/
│   ├── (site)/     # Shared site shell and all public page routes
│   ├── api/        # Contact endpoint
│   └── ...         # Root metadata, SEO, providers, and global styles
├── components/
│   ├── layout/     # Navigation, Footer, CustomCursor, Preloader
│   ├── sections/   # Hero, About, Projects, Skills, Contact
│   ├── company/    # Reusable company listing and detail page templates
│   ├── three/      # Galaxy, StarField, SolarSystem, ScrollCamera
│   └── ui/         # GlassCard, ScrollReveal, GradientText, MagneticButton
├── hooks/          # useMediaQuery, useScrollProgress, useMousePosition
├── lib/            # Company content, sample work concepts, utilities, GSAP config
└── types/          # TypeScript interfaces
```
