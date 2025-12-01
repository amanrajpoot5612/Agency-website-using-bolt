import React, { useState } from 'react'
import data from '../Data/Data.json'
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const MainLayout = () => {

    const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <div className="bg-white">
              <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
              <Hero onNavigate={handleNavigate} data = {data.hero} />
              <Services data = {data.services} />
              <Pricing onNavigate={handleNavigate} data = {data.pricing} />
              {/* <Meeting data = {data.meeting} /> */}
              <Portfolio data = {data.portfolio} />
              <Testimonials data = {data.testimonials} />
              <About data = {data.about} />
              <Contact />
              <Footer data = {data.footer} />
            </div>
    </>
  )
}

export default MainLayout