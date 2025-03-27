
import React from 'react';
import { BookOpen, ScrollText, Heart, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

const Overview = () => {
  return (
    <section id="overview" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            What is the Bhagavad Gita?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Song of the Divine</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. It contains a conversation between Prince Arjuna and his guide Lord Krishna on a variety of philosophical issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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

const features = [
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

export default Overview;
