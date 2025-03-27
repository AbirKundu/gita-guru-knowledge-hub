
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const chapters = [
  {
    number: 1,
    title: "Arjuna's Dilemma",
    description: "Arjuna sees his relatives on the opposing army and has doubts about fighting. He seeks Krishna's guidance."
  },
  {
    number: 2,
    title: "Transcendental Knowledge",
    description: "Krishna explains the nature of the soul, the difference between body and soul, and introduces Karma Yoga."
  },
  {
    number: 3,
    title: "Karma Yoga",
    description: "Krishna explains the path of selfless action, performing duties without attachment to the results."
  },
  {
    number: 4,
    title: "Transcendental Knowledge",
    description: "Krishna reveals how divine knowledge has been passed down and explains the true nature of action and inaction."
  },
  {
    number: 5,
    title: "Karma-Sannyasa Yoga",
    description: "Krishna explains the path of renunciation and how it's connected to selfless action."
  },
  {
    number: 6,
    title: "Dhyana Yoga",
    description: "Krishna teaches meditation techniques and how to control the mind through yoga practice."
  },
  {
    number: 7,
    title: "Knowledge of the Absolute",
    description: "Krishna discusses his divine manifestations and how to recognize the divine in all things."
  },
  {
    number: 8,
    title: "Attaining Salvation",
    description: "Krishna explains different ways to reach the divine and what happens after death."
  },
  {
    number: 9,
    title: "Royal Knowledge",
    description: "Krishna reveals himself as the Supreme Being and explains how devotion leads to liberation."
  },
  {
    number: 10,
    title: "Divine Glories",
    description: "Krishna describes his divine manifestations to help Arjuna understand his omnipresence."
  },
  {
    number: 11,
    title: "Universal Form",
    description: "Krishna reveals his cosmic form to Arjuna, showing his true divine nature."
  },
  {
    number: 12,
    title: "Devotional Service",
    description: "Krishna explains the path of devotion and how it's the easiest way to reach him."
  },
  {
    number: 13,
    title: "Nature, Enjoyer, Consciousness",
    description: "Krishna explains the difference between the physical body and the eternal soul."
  },
  {
    number: 14,
    title: "The Three Qualities",
    description: "Krishna describes the three gunas (qualities) of material nature: sattva, rajas, and tamas."
  },
  {
    number: 15,
    title: "The Supreme Person",
    description: "Krishna compares the world to a banyan tree and discusses how to cut attachments to it."
  },
  {
    number: 16,
    title: "Divine and Demonic Qualities",
    description: "Krishna distinguishes between divine and demonic qualities in people."
  },
  {
    number: 17,
    title: "Three Divisions of Faith",
    description: "Krishna explains how faith is divided according to the three gunas."
  },
  {
    number: 18,
    title: "Conclusion - Moksha",
    description: "Krishna summarizes all teachings and advises Arjuna to surrender to him completely."
  },
];

const Chapters = () => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  return (
    <section id="chapters" className="py-20 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            Chapter by Chapter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The 18 Chapters of Wisdom</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            The Bhagavad Gita is divided into 18 chapters, each focusing on different aspects of dharma, 
            spirituality, and human existence. Explore the essence of each chapter below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.number}
              chapter={chapter}
              isActive={activeChapter === chapter.number}
              onClick={() => setActiveChapter(activeChapter === chapter.number ? null : chapter.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ChapterCardProps {
  chapter: {
    number: number;
    title: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
}

const ChapterCard = ({ chapter, isActive, onClick }: ChapterCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card border border-border rounded-xl p-5 transition-all duration-300 cursor-pointer",
        isActive ? "shadow-lg ring-1 ring-primary/20" : "hover:shadow-md hover:-translate-y-1"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
            Chapter {chapter.number}
          </span>
          <h3 className="text-lg font-semibold mb-2">{chapter.title}</h3>
        </div>
        <ChevronRight 
          size={20} 
          className={cn(
            "mt-1.5 transition-transform duration-300",
            isActive ? "rotate-90 text-primary" : "text-foreground/40"
          )} 
        />
      </div>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
      )}>
        <p className="text-sm text-foreground/70">{chapter.description}</p>
      </div>
    </div>
  );
};

export default Chapters;
