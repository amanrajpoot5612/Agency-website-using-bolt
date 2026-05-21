# Change Rationale — Why these edits help

This document captures the reasoning behind the edits we will make (based on `changes.md`). It helps future contributors understand *why* a file changed, not just *what* changed.

## tailwind.config.js
- Reason: Centralizes design tokens so color, spacing, and font changes propagate across the site.
- Benefit: Easier to tweak brand colors (navy/cyan shades) without hunting through many components.
- Notes: Added `navy`, `cyan`, and `slate` scales and `fontFamily` tokens.

## src/index.css
- Reason: Fonts and base styles set the visual baseline for the whole site (typography, body color, texture utilities).
- Benefit: Uniform typography, improved contrast, and reusable utilities like `.dot-grid` and `.noise` enable lightweight theming.
- Notes: Added `section-rule` utility and recommended font imports.

## src/components/Navigation.tsx
- Reason: Navigation is the primary anchor for the brand; glass/blur + CTA improves perceived polish and conversion.
- Benefit: Better UX on scroll, clearer CTA, and stronger brand presence in the wordmark and logomark.
- Notes: Implement a sticky glass bar with scroll shadow, a prominent "Book a Call" CTA, and a full-screen mobile overlay with large touch targets.

## src/components/Hero.tsx
- Reason: Hero should immediately communicate value in a clear, left-aligned layout. The headline should emphasize the proposition, not the whole sentence.
- Benefit: Higher conversion from visitors; atmospheric canvas remains but is toned down to support the message.
- Notes: Add a left-aligned two-column hero, stronger headline emphasis on "actually ship.", metrics cards, and a proof-oriented side panel.

## src/components/Services.tsx
- Reason: Bento layout and numbered, descriptive cards make offerings feel more intentional and premium.
- Benefit: Better scannability and hierarchy; encourages users to explore case studies.
- Notes: Use a mosaic grid with a large featured service card and supporting cards.

## src/components/Portfolio.tsx
- Reason: Portfolio must feel curated and easy to scan, not a simple thumbnail list.
- Benefit: Filters help visitors find relevant work fast while the section feels more like a case study gallery.
- Notes: Add category filters and a stylized project grid with a clear CTA.

## src/components/About.tsx
- Reason: A founder story and real stats humanize the company and improve trust.
- Benefit: Helps visitors quickly assess credibility.

## src/components/Testimonials.tsx
- Reason: Specific, attributable testimonials with company logos are far more persuasive than generic quotes.
- Benefit: Higher trust signals and social proof.

## src/components/Pricing.tsx
- Reason: Agency pricing should avoid SaaS-style values and instead show realistic project ranges and deliverables.
- Benefit: Sets proper expectations and reduces bargaining; clarifies next steps (book call).
- Notes: Use discovery-call language and premium ranges in tier descriptions.

## src/components/Contact.tsx & Meeting.tsx
- Reason: Simplify the form, set expectations for response times, and provide clear success states.
- Benefit: Reduces friction and improves lead quality.
- Notes: Show a clear success message, better form defaults, and stronger budget/timeline labels.

## src/components/Footer.tsx
- Reason: A robust footer with company links and social proof presents a complete company image.
- Benefit: Better discoverability for legal pages, career links and contact options.
- Notes: Build the footer from structured data, use proper external link handling, and include a polished contact block.

---

When editing, include an inline `// CHANGE REASON:` comment at the top of modified files summarizing the reason (copy a short line from this doc). This makes PR reviews faster for future contributors.
