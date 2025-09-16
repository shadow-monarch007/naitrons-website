<div align="center">
	<h1>nAItronS</h1>
	<p><strong>Applied AI, Automation & Data Visualization Portfolio</strong></p>
	<p>Company website & case study showcase built with Next.js (App Router), Tailwind CSS, and TypeScript.</p>
</div>

## Overview
This repository contains the marketing + portfolio site for **nAItronS**, highlighting services (custom ML, automation, visualization, advisory) and representative client/project outcomes.

## Tech Stack
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (inline theme tokens) + minimal custom CSS utilities
- **Fonts:** `next/font` (Geist Sans & Mono)
- **Planned / Installed:** Three.js + React Three Fiber (for optional interactive visuals), Framer Motion (animations)

## Project Structure
```
src/
	app/                # App router entrypoints
		layout.tsx        # Global layout + metadata
		page.tsx          # Home page composing sections
		globals.css       # Global styles + theme tokens
	components/         # UI + section components
		Header.tsx
		Hero.tsx
		ServicesSection.tsx
		PortfolioSection.tsx
		ContactSection.tsx
		Footer.tsx
	lib/
		data.ts           # Structured service & portfolio data
public/               # Static assets (SVGs, favicon)
```

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
# Alternative package managers: pnpm dev | yarn dev | bun dev
```

Then visit: http://localhost:3000

## Available Scripts
```bash
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Lint with ESLint flat config
```

## Content Management
Currently content (services + portfolio items) is stored in `src/lib/data.ts`. Future options:
- MDX content collections
- Headless CMS (e.g., Sanity, Contentlayer, Payload, Strapi)
- Minimal JSON/YAML ingestion route

## Accessibility
- Semantic landmarks: `header`, `main`, `footer`
- Skip link: keyboard-first navigation support
- Color contrast validated for core interactive elements (further audits planned)

## New Features (Recently Added)
- Dark mode toggle with `localStorage` preference + system fallback
- Contact form server action with validation (`zod`) + honeypot field
- JSON-LD Organization schema injection (`SEOJsonLd` component)
- Dynamic Open Graph image generation (`/opengraph-image` + query param `?title=`)
- Interactive 3D globe demo (lazy loaded Three.js / R3F)
- Vitest + React Testing Library setup with sample test
- Automated `sitemap.xml` & `robots.txt` routes with configurable base URL
- Professional marketing sections (Value Props, Metrics band, Process, Testimonials, CTA)
- Reusable `Reveal` animation utility respecting `prefers-reduced-motion`
 - Security headers & baseline Content Security Policy (see `next.config.ts`)
 - Canonical URL + dynamic `NEXT_PUBLIC_SITE_URL` override in layout
 - Globe performance enhancements: intersection observer lazy mount, atmosphere layer, reduced-motion fallbacks
 - Contact action: in-memory rate limiting + future email integration placeholder
 - Additional tests: contact action validation & theme toggle smoke test
 - Optional analytics script injection via `NEXT_PUBLIC_ANALYTICS_ID`

## Roadmap
| Area | Phase 1 | Phase 2 | Phase 3 |
|------|---------|---------|---------|
| Visuals | Hero refinement | 3D interactive globe | Dynamic case study diagrams |
| Animation | Basic entrance | Framer Motion transitions | Scroll-driven storytelling |
| CMS | Local data.ts | MDX content | Headless CMS integration |
| SEO | Expanded metadata + JSON-LD | Automated sitemap + RSS | Structured data for case studies |
| Performance | Lazy load heavy libs | Bundle analysis & code splitting | Edge caching strategies |
| Testing | Unit (Vitest) | Integration & a11y tests | Visual regression |
| Security | Headers + CSP | Dependency policy | Runtime anomaly logging |

## Testing
Run unit tests:
```bash
npm run test
```
Watch mode:
```bash
npm run test:watch
```
Coverage outputs to console (lcov available for CI tooling).

### Animation & Accessibility
`Reveal` uses Framer Motion viewport triggers and an IntersectionObserver polyfill in tests. Honors `prefers-reduced-motion` to avoid unnecessary motion for sensitive users.

## Deployment
Optimized for Vercel deployment. To build locally:
```bash
npm run build
npm run start
```

### Deploying to Vercel with a .tech Domain
1. Push this repository to GitHub (see Git section below).
2. In Vercel dashboard: New Project → Import from GitHub → Select repo → Framework auto-detected (Next.js).
3. Environment variables (optional): set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://yourname.tech`).
4. After first deploy, go to Project Settings → Domains → Add:
	- `yourname.tech`
	- `www.yourname.tech` (optional, set redirect to apex)
