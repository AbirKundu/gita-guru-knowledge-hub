
import React, { useContext } from 'react';
import { Activity, Heart, BookOpen, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageContext } from '@/providers/LanguageProvider';

const Philosophy = () => {
  const { language } = useContext(LanguageContext);
  const philosophies = getPhilosophies(language);

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            {language === 'english' ? 'Core Philosophies' : 'মূল দর্শন'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'english' ? 'The Four Paths to Enlightenment' : 'জ্ঞান লাভের চারটি পথ'}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {language === 'english' 
              ? 'The Bhagavad Gita presents multiple spiritual paths suited to different human temperaments, all leading to the same ultimate goal.' 
              : 'ভগবদ্গীতা বিভিন্ন মানবীয় স্বভাবের উপযোগী একাধিক আধ্যাত্মিক পথ উপস্থাপন করে, সবগুলোই একই চূড়ান্ত লক্ষ্যে পৌঁছায়।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard 
              key={philosophy.title}
              title={philosophy.title}
              description={philosophy.description}
              icon={philosophy.icon}
              color={philosophy.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const getPhilosophies = (language: 'english' | 'bengali') => {
  if (language === 'english') {
    return [
      {
        title: "Karma Yoga",
        description: "The path of selfless action, performing duties without attachment to results. Krishna advises Arjuna to act according to his dharma without concern for success or failure.",
        icon: <Activity size={28} />,
        color: "bg-blue-50 text-blue-600",
      },
      {
        title: "Bhakti Yoga",
        description: "The path of loving devotion to the Divine. Krishna teaches that sincere devotion with love and surrender is a direct way to reach the Divine.",
        icon: <Heart size={28} />,
        color: "bg-red-50 text-red-600",
      },
      {
        title: "Jnana Yoga",
        description: "The path of knowledge and wisdom. Krishna explains that understanding the true nature of the self and reality leads to liberation.",
        icon: <BookOpen size={28} />,
        color: "bg-amber-50 text-amber-600",
      },
      {
        title: "Dhyana Yoga",
        description: "The path of meditation and concentration. Krishna provides instructions on controlling the mind and focusing on the Divine through meditation.",
        icon: <Compass size={28} />,
        color: "bg-green-50 text-green-600",
      },
    ];
  } else {
    return [
      {
        title: "কর্ম যোগ",
        description: "নিঃস্বার্থ কর্মের পথ, ফলাফলের প্রতি আসক্তি ছাড়াই কর্তব্য পালন করা। কৃষ্ণ অর্জুনকে সাফল্য বা ব্যর্থতার চিন্তা ছাড়াই তার ধর্ম অনুযায়ী কাজ করার পরামর্শ দেন।",
        icon: <Activity size={28} />,
        color: "bg-blue-50 text-blue-600",
      },
      {
        title: "ভক্তি যোগ",
        description: "ভগবানের প্রতি ভালোবাসাপূর্ণ ভক্তির পথ। কৃষ্ণ শেখান যে ভালোবাসা ও সমর্পণের সাথে আন্তরিক ভক্তি ভগবানকে পাওয়ার সরাসরি উপায়।",
        icon: <Heart size={28} />,
        color: "bg-red-50 text-red-600",
      },
      {
        title: "জ্ঞান যোগ",
        description: "জ্ঞান ও প্রজ্ঞার পথ। কৃষ্ণ ব্যাখ্যা করেন যে আত্মা ও বাস্তবতার প্রকৃত স্বরূপ বোঝা মুক্তির দিকে নিয়ে যায়।",
        icon: <BookOpen size={28} />,
        color: "bg-amber-50 text-amber-600",
      },
      {
        title: "ধ্যান যোগ",
        description: "ধ্যান ও একাগ্রতার পথ। কৃষ্ণ ধ্যানের মাধ্যমে মনকে নিয়ন্ত্রণ করা এবং ভগবানের প্রতি মনোনিবেশ করার নির্দেশনা প্রদান করেন।",
        icon: <Compass size={28} />,
        color: "bg-green-50 text-green-600",
      },
    ];
  }
};

interface PhilosophyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const PhilosophyCard = ({ title, description, icon, color, index }: PhilosophyCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        <div className={cn(
          "w-14 h-14 flex items-center justify-center rounded-lg mb-6 transition-transform duration-300 group-hover:scale-110",
          "bg-primary/10 text-primary"
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

export default Philosophy;
