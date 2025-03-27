
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Chapters from '@/components/Chapters';
import Philosophy from '@/components/Philosophy';
import KeyVerses from '@/components/KeyVerses';
import ModernRelevance from '@/components/ModernRelevance';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'GitaGuru - Wisdom of the Bhagavad Gita';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Chapters />
        <Philosophy />
        <KeyVerses />
        <ModernRelevance />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
