**Project Folder Structure — Wired Creations (overview)

Purpose: This file explains the repository layout and the role of key files/folders so other engineers/agents can quickly navigate and make changes.

- **Root**: contains build/config files (see package.json, vite.config.ts, tailwind.config.js, tsconfig.json).

- **src/**: main application source.
  - **index.css**: global Tailwind imports, custom animations and small utility classes.
  - **main.tsx** / **App.tsx**: app entry and route definition.
  - **Data/**
    - `Data.json` — content and copy used by components (headings, buttons, projects).
    - `images/` — static images referenced by components.
  - **components/**: page UI building blocks (React components).
    - `Navigation.tsx` — top navigation bar (branding + links).
    - `Hero.tsx` — landing hero with canvas animation and CTAs.
    - `Services.tsx`, `Pricing.tsx`, `Portfolio.tsx`, `Testimonials.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`, `Meeting.tsx` — page sections.
    - Conventions: components use PascalCase and Tailwind utility classes for styling.
  - **pages/**: larger page views / case-study pages used by routes (`ProjectsCaseStudy.tsx`, `ClientCaseStudy.tsx`).
  - **Layout/**
    - `MainLayout.tsx` — assembles components into the single-page layout and mounts the `Navigation` + sections.
    - `MeetingLayout.tsx` (if present) — alternate layout for meeting route.
  - **hooks/**: custom hooks (e.g., `useScrollAnimation.ts`) for visibility/animations.
  - **ui/**: small UI primitives (e.g., `ConutryCode.tsx` country code picker).
  - **config/**: runtime constants (e.g., backend URIs)
  - **theme/**: (reserved) theme tokens or additional style helpers.

- **docs/**: developer-facing docs (this folder) — contains design and structure guides.

How to add or change a component
- Create a new file in `src/components/` named `MyComponent.tsx` (PascalCase).
- Use existing components as examples for structure, props, and Tailwind classes.
- Keep styles using Tailwind utility classes — prefer composition over inline CSS.
- Add content to `src/Data/Data.json` when the component requires editable copy.

How routing and layout work
- `src/App.tsx` defines routes. The main route (`/`) renders `MainLayout.tsx` which mounts all sections.
- To add a new page: add a component in `pages/` and a route in `App.tsx`.

Where theme and colors live
- `tailwind.config.js` — added custom colors (navy, cyan). Change color shades here.
- `src/index.css` — global fonts, base utilities, animation keyframes.

Build & Run (development)
- Install dependencies:

```bash
npm install
```

- Start dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

Notes & conventions
- Component files use TypeScript React (.tsx).
- Keep components small and focused; prefer passing data via props from `Data.json`.
- Accessibility: use semantic HTML (section, nav, header) and ensure color contrast for text vs background.

Where to find primary assets
- Logo and hero images: `src/Data/images` or referenced via `Data.json`.

Contact / Ownership
- For questions about structure, contact the repository owner or add an issue describing the change.
