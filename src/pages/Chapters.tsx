
import React, { useEffect, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/providers/LanguageProvider';
import { getChapters } from '@/data/chapters';
import ChapterOverview from '@/components/chapters/ChapterOverview';
import ChapterDetailCard from '@/components/chapters/ChapterDetailCard';

const ChaptersPage = () => {
  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'Chapters | GitaGuru' : 'অধ্যায়সমূহ | গীতাগুরু';
  }, [language]);

  // Get chapters data
  const chapters = getChapters(language);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'english' ? 'Chapters of the Bhagavad Gita' : 'ভগবদ্গীতার অধ্যায়সমূহ'}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            {language === 'english' 
              ? 'The Bhagavad Gita consists of 18 chapters, each containing profound wisdom and spiritual guidance. Explore the contents of each chapter below.'
              : 'ভগবদ্গীতা ১৮টি অধ্যায়ে বিভক্ত, প্রতিটি অধ্যায় গভীর জ্ঞান ও আধ্যাত্মিক নির্দেশনা ধারণ করে। নিচে প্রতিটি অধ্যায়ের বিষয়বস্তু অন্বেষণ করুন।'}
          </p>

          {/* Chapter Overview Section */}
          <ChapterOverview chapters={chapters} language={language} />

          <div className="grid grid-cols-1 gap-8">
            {chapters.map((chapter) => (
              <ChapterDetailCard 
                key={chapter.number}
                chapter={chapter}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChaptersPage;
