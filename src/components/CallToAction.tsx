
import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/providers/LanguageProvider';
import { Button } from './ui/button';

const CallToAction = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/10 to-secondary/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {language === 'english' ? 'Begin Your Journey of Discovery' : 'আপনার আবিষ্কারের যাত্রা শুরু করুন'}
        </h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          {language === 'english' 
            ? 'Explore the profound teachings of the Bhagavad Gita and discover how its timeless wisdom can transform your life, bringing peace, purpose, and clarity.' 
            : 'ভগবদ্গীতার গভীর শিক্ষা অন্বেষণ করুন এবং এর চিরন্তন জ্ঞান কীভাবে আপনার জীবনকে রূপান্তরিত করতে পারে, শান্তি, উদ্দেশ্য এবং স্পষ্টতা আনতে পারে তা আবিষ্কার করুন।'}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/chapters" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 group"
          >
            {language === 'english' ? 'Explore Chapters' : 'অধ্যায়গুলি অন্বেষণ করুন'}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/philosophy" 
            className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200"
          >
            {language === 'english' ? 'Learn Philosophy' : 'দর্শন শিখুন'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
