
import React, { useEffect } from 'react';
import { ChapterData } from '@/data/chapters';

interface ChapterOverviewProps {
  chapters: ChapterData[];
  language: 'english' | 'bengali';
}

const ChapterOverview = ({ chapters, language }: ChapterOverviewProps) => {
  // Function to handle scroll events and show/hide header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const header = document.querySelector('header') as HTMLElement;
          if (header) {
            // Show header when scrolling up, hide when scrolling down
            if (window.scrollY > lastScrollY) {
              header.style.transform = 'translateY(-100%)';
              header.style.opacity = '0';
            } else {
              header.style.transform = 'translateY(0)';
              header.style.opacity = '1';
            }
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChapterClick = (e: React.MouseEvent<HTMLAnchorElement>, chapterNumber: number) => {
    e.preventDefault();
    
    // Hide the header temporarily
    const header = document.querySelector('header') as HTMLElement;
    if (header) {
      header.style.transform = 'translateY(-100%)';
      header.style.opacity = '0';
    }
    
    // Navigate to the specific chapter
    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
      setTimeout(() => {
        targetChapter.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    
    // Show the header again after some scrolling or after the animation is complete
    setTimeout(() => {
      if (header) {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
        header.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
      }
    }, 1000);
  };

  return (
    <div className="mb-16 relative z-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {language === 'english' ? 'Chapter Overview' : 'অধ্যায় পরিদর্শন'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {chapters.map((chapter) => (
          <a
            key={`overview-${chapter.number}`}
            href={`#chapter-${chapter.number}`}
            className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-md transition-all hover:border-primary/30"
            onClick={(e) => handleChapterClick(e, chapter.number)}
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
