import Header from '../components/Header';
import Hero from '@/components/Hero';
import Footer from '../components/Footer';
import React from 'react';
import HowItWorks from '../components/workSection'; 
import Section from '../components/Section'; 
import AboutSection from '@/components/AboutSection';
import TokenMics from '@/components/TokenMics';
import Roadmap from '@/components/Roadmap';
import RoadmapPhase2 from '@/components/RoadmapPhase2';
import RoadmapPhase3 from '@/components/RoadmapPhase3';
import FAQ from '@/components/FAQ';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <AboutSection/>
      <TokenMics/>
      <Roadmap/>
      <RoadmapPhase2/>
      <RoadmapPhase3/>
      <FAQ/>
      <Section />
      <Footer />
    </div>
  );
};

export default HomePage;
