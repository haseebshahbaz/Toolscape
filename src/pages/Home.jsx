import React, { useRef } from 'react'; // Import useRef
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BenefitsSection from '../components/Benefits';
import FAQ from '../components/FAQ';
import ToolFeatures from '../components/ToolFeatures';

function Home() {
  const featuresRef = useRef(null); // Create a ref


  return (
    <div>
      <HeroSection featuresRef={featuresRef} />
      <ToolFeatures ref={featuresRef} />
      <BenefitsSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
