
import React, { useEffect, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Chapters from '@/components/Chapters';
import Philosophy from '@/components/Philosophy';
import KeyVerses from '@/components/KeyVerses';
import ModernRelevance from '@/components/ModernRelevance';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FallingFlowers from '@/components/animations/FallingFlowers';
import { LanguageContext } from '@/providers/LanguageProvider';

const Index = () => {
  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' 
      ? 'GitaGuru - Wisdom of the Bhagavad Gita' 
      : 'গীতাগুরু - ভগবদ্গীতার জ্ঞান';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FallingFlowers flowerType="🪷" />
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
