import data from './Data/Data.json';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import StartPage from './pages/StartPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { Meeting } from './components/Meeting';

function App() {
  return (
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
      <Route path="/meeting" element={<Meeting data={data.meeting} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
