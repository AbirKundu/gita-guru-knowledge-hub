
import React, { useContext } from 'react';
import { BookOpen, ScrollText, Heart, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageContext } from '@/providers/LanguageProvider';

const Overview = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="overview" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            {language === 'english' ? 'What is the Bhagavad Gita?' : 'ভগবদ্গীতা কি?'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'english' ? 'The Song of the Divine' : 'ভগবানের গীতি'}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {language === 'english' 
              ? 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. It contains a conversation between Prince Arjuna and his guide Lord Krishna on a variety of philosophical issues.'
              : 'ভগবদ্গীতা, যাকে সাধারণত গীতা বলা হয়, মহাভারত মহাকাব্যের অংশ এবং ৭০০টি শ্লোক সমৃদ্ধ একটি হিন্দু শাস্ত্র। এতে রাজকুমার অর্জুন এবং তার গুরু ভগবান শ্রীকৃষ্ণের মধ্যে বিভিন্ন দার্শনিক বিষয়ে আলোচনা রয়েছে।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFeatures(language).map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  return (
    <div 
      className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const getFeatures = (language: 'english' | 'bengali') => {
  if (language === 'english') {
    return [
      {
        title: "Historical Context",
        description: "Set on the battlefield of Kurukshetra, the Gita is a dialogue between Arjuna and Krishna before the start of the Kurukshetra War in the Mahabharata.",
        icon: <BookOpen size={24} />,
      },
      {
        title: "Sacred Scripture",
        description: "Considered one of the most important texts in Hinduism, the Bhagavad Gita presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic ideals of moksha.",
        icon: <ScrollText size={24} />,
      },
      {
        title: "Paths of Yoga",
        description: "The Gita introduces three paths to spiritual liberation: Karma Yoga (selfless action), Bhakti Yoga (loving devotion), and Jnana Yoga (knowledge and wisdom).",
        icon: <Heart size={24} />,
      },
      {
        title: "Philosophical Treasure",
        description: "It explores concepts like the immortal soul (Atman), the ultimate reality (Brahman), the nature of the world, and the purpose of human existence.",
        icon: <Brain size={24} />,
      },
    ];
  } else {
    return [
      {
        title: "ঐতিহাসিক প্রেক্ষাপট",
        description: "কুরুক্ষেত্রের যুদ্ধক্ষেত্রে অবস্থিত, গীতাটি মহাভারতে কুরুক্ষেত্র যুদ্ধ শুরু হওয়ার আগে অর্জুন এবং কৃষ্ণের মধ্যে একটি সংলাপ।",
        icon: <BookOpen size={24} />,
      },
      {
        title: "পবিত্র শাস্ত্র",
        description: "হিন্দু ধর্মে সবচেয়ে গুরুত্বপূর্ণ গ্রন্থগুলির মধ্যে একটি হিসাবে বিবেচিত, ভগবদ্গীতা ধর্ম, ভক্তি, এবং মোক্ষের যোগিক আদর্শ সম্পর্কে হিন্দু ধারণার একটি সমন্বয় উপস্থাপন করে।",
        icon: <ScrollText size={24} />,
      },
      {
        title: "যোগের পথ",
        description: "গীতা আধ্যাত্মিক মুক্তির তিনটি পথ চালু করে: কর্ম যোগ (নিঃস্বার্থ কর্ম), ভক্তি যোগ (ভালবাসাপূর্ণ ভক্তি), এবং জ্ঞান যোগ (জ্ঞান ও প্রজ্ঞা)।",
        icon: <Heart size={24} />,
      },
      {
        title: "দার্শনিক ভাণ্ডার",
        description: "এটি অমর আত্মা (আত্মন), পরম সত্য (ব্রহ্ম), বিশ্বের প্রকৃতি, এবং মানব অস্তিত্বের উদ্দেশ্য জাতীয় ধারণাগুলি অন্বেষণ করে।",
        icon: <Brain size={24} />,
      },
    ];
  }
};

export default Overview;
