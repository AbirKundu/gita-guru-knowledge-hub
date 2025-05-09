
import React, { useState, useContext, useEffect } from 'react';
import { ChapterData } from '@/data/chapters';
import { LanguageContext } from '@/providers/LanguageProvider';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown, BookOpen, FileText, Sparkles } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapterSummary, getVerseCount, getSanskritName } from '@/utils/chapterUtils';
import { getKeyTeachings } from '@/utils/chapterTeachings';
import { getKeyVerses } from '@/utils/chapterVerses';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChapterDetailCardProps {
  chapter: ChapterData;
}

const ChapterDetailCard = ({ chapter }: ChapterDetailCardProps) => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const keyTeachings = getKeyTeachings(chapter.number, language);
  const keyVerses = getKeyVerses(chapter.number, language);
  
  // Check if this chapter should be opened when the page loads (if the URL has the chapter hash)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === `#chapter-${chapter.number}`) {
        setIsOpen(true);
        
        // Ensure the element is in view
        setTimeout(() => {
          const element = document.getElementById(`chapter-${chapter.number}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    };
    
    // Check on initial load and when hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [chapter.number]);
  
  return (
    <div id={`chapter-${chapter.number}`} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        className="w-full"
      >
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full text-xl font-bold">
              {chapter.number}
            </div>
            <div className="text-center mt-3 w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-3">{chapter.title}</h2>
                <CollapsibleTrigger asChild>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary transition-colors">
                    {isOpen ? (
                      <ChevronDown size={20} className="text-primary" />
                    ) : (
                      <ChevronRight size={20} className="text-muted-foreground" />
                    )}
                  </button>
                </CollapsibleTrigger>
              </div>
              <p className="text-foreground/70 pr-8">{chapter.description}</p>
            </div>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="px-6 pb-6 pt-2">
            <div className="bg-secondary/30 rounded-xl p-5 mt-4">
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className={cn(
                  "mb-4 grid w-full",
                  isMobile ? "grid-cols-3 text-center gap-2" : "grid-cols-3"
                )}>
                  {!isMobile ? (
                    <>
                      <TabsTrigger value="summary"><BookOpen className="inline-block w-5 h-5 mr-2" /> {language === 'english' ? 'Summary' : 'সারাংশ'}</TabsTrigger>
                      <TabsTrigger value="teachings"><FileText className="inline-block w-5 h-5 mr-2" /> {language === 'english' ? 'Key Teachings' : 'মূল শিক্ষা'}</TabsTrigger>
                      <TabsTrigger value="verses"><Sparkles className="inline-block w-5 h-5 mr-2" /> {language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}</TabsTrigger>
                    </>
                  ) : (
                    <>
                      <TabsTrigger value="summary">{language === 'english' ? 'Summary' : 'সারাংশ'}</TabsTrigger>
                      <TabsTrigger value="teachings">{language === 'english' ? ' Points ' : 'মূল শিক্ষা'}</TabsTrigger>
                      <TabsTrigger value="verses">{language === 'english' ? 'Verses' : 'মূল শ্লোক'}</TabsTrigger>
                    </>
                  )}
                </TabsList>
                
                <TabsContent value="summary" className="text-foreground/80 space-y-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {language === 'english' 
                      ? `Chapter ${chapter.number} Overview` 
                      : `অধ্যায় ${chapter.number} পরিদর্শন`}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">{getChapterSummary(chapter.number, language)}</p>
                  <div className="flex justify-between items-center text-sm mt-4">
                    <div>
                      {language === 'english' 
                        ? `Verses: ${getVerseCount(chapter.number)}` 
                        : `শ্লোক: ${getVerseCount(chapter.number)}`}
                    </div>
                    <div className="text-primary">
                      {language === 'english' 
                        ? `Sanskrit Name: ${getSanskritName(chapter.number)}` 
                        : `সংস্কৃত নাম: ${getSanskritName(chapter.number)}`}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="teachings" className="space-y-6 mt-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === 'english' 
                      ? 'Key Teachings' 
                      : 'মূল শিক্ষা'}
                  </h3>
                  <ul className="space-y-4">
                    {keyTeachings.map((teaching, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-foreground/80 leading-relaxed">
                        <span>{teaching}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="verses" className="space-y-8 mt-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === 'english' 
                      ? 'Notable Verses' 
                      : 'উল্লেখযোগ্য শ্লোক'}
                  </h3>
                  <div className="space-y-6 pl-2">
                    {keyVerses.map((verse, idx) => (
                      <div 
                        key={idx} 
                        className="border-l-2 border-primary/30 pl-4 py-4 bg-background/50 rounded-md space-y-2"
                      >
                        <p className="italic text-sm text-foreground/80 leading-relaxed">{verse.sanskrit}</p>
                        <p className="text-sm text-foreground/90 leading-relaxed">{verse.translation}</p>
                        <p className="text-xs text-primary">{verse.reference}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ChapterDetailCard;