5. DNS Configuration at your registrar (if NOT using Vercel nameservers):
	- Apex root (yourname.tech): Create two `A` records pointing to Vercel edge IPs:
	  - `76.76.21.21` (Vercel anycast IP) – modern approach (single A) is acceptable.
	- Or use an `ALIAS`/`ANAME` (if provider supports) to `cname.vercel-dns.com`.
	- `www` subdomain: `CNAME` → `cname.vercel-dns.com`.
6. Wait for DNS propagation, then Vercel will auto-issue SSL (Let’s Encrypt).

### Alternative: Self-Host (Node)
```bash
NODE_ENV=production NEXT_PUBLIC_SITE_URL="https://yourname.tech" npm run build
node ./.next/standalone/server.js
```
Ensure `public/` and `.next/static/` are served (Vercel standalone output handles this). Use a reverse proxy like Nginx or Caddy for TLS + compression.

### Git Initialization & Push
```bash
git init
git add .
git commit -m "chore: initial project import"
git branch -M main
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

### Ongoing Collaboration (You + Friend)
Recommended workflow:
- Create feature branches: `feat/globe-perf`, `fix/contact-rate-limit`.
- Open Pull Requests; Vercel will create preview deployments automatically.
- Review & merge to `main` → production auto-deploy.

Branch naming suggestions:
| Type | Prefix | Example |
|------|--------|---------|
| Feature | feat/ | feat/mobile-menu |
| Fix | fix/ | fix/hydration-warning |
| Chore | chore/ | chore/deps-upgrade |
| Docs | docs/ | docs/deployment-guide |

### Real-Time Pairing Options
- **VS Code Live Share**: Instant shared editing with cursors (no commit required).
- **GitHub Codespaces**: Cloud dev environment; both can open separate spaces; push branches.
- **TMUX + SSH** (advanced): Shared terminal on a dev box.

### Environment Variable Management
Use `.env.local` (ignored by git) for:
```
NEXT_PUBLIC_SITE_URL=https://yourname.tech
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Production Hardening Checklist (Post Launch)
- Remove `'unsafe-inline'` in CSP once styles/scripts are hashed or use a nonce.
- Add monitoring (e.g., Vercel Analytics, PostHog, Sentry for errors).
- Move rate limiting to an external store (Upstash Redis) & add CAPTCHA after repeated failures.
- Add automated a11y (axe) & performance CI (Lighthouse CI).
- Configure Dependabot or Renovate for dependency updates.

### Backup / Rollback Strategy
- Protect `main` with required status checks (tests + build).
- Tag releases: `git tag -a v0.1.0 -m "Initial launch" && git push --tags`.
- Quick rollback: redeploy previous commit from Vercel Deployments UI.

### SEO Automation (Sitemap & Robots)
This project now exposes:

- `GET /sitemap.xml` – Generated from `src/app/sitemap.ts`
- `GET /robots.txt` – From `src/app/robots.ts` (allows all + references sitemap)

You can override the canonical base URL used in both by setting an environment variable before build/start:

```bash
$env:NEXT_PUBLIC_SITE_URL="https://www.naitrons.com"   # PowerShell
export NEXT_PUBLIC_SITE_URL="https://www.naitrons.com" # bash/zsh
```

If unset it defaults to `https://example.com`.

Add additional URLs (e.g., future case study pages) by appending them inside the array returned from `sitemap()`.

## Contributing
Internal project: open issues for feature proposals or improvements. Use feature branches + PR reviews.

## License
Proprietary – All rights reserved. Not for external redistribution.

## Future Enhancements (Shortlist)
- Integrate email delivery (Resend / SES) for contact server action
- Add analytics (Vercel Analytics or PostHog)
- Introduce a `/case-studies/[slug]` dynamic route with MDX
- Add ESLint plugins for import ordering & Tailwind class sorting
- Add sitemap route + robots.txt + RSS (if blog added)
- Switch to image optimization pipeline for generated OG variants
 - Persist rate limiting to Redis/Upstash & add CAPTCHA fallback
 - Strengthen CSP (remove unsafe-inline by introducing nonce/hashed styles)
 - Expand test coverage (a11y + integration + visual regression)

---
Made with care by the nAItronS engineering team.
