
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/10 to-secondary/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey of Discovery</h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Explore the profound teachings of the Bhagavad Gita and discover how its timeless wisdom can transform your life, bringing peace, purpose, and clarity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/chapters" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 group"
          >
            Explore Chapters
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="/philosophy" 
            className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200"
          >
            Learn Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
