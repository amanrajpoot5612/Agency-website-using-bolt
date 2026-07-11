import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MainLayout = lazy(() => import('./Layout/MainLayout'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const StartPage = lazy(() => import('./pages/StartPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MeetingPage = lazy(() => import('./pages/MeetingPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div role="status" className="flex min-h-screen items-center justify-center bg-navy-950 text-cyan-400">Loading…</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
