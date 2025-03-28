import React, { useState } from 'react';
import { Briefcase, Lightbulb, HeartHandshake, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

const RelevanceCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <div className="text-primary">{icon}</div>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const content = {
  en: {
    toggleLabel: "English",
    sectionLabel: "Ancient Wisdom, Modern Application",
    title: "Relevance in Today's World",
    description: "Though thousands of years old, the Bhagavad Gita offers timeless wisdom that remains relevant for navigating the complexities of modern life.",
    items: [
      {
        title: "Professional Life",
        description: "The concept of doing your duty without attachment to results can help reduce workplace stress and promote ethical decision-making.",
        icon: <Briefcase size={24} />, 
      },
      {
        title: "Stress Management",
        description: "The Gita's teachings about controlling the mind through meditation provide effective tools for managing anxiety and stress in modern life.",
        icon: <Lightbulb size={24} />, 
      },
      {
        title: "Relationships",
        description: "Understanding the eternal nature of the soul can help develop deeper compassion and meaningful connections with others.",
        icon: <HeartHandshake size={24} />, 
      },
      {
        title: "Personal Growth",
        description: "The Gita's emphasis on self-discipline and continuous self-improvement offers a framework for personal development and resilience.",
        icon: <Dumbbell size={24} />, 
      },
    ],
    journey: "Begin Your Journey of Discovery",
    explore: "Explore the profound teachings of the Bhagavad Gita and discover how its timeless wisdom can transform your life, bringing peace, purpose, and clarity.",
    buttons: ["Explore Chapters", "Learn Philosophy"],
  },
  bn: {
    toggleLabel: "বাংলা",
    sectionLabel: "প্রাচীন জ্ঞান, আধুনিক প্রয়োগ",
    title: "আজকের বিশ্বে প্রাসঙ্গিকতা",
    description: "হাজার হাজার বছর পুরনো হলেও, ভগবদ গীতা এমন চিরন্তন জ্ঞান প্রদান করে যা আধুনিক জীবনের জটিলতা সামলাতে এখনও প্রাসঙ্গিক।",
    items: [
      {
        title: "পেশাগত জীবন",
        description: "ফলাফলের প্রতি আসক্তি ছাড়াই কর্তব্য পালনের ধারণা কর্মক্ষেত্রে চাপ কমাতে এবং নৈতিক সিদ্ধান্ত গ্রহণে সহায়তা করতে পারে।",
        icon: <Briefcase size={24} />, 
      },
      {
        title: "চাপ ব্যবস্থাপনা",
        description: "মেডিটেশনের মাধ্যমে মন নিয়ন্ত্রণের গীতার শিক্ষা আধুনিক জীবনে উদ্বেগ ও চাপ সামলানোর কার্যকর উপায় সরবরাহ করে।",
        icon: <Lightbulb size={24} />, 
      },
      {
        title: "সম্পর্ক",
        description: "আত্মার চিরন্তন প্রকৃতি বোঝার মাধ্যমে গভীর সহানুভূতি এবং অন্যদের সাথে অর্থবহ সংযোগ গড়ে তোলা যায়।",
        icon: <HeartHandshake size={24} />, 
      },
      {
        title: "ব্যক্তিগত উন্নয়ন",
        description: "আত্মশৃঙ্খলা এবং ধারাবাহিক আত্মউন্নয়নের প্রতি গীতার গুরুত্ব ব্যক্তিগত বিকাশ এবং স্থিতিস্থাপকতার একটি কাঠামো প্রদান করে।",
        icon: <Dumbbell size={24} />, 
      },
    ],
    journey: "আপনার আবিষ্কারের যাত্রা শুরু করুন",
    explore: "ভগবদ গীতার গভীর শিক্ষা অন্বেষণ করুন এবং কিভাবে এর চিরন্তন জ্ঞান আপনার জীবন রূপান্তরিত করতে পারে, শান্তি, উদ্দেশ্য এবং স্পষ্টতা আনতে পারে তা আবিষ্কার করুন।",
    buttons: ["অধ্যায়গুলি অন্বেষণ করুন", "দর্শন শিখুন"],
  },
};

const ModernRelevance = () => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'bn' : 'en');
  const data = content[language];

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex justify-center mb-6">
          <button
            className="relative flex w-20 h-8 bg-orange-500 rounded-full cursor-pointer focus:outline-none p-1"
            onClick={toggleLanguage}
          >
            <span className={`absolute top-1 bottom-1 left-1 w-8 h-6 bg-white rounded-full transition-all duration-300 ${language === 'bn' ? 'translate-x-full' : ''}`}></span>
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">BN</span>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">EN</span>
          </button>
        </div>
        
        <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
          {data.sectionLabel}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-10">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((item, index) => (
            <RelevanceCard 
              key={item.title} 
              title={item.title} 
              description={item.description} 
              icon={item.icon} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-3">{data.journey}</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">{data.explore}</p>
          <div className="flex justify-center gap-4">
            {data.buttons.map((btn, i) => (
              <button key={i} className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition">
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernRelevance;
