import data from '../Data/Data.json';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';

const MainLayout = () => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="agency-site">
      <Seo {...data.siteCopy.seo.home} path="/" />
      <Navigation />
      <Hero onNavigate={handleNavigate} data={data.hero} />
      <Services data={data.services} />
      <Pricing onNavigate={handleNavigate} data={data.pricing} />
      <Portfolio data={data.portfolio} />
      <Testimonials data={data.testimonials} />
      <About data={data.about} />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
