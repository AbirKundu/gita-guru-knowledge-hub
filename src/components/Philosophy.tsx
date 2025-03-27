
import React from 'react';
import { Activity, Heart, BookOpen, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const philosophies = [
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

const Philosophy = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            Core Philosophies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Four Paths to Enlightenment</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            The Bhagavad Gita presents multiple spiritual paths suited to different human temperaments, all leading to the same ultimate goal.
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
