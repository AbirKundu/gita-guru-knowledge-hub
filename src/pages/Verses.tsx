
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VersesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Key Verses | GitaGuru';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Key Verses
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            This page is under construction. Soon, you'll find a comprehensive collection of the Gita's most important verses.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VersesPage;
