import React, { useState, useContext } from 'react';
import { ChapterData } from '@/data/chapters';
import { LanguageContext } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown, BookOpen, ScrollText, Sparkles } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  
  return (
    <div id={`chapter-${chapter.number}`} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded-full text-xl font-bold">
              {chapter.number}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
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
                <TabsList className="grid grid-cols-3 gap-4 mb-6 relative">
                  <div className="absolute inset-0 bg-secondary/50 rounded-tl-full rounded-tr-full h-12 -z-10" />
                  <TabsTrigger value="summary" className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{language === 'english' ? 'Summary' : 'সারাংশ'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="teachings" className="flex items-center gap-2">
                    <ScrollText size={16} />
                    <span>{language === 'english' ? 'Key Teachings' : 'মূল শিক্ষা'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="verses" className="flex items-center gap-2">
                    <Sparkles size={16} />
                    <span>{language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary" className="space-y-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {language === 'english' ? `Chapter ${chapter.number} Overview` : `অধ্যায় ${chapter.number} পরিদর্শন`}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">{getChapterSummary(chapter.number, language)}</p>
                </TabsContent>
                
                <TabsContent value="teachings" className="space-y-6 mt-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === 'english' ? 'Key Teachings' : 'মূল শিক্ষা'}
                  </h3>
                  <ul className="space-y-4">
                    {keyTeachings.map((teaching, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-foreground/80 leading-relaxed">
                        <span className="text-primary shrink-0 mt-1">•</span>
                        <span>{teaching}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="verses" className="space-y-8 mt-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === 'english' ? 'Notable Verses' : 'উল্লেখযোগ্য শ্লোক'}
                  </h3>
                  <div className="space-y-6 pl-2">
                    {keyVerses.map((verse, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-4 py-4 bg-background/50 rounded-md space-y-2">
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
