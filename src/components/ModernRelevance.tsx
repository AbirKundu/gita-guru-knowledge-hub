
import React from 'react';
import { Briefcase, Lightbulb, HeartHandshake, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

const relevanceItems = [
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
];

const ModernRelevance = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            Ancient Wisdom, Modern Application
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Relevance in Today's World</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Though thousands of years old, the Bhagavad Gita offers timeless wisdom that remains relevant for navigating the complexities of modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relevanceItems.map((item, index) => (
            <RelevanceCard 
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface RelevanceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const RelevanceCard = ({ title, description, icon, index }: RelevanceCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModernRelevance;
