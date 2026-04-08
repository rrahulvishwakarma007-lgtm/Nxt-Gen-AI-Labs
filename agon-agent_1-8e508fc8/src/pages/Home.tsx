import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EMRSection from '../components/EMRSection';
import WebDesignSection from '../components/WebDesignSection';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';
import Demo from '../components/Demo';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import DemoModal from '../components/DemoModal';
import AutoPopup from '../components/AutoPopup';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent selection:text-black font-sans">
      <Header onBookDemo={() => setIsModalOpen(true)} />
      <main>
        <Hero onBookDemo={() => setIsModalOpen(true)} />
        <EMRSection />
        <WebDesignSection />
        <Problem />
        <Solution />
        <Services />
        <Portfolio />
        <CaseStudies />
        <Demo onBookDemo={() => setIsModalOpen(true)} />
        <HowItWorks />
        <WhyChooseUs />
        <About onBookDemo={() => setIsModalOpen(true)} />
        <Contact onBookDemo={() => setIsModalOpen(true)} />
        <CTA onBookDemo={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <WhatsAppButton />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AutoPopup />
    </div>
  );
}