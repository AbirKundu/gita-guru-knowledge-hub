
import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { LanguageContext } from '@/providers/LanguageProvider';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Circle Decoration */}
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 animate-float"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 animate-float animation-delay-300"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary animate-fade-in">
            {language === 'english' ? 'Ancient Wisdom for Modern Life' : 'আধুনিক জীবনের জন্য প্রাচীন জ্ঞান'}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
            {language === 'english' ? (
              <>Discover the Timeless Wisdom of the <span className="text-primary">Bhagavad Gita</span></>
            ) : (
              <>আবিষ্কার করুন <span className="text-primary">ভগবদ্গীতার</span> চিরন্তন জ্ঞান</>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-fade-up animate-delay-100">
            {language === 'english' 
              ? 'Explore the profound teachings of this sacred text that has guided millions on their spiritual journey for over 5,000 years.'
              : 'এই পবিত্র গ্রন্থের গভীর শিক্ষাগুলি অন্বেষণ করুন যা ৫,০০০ বছরেরও বেশি সময় ধরে কোটি কোটি মানুষকে তাদের আধ্যাত্মিক যাত্রায় পথ দেখিয়েছে।'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up animate-delay-200">
            <a 
              href="#overview" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 group"
            >
              {language === 'english' ? 'Begin Journey' : 'যাত্রা শুরু করুন'}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link 
              to="/chapters" 
              className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200"
            >
              {language === 'english' ? 'Explore Chapters' : 'অধ্যায়গুলি অন্বেষণ করুন'}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
