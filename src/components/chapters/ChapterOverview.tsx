
import React from 'react';
import { ChapterData } from '@/data/chapters';

interface ChapterOverviewProps {
  chapters: ChapterData[];
  language: 'english' | 'bengali';
}

const ChapterOverview = ({ chapters, language }: ChapterOverviewProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {language === 'english' ? 'Chapter Overview' : 'অধ্যায় পরিদর্শন'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {chapters.map((chapter) => (
          <a
            key={`overview-${chapter.number}`}
            href={`#chapter-${chapter.number}`}
            className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-md transition-all hover:border-primary/30"
          >
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center bg-primary/10 text-primary rounded-full font-semibold">
              {chapter.number}
            </div>
            <h3 className="text-sm font-medium truncate" title={chapter.title}>
              {chapter.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChapterOverview;
