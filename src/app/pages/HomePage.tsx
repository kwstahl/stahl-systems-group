import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { GrowthHub } from '../components/GrowthHub';
import { HowItWorks } from '../components/HowItWorks';
import { MeetAtTheMoon } from '../components/MeetAtTheMoon';
import { WhyCustom } from '../components/WhyCustom';
import { Pricing } from '../components/Pricing';
import { Guarantee } from '../components/Guarantee';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ChatBox } from '../components/ChatBox';
import { DataFlowBackground } from '../components/DataFlowBackground';
import { StickyPromotion } from '../components/StickyPromotion';
import { EasterEggs } from '../components/EasterEggs';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <DataFlowBackground />
      <div className="relative z-10">
        <Header onOpenModal={() => setIsModalOpen(true)} />
        <StickyPromotion />
        <main>
          <Hero onOpenModal={() => setIsModalOpen(true)} />
          <Services />
          <GrowthHub />
          <HowItWorks />
          <MeetAtTheMoon />
          <WhyCustom />
          <Pricing onOpenModal={() => setIsModalOpen(true)} />
          <Guarantee />
          <Testimonials onOpenModal={() => setIsModalOpen(true)} />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
        <ChatBox />
      </div>
      <EasterEggs />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
