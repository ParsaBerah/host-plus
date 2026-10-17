import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LiveStatsBar from '../components/LiveStatsBar';
import PricingPlans from '../components/PricingPlans';
import ServerLocations from '../components/ServerLocations';
import PerformanceBenchmark from '../components/PerformanceBenchmark';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStackSection from '../components/TechStackSection';
import Testimonials from '../components/Testimonials';
import HomeFaq from '../components/HomeFaq';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#050508] overflow-x-hidden selection:bg-[#7F56D9] selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />

        <RevealOnScroll delay={80}>
          <LiveStatsBar />
        </RevealOnScroll>

        <RevealOnScroll>
          <PricingPlans />
        </RevealOnScroll>

        <RevealOnScroll>
          <ServerLocations />
        </RevealOnScroll>

        <RevealOnScroll>
          <PerformanceBenchmark />
        </RevealOnScroll>

        <RevealOnScroll>
          <WhyChooseUs />
        </RevealOnScroll>

        <RevealOnScroll>
          <TechStackSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll>
          <HomeFaq />
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
};

export default Home;