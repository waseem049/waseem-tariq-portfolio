# Portfolio implementation plan

## Positioning
**Waseem Tariq — Software Developer · Applied AI Research Enthusiast**

Primary goal: software engineering opportunities first, while building credible evidence for future MS applications and research conversations.

## Information architecture

| Route | Purpose | Main content |
|---|---|---|
| `/` | First impression | Hero, selected projects, current research, working approach, contact CTA |
| `/projects` | Engineering evidence | UHI, Exceptional IAS Academy, FitSpaceGym, NexGenDevelopers; scope and status for each |
| `/research` | Research readiness | Locked term-paper topic, question, proposed method, test data, metrics, limitations |
| `/about` | Career narrative | Software interests, education in progress, professional direction |
| `/contact` | Conversion | Email, GitHub, LinkedIn, collaboration focus |

## Visual system

- Light theme by default; user-controlled dark theme persisted in local storage.
- Warm paper-like background, charcoal text, muted green surfaces, restrained antique-gold accent.
- System font stack to avoid external font requests and keep the page fast.
- CSS-built project illustrations, generous spacing, editorial typography, responsive grid and keyboard skip link.

## Technical structure

- `src/app/`: route pages, root layout and global CSS.
- `src/components/`: navigation/theme control, project cards and project illustration components.
- `src/data/profile.ts`: personal details and public links to be verified.
- `src/data/projects.ts`: project descriptions, stage, tech labels and contribution notes.

## Status language

- UHI: in development; AI-assisted discovery is a research/implementation direction, not a completed validated product.
- Exceptional IAS Academy: completed and live website at https://www.exceptionaliasacademy.com/. Keep any separate backend-module claims scoped to what is confirmed.
- FitSpaceGym: in development; backend/data layer is being worked on.
- NexGenDevelopers: ongoing brand/venture work; add verified outcomes when available.

## Release checklist

- [ ] Confirm job titles, employers, employment dates, and exact contributions.
- [ ] Confirm public GitHub and LinkedIn URLs and professional email.
- [ ] Add CV PDF only after reviewing personal details in it.
- [ ] Replace `https://example.com` in metadata with the final domain.
- [ ] Add real project demos/repos only when safe to share.
- [ ] Complete and review research methodology before sharing results; never report results that have not been measured.
- [ ] Test mobile navigation, light/dark theme, keyboard focus, links, contrast, and production build.
- [ ] Configure domain, HTTPS, redirects, sitemap, robots, and analytics only if desired.
