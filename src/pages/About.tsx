
import React, { useEffect, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/providers/LanguageProvider';

const AboutPage = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'About | GitaGuru' : 'পরিচিতি | গীতাগুরু';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'english' ? 'About GitaGuru' : 'গীতাগুরু সম্পর্কে'}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            {language === 'english' 
              ? 'GitaGuru was created by '
              : 'গীতাগুরু তৈরি করেছেন '} 
            <span className="font-semibold">Abir Kundu</span> 
            {language === 'english' 
              ? ' to share the timeless wisdom of the Bhagavad Gita with the world.'
              : ' বিশ্বের সাথে ভগবদ্গীতার চিরন্তন জ্ঞান ভাগ করে নেওয়ার জন্য।'}
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'english' ? 'Creator\'s Note' : 'নির্মাতার নোট'}
              </h2>
              <p className="text-foreground/80 mb-4">
                {language === 'english' 
                  ? 'This project is dedicated to making the profound teachings of the Bhagavad Gita accessible to everyone. All rights for this website and its content are reserved to Abir Kundu.'
                  : 'এই প্রকল্পটি ভগবদ্গীতার গভীর শিক্ষাগুলি সবার কাছে সহজলভ্য করার জন্য উৎসর্গীকৃত। এই ওয়েবসাইট এবং এর বিষয়বস্তুর সমস্ত অধিকার অবির কুন্ডুর কাছে সংরক্ষিত।'}
              </p>
              <p className="text-foreground/80">
                {language === 'english' 
                  ? 'The GitaGuru platform aims to present this ancient wisdom in a modern, accessible format while maintaining the authenticity and depth of the original teachings.'
                  : 'গীতাগুরু প্ল্যাটফর্মের লক্ষ্য এই প্রাচীন জ্ঞানকে একটি আধুনিক, সহজলভ্য ফর্ম্যাটে উপস্থাপন করা, যখন মূল শিক্ষার প্রামাণ্যতা এবং গভীরতা বজায় রাখা।'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
