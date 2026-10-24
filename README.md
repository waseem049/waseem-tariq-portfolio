# Waseem Tariq — Personal Portfolio Starter

A responsive Next.js App Router portfolio for software engineering opportunities and future MS/research applications. It includes a working light/dark theme toggle and pages for selected work, research, about, and contact.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a quick static look at the homepage without installing dependencies, open `preview.html` in a browser. This is only a design preview; the full multi-page site runs through Next.js.

Before publishing, run:

```bash
npm run typecheck
npm run build
```

## Page structure

- `/` — Homepage, selected projects, research feature, approach, contact CTA
- `/projects` — Project case studies and status notes
- `/research` — Current term-paper direction, proposed methodology, evaluation plan
- `/about` — Career narrative and education
- `/contact` — Email and professional links

## First edits before deployment

1. Update `src/data/profile.ts` with your exact public email, GitHub URL, LinkedIn URL, CV path, and final domain.
2. Change `metadataBase` in `src/app/layout.tsx` from `https://example.com` to your real domain.
3. Add a reviewed PDF CV under `public/` and set `resumePath` in `profile.ts` when the homepage/about page needs a CV button.
4. Add verified repository/demo links to the relevant project case studies. Do not publish private repositories or expose secrets.
5. Re-check every project status and the wording of your personal contribution before launch.
6. Add a real portrait only if you want one; the current design deliberately does not use a stock headshot.

## Accuracy notes

- Unified Healthcare Interface is described as in development. The AI-assisted service-discovery study is presented as a current research direction, not completed research or a validated clinical product.
- Exceptional IAS Academy is marked as a completed, live website and links to https://www.exceptionaliasacademy.com/. Separate backend modules are not claimed complete unless their scope is verified.
- FitSpaceGym is described as in development, with backend and data-layer work ongoing.
- NexGenDevelopers is presented as ongoing brand/venture work. Add verified client outcomes later.
- No GPA, certifications, papers, research results, performance metrics, employer names, or public profile URLs are invented.

## Implementation notes

- Next.js App Router + TypeScript + custom CSS (no UI kit needed for the first version).
- Theme selection is stored in local storage.
- Project artwork is CSS-built, so the first version has no external image dependency.
- There is no database, contact-form backend, analytics, or authentication. A `mailto:` action appears once a real email is added to `src/data/profile.ts`.

## Suggested next milestones

1. Verify copy, work history, dates, ownership, links, and public contact details.
2. Add one detailed UHI research/project case study with architecture diagram and actual results when measured.
3. Add CV download, Open Graph image, favicon, sitemap/robots metadata, and accessible project screenshots.
4. Run accessibility, responsive, security, and production-build checks.
5. Deploy to Vercel or your existing VPS and point your GoDaddy domain to the chosen host.
