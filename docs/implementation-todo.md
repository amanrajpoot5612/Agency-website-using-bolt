# Implementation TODO

## Phase 1 — Core page architecture
- [x] Add `src/Layout/PageLayout.tsx` as shared inner-page wrapper
- [x] Create `src/pages/WorkPage.tsx`
- [x] Create `src/pages/CaseStudyPage.tsx`
- [x] Create `src/pages/ServicesPage.tsx`
- [x] Create `src/pages/ServiceDetailPage.tsx`
- [x] Create `src/pages/ProcessPage.tsx`
- [x] Create `src/pages/PricingPage.tsx`
- [x] Create `src/pages/AboutPage.tsx`
- [x] Create `src/pages/BlogPage.tsx`
- [x] Create `src/pages/BlogPostPage.tsx`
- [x] Create `src/pages/StartPage.tsx`
- [x] Create `src/pages/ContactPage.tsx`
- [x] Create `src/pages/NotFoundPage.tsx`
- [x] Update `src/App.tsx` to use React Router page routes
- [x] Update `src/components/Navigation.tsx` to route to actual pages
- [x] Update `src/Layout/MainLayout.tsx` to use the new route nav

## Phase 2 — Page content and storytelling
- [ ] Flesh out `/work` with real project data and case study links
- [ ] Add project detail content for `/work/:slug`
- [ ] Flesh out service detail pages with actual deliverables and FAQs
- [ ] Add real pricing and add-on details to `/pricing`
- [ ] Improve `/about` with team and values content
- [ ] Replace blog placeholders with real post content

## Phase 3 — Data-driven content
- [ ] Add `projects[]`, `services[]`, and `blogPosts[]` to `src/Data/Data.json`
- [ ] Use JSON-driven cards for work, services, and blog pages
- [ ] Add structured metadata for SEO and open graph

## Phase 4 — Polish and QA
- [ ] Run the dev server and verify route navigation
- [ ] Ensure homepage and secondary pages render correctly in dark mode
- [ ] Fix any route or form styling issues on mobile and desktop
- [ ] Confirm the `/start` and `/contact` flows look readable and conversion-ready
