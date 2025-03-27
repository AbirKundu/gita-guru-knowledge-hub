
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ChaptersPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Chapters | GitaGuru';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Chapters of the Bhagavad Gita
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            This page is under construction. Soon, you'll find detailed explorations of all 18 chapters.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChaptersPage;
