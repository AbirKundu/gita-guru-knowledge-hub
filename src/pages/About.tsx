
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'About | GitaGuru';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About GitaGuru
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            GitaGuru was created by <span className="font-semibold">Abir Kundu</span> to share the timeless wisdom of the Bhagavad Gita with the world.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
              <h2 className="text-2xl font-semibold mb-4">Creator's Note</h2>
              <p className="text-foreground/80 mb-4">
                This project is dedicated to making the profound teachings of the Bhagavad Gita accessible to everyone. All rights for this website and its content are reserved to Abir Kundu.
              </p>
              <p className="text-foreground/80">
                The GitaGuru platform aims to present this ancient wisdom in a modern, accessible format while maintaining the authenticity and depth of the original teachings.
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
