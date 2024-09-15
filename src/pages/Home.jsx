import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import BenefitsSection from '../components/Benefits';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <FAQ />
      <Footer />
      
    </div>
  );
}

export default Home;
