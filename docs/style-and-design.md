**Style & Design Guidelines — Wired Creations**

Purpose: Provide design tokens, component styling patterns and guidance so contributors maintain a consistent brand and UI.

**Brand colors (primary palette)**
- **Navy (background / base):** `#0f1419` (navy-950), `#1a1f2e` (navy-900)
- **Cyan (accent / highlights):** `#00d9ff` (cyan-400), `#00b8d4` (cyan-500)
- **Text & neutrals:** white (`#ffffff`), gray-300 / gray-400 for secondary text

Where to edit colors
- `tailwind.config.js` — contains the `extend.colors` entries for `navy` and `cyan`. Update shades here to propagate across the site.

Typography
- Primary font: Sora (imported in `src/index.css`).
- Heading scale: use Tailwind utility classes: `text-5xl`, `text-6xl`, `text-7xl` for large headings.
- Body: `text-lg` / `text-base` with `leading-relaxed` for paragraphs.

Spacing & Layout
- Grid container: use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` to keep consistent page width.
- Sections use `py-20` (vertical rhythm). Keep section paddings consistent when adding pages.

Shadows, borders, card styles
- Cards use rounded-xl and subtle borders with cyan tints: `rounded-xl border border-cyan-400/20 bg-navy-900`.
- Hover states: slight scale + shadow: `hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10`.

Buttons / CTAs
- Primary CTA (filled): `bg-cyan-400 text-navy-950 rounded-lg px-8 py-3 font-semibold` with `hover:bg-cyan-500`.
- Secondary CTA (outline): `border-2 border-cyan-400 text-cyan-400 rounded-lg` with `hover:bg-cyan-400 hover:text-navy-950`.

Example usage (Headings and CTA)
- Hero title:
  - Heading: `text-7xl font-bold`
  - Highlight/gradient: `bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500`
- CTA:
  - Primary: `<button className="px-8 py-3 bg-cyan-400 text-navy-950 rounded-lg">Start Project</button>`

Component styling patterns
- Prefer descriptive utility classes grouped logically (spacing → color → layout → interaction).
- Use `group` + `group-hover:` patterns for coordinated hover effects inside card components.
- Keep animations in `src/index.css` as keyframes (`fadeInUp`, `slideInLeft`, etc.) and apply via small helper classes (e.g., `animate-fadeInUp`).

Accessibility & Contrast
- Ensure text on cyan backgrounds uses navy-950 (dark) or white depending on contrast. Use tools (axe / Lighthouse) to validate.
- Focus states: ensure interactive elements have visible focus outlines or ring utilities (e.g., `focus:ring-2 focus:ring-cyan-400`).

Iconography
- Uses `lucide-react` icons across the site. Keep icon sizes consistent (w-6 h-6 for small icons, w-12 h-12 for avatars where needed).

When to add new theme tokens
- If a new semantic color is required (e.g., success/warning) add it to `tailwind.config.js` and update components to use the token.

Developer tips
- To preview CSS changes: run `npm run dev` and hot reload will apply Tailwind changes.
- When changing `tailwind.config.js`, restart the dev server if Tailwind JIT doesn't pick up the update.

Files to review when updating design
- `tailwind.config.js` — color tokens
- `src/index.css` — fonts, base utilities, animations
- `src/components/*` — examples of patterns to follow (Hero, Services, Pricing)

Ready-to-use class snippets
- Card: `className="p-8 bg-navy-900 border border-cyan-400/20 rounded-xl hover:shadow-lg hover:shadow-cyan-400/10 transition-all"`
- Heading gradient: `className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500"`
- Primary button: `className="px-8 py-3 bg-cyan-400 text-navy-950 rounded-lg font-semibold hover:bg-cyan-500"`

Questions / next steps
- If you want, I can add examples or convert more components to use shared design tokens (e.g., shared `Button` component).