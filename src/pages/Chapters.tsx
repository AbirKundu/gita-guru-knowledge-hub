import React, { useEffect, useContext, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/providers/LanguageProvider';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown, BookOpen, ScrollText, Sparkles } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChaptersPage = () => {
  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'Chapters | GitaGuru' : 'অধ্যায়সমূহ | গীতাগুরু';
  }, [language]);

  // Reuse the chapters data from components/Chapters.tsx
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

interface ChapterDetailCardProps {
  chapter: {
    number: number;
    title: string;
    description: string;
  };
}

const ChapterDetailCard = ({ chapter }: ChapterDetailCardProps) => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  
  const keyTeachings = getKeyTeachings(chapter.number, language);
  const keyVerses = getKeyVerses(chapter.number, language);
  
  return (
    <div id={`chapter-${chapter.number}`} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        className="w-full"
      >
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
                <TabsList className="w-full grid grid-cols-3 mb-4">
                  <TabsTrigger value="summary">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      <span>{language === 'english' ? 'Summary' : 'সারাংশ'}</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="teachings">
                    <div className="flex items-center gap-2">
                      <ScrollText size={16} />
                      <span>{language === 'english' ? 'Key Teachings' : 'মূল শিক্ষা'}</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="verses">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} />
                      <span>{language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary" className="text-foreground/80">
                  <h3 className="font-semibold mb-2">
                    {language === 'english' 
                      ? `Chapter ${chapter.number} Overview` 
                      : `অধ্যায় ${chapter.number} পরিদর্শন`}
                  </h3>
                  <p className="mb-4">{getChapterSummary(chapter.number, language)}</p>
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
                
                <TabsContent value="teachings">
                  <h3 className="font-semibold mb-3">
                    {language === 'english' 
                      ? 'Key Teachings' 
                      : 'মূল শিক্ষা'}
                  </h3>
                  <ul className="space-y-2">
                    {keyTeachings.map((teaching, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary shrink-0 mt-1">•</span>
                        <span>{teaching}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="verses">
                  <h3 className="font-semibold mb-3">
                    {language === 'english' 
                      ? 'Notable Verses' 
                      : 'উল্লেখযোগ্য শ্লোক'}
                  </h3>
                  <div className="space-y-4">
                    {keyVerses.map((verse, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-3 py-1">
                        <p className="italic text-sm mb-1 text-foreground/80">{verse.sanskrit}</p>
                        <p className="text-sm">{verse.translation}</p>
                        <p className="text-xs text-primary mt-1">{verse.reference}</p>
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

// Function to get key teachings for each chapter
const getKeyTeachings = (chapterNumber: number, language: 'english' | 'bengali') => {
  const teachings = {
    1: {
      english: [
        "The importance of facing our fears and doubts",
        "The conflict of dharma (duty) and personal attachments",
        "Seeking guidance in times of moral confusion",
        "The paralysis that comes from attachment and fear",
        "The need for right understanding before right action"
      ],
      bengali: [
        "আমাদের ভয় ও সন্দেহগুলির মোকাবেলা করার গুরুত্ব",
        "ধর্ম (কর্তব্য) এবং ব্যক্তিগত আসক্তির দ্বন্দ্ব",
        "নৈতিক বিভ্রান্তির সময় নির্দেশনা চাওয়া",
        "আসক্তি ও ভয় থেকে যে পক্ষাঘাত আসে",
        "সঠিক কর্মের আগে সঠিক বোঝার প্রয়োজন"
      ]
    },
    2: {
      english: [
        "The immortality of the soul (Atman)",
        "The nature of the body as temporary and the soul as eternal",
        "The concept of duty (dharma) and detachment from results",
        "Introduction to Karma Yoga - the path of selfless action",
        "The practice of equanimity in pleasure and pain"
      ],
      bengali: [
        "আত্মার অমরত্ব (আত্মন)",
        "দেহের অস্থায়ী প্রকৃতি এবং আত্মার চিরন্তন প্রকৃতি",
        "কর্তব্য (ধর্ম) এবং ফলাফল থেকে বিরক্তির ধারণা",
        "কর্ম যোগের পরিচয় - নিঃস্বার্থ কর্মের পথ",
        "সুখ ও দুঃখে সমতা অনুশীলন"
      ]
    },
    3: {
      english: [
        "The necessity of action even for the enlightened",
        "How to perform actions without creating karmic bondage",
        "Setting an example for others through right action",
        "The concept of yajna (sacrifice) in daily life",
        "The dangers of sense gratification and desire"
      ],
      bengali: [
        "জ্ঞানী ব্যক্তিদের জন্যও কর্মের প্রয়োজনীয়তা",
        "কর্মবন্ধন সৃষ্টি না করে কিভাবে কর্ম করতে হয়",
        "সঠিক কর্মের মাধ্যমে অন্যদের জন্য উদাহরণ স্থাপন",
        "দৈনন্দিন জীবনে যজ্ঞ (ত্যাগ) এর ধারণা",
        "ইন্দ্রিয় তৃপ্তি ও কামনার বিপদ"
      ]
    },
    4: {
      english: [
        "The divine incarnations and their purpose",
        "The different types of sacrifices and their meanings",
        "How knowledge destroys ignorance",
        "The importance of finding a qualified spiritual teacher",
        "The person who sees inaction in action and action in inaction"
      ],
      bengali: [
        "দিব্য অবতার এবং তাদের উদ্দেশ্য",
        "বিভিন্ন ধরনের যজ্ঞ এবং তাদের অর্থ",
        "কিভাবে জ্ঞান অজ্ঞানতা ধ্বংস করে",
        "একজন যোগ্য আধ্যাত্মিক শিক্ষক খোঁজার গুরুত্ব",
        "যে ব্যক্তি কর্মে অকর্ম এবং অকর্মে কর্ম দেখেন"
      ]
    },
    5: {
      english: [
        "Reconciliation of action and renunciation",
        "The state of a person established in self-realization",
        "How to find happiness within rather than in external objects",
        "The practice of seeing the same Self in all beings",
        "Living in the world but not being affected by it"
      ],
      bengali: [
        "কর্ম ও ত্যাগের সমন্বয়",
        "আত্ম-উপলব্ধিতে প্রতিষ্ঠিত ব্যক্তির অবস্থা",
        "বাহ্যিক বস্তুর পরিবর্তে কিভাবে নিজের মধ্যে সুখ খুঁজে পাওয়া যায়",
        "সমস্ত প্রাণীতে একই আত্মা দেখার অনুশীলন",
        "পৃথিবীতে বাস করা কিন্তু তার দ্বারা প্রভাবিত না হওয়া"
      ]
    },
    6: {
      english: [
        "The practice of meditation and yoga",
        "Controlling the mind and senses",
        "The importance of detachment",
        "The balance between effort and surrender",
        "The possibility of self-realization through meditation"
      ],
      bengali: [
        "ধ্যান ও যোগের অনুশীলন",
        "মন ও ইন্দ্রিয় নিয়ন্ত্রণ",
        "আসক্তিহীনতার গুরুত্ব",
        "প্রচেষ্টা ও আত্মসমর্পণের মধ্যে ভারসাম্য",
        "ধ্যানের মাধ্যমে আত্ম-উপলব্ধির সম্ভাবনা"
      ]
    },
    7: {
      english: [
        "Understanding the nature of the Supreme",
        "The manifestation of the divine in the world",
        "The power of devotion",
        "The difference between the material and spiritual energies",
        "The importance of seeking refuge in the divine"
      ],
      bengali: [
        "পরমেশ্বরের স্বরূপ বোঝা",
        "জগতে ঈশ্বরের প্রকাশ",
        "ভক্তির শক্তি",
        "বস্তুগত ও আধ্যাত্মিক শক্তির মধ্যে পার্থক্য",
        "ঈশ্বরের শরণ নেওয়ার গুরুত্ব"
      ]
    },
    8: {
      english: [
        "The process of dying and what happens after death",
        "Remembering the divine at the time of death",
        "The different paths to liberation",
        "The importance of constant remembrance of the divine",
        "The cycle of birth and death and how to transcend it"
      ],
      bengali: [
        "মৃত্যুর প্রক্রিয়া এবং মৃত্যুর পরে কী ঘটে",
        "মৃত্যুর সময় ঈশ্বরকে স্মরণ করা",
        "মুক্তির বিভিন্ন পথ",
        "ঈশ্বরের অবিরাম স্মরণের গুরুত্ব",
        "জন্ম ও মৃত্যুর চক্র এবং কিভাবে এটি অতিক্রম করা যায়"
      ]
    },
    9: {
      english: [
        "The most confidential knowledge",
        "The ease and joy of devotional service",
        "The all-pervading nature of the divine",
        "The acceptance of all sincere devotees",
        "The divine protection offered to devotees"
      ],
      bengali: [
        "সবচেয়ে গোপনীয় জ্ঞান",
        "ভক্তিমূলক সেবার সহজতা ও আনন্দ",
        "ঈশ্বরের সর্বব্যাপী প্রকৃতি",
        "সকল আন্তরিক ভক্তের গ্রহণ",
        "ভক্তদের জন্য ঐশ্বরিক সুরক্ষা"
      ]
    },
    10: {
      english: [
        "The opulence and glory of the Supreme",
        "Understanding the divine manifestations",
        "The source of all creation",
        "The importance of recognizing the divine in everything",
        "The path of devotion as the easiest way to know the divine"
      ],
      bengali: [
        "পরমেশ্বরের ঐশ্বর্য ও মহিমা",
        "ঐশ্বরিক প্রকাশ বোঝা",
        "সমস্ত সৃষ্টির উৎস",
        "সবকিছুতে ঈশ্বরের স্বীকৃতি দেওয়ার গুরুত্ব",
        "ভক্তির পথ ঈশ্বরকে জানার সবচেয়ে সহজ উপায়"
      ]
    },
    11: {
      english: [
        "The vision of the universal form of the divine",
        "The power and majesty of the Supreme",
        "The divine as the controller of time and destiny",
        "The importance of surrendering to the divine will",
        "The awe and reverence due to the Supreme"
      ],
      bengali: [
        "ঈশ্বরের বিশ্বরূপের দর্শন",
        "পরমেশ্বরের শক্তি ও মহিমা",
        "সময় ও ভাগ্যের নিয়ন্ত্রক হিসেবে ঈশ্বর",
        "ঐশ্বরিক ইচ্ছার কাছে আত্মসমর্পণের গুরুত্ব",
        "পরমেশ্বরের প্রতি ভয় ও শ্রদ্ধা"
      ]
    },
    12: {
      english: [
        "The different paths of spiritual practice",
        "The superiority of devotional service",
        "The qualities of a true devotee",
        "The importance of offering all actions to the divine",
        "The peace and joy that come from devotion"
      ],
      bengali: [
        "আধ্যাত্মিক অনুশীলনের বিভিন্ন পথ",
        "ভক্তিমূলক সেবার শ্রেষ্ঠত্ব",
        "একজন সত্যিকারের ভক্তের গুণাবলী",
        "সমস্ত কর্ম ঈশ্বরকে উৎসর্গ করার গুরুত্ব",
        "ভক্তি থেকে আসা শান্তি ও আনন্দ"
      ]
    },
    13: {
      english: [
        "The distinction between the body, the soul, and the Supreme",
        "Understanding the field of activity and the knower of the field",
        "The qualities that lead to knowledge",
        "The importance of self-realization",
        "The ultimate goal of spiritual life"
      ],
      bengali: [
        "দেহ, আত্মা এবং পরমেশ্বরের মধ্যে পার্থক্য",
        "কর্মক্ষেত্র এবং কর্মক্ষেত্র জ্ঞানীকে বোঝা",
        "যে গুণাবলী জ্ঞানের দিকে নিয়ে যায়",
        "আত্ম-উপলব্ধির গুরুত্ব",
        "আধ্যাত্মিক জীবনের চূড়ান্ত লক্ষ্য"
      ]
    },
    14: {
      english: [
        "The three modes of material nature: goodness, passion, and ignorance",
        "How these modes affect our consciousness and actions",
        "The characteristics of those influenced by each mode",
        "How to transcend these modes",
        "The path to liberation from material bondage"
      ],
      bengali: [
        "প্রকৃতির তিনটি গুণ: সত্ত্ব, রজঃ এবং তমঃ",
        "এই গুণগুলি আমাদের চেতনা এবং কর্মকে কিভাবে প্রভাবিত করে",
        "প্রতিটি গুণ দ্বারা প্রভাবিত ব্যক্তিদের বৈশিষ্ট্য",
        "কিভাবে এই গুণগুলি অতিক্রম করা যায়",
        "বস্তুগত বন্ধন থেকে মুক্তির পথ"
      ]
    },
    15: {
      english: [
        "The analogy of the banyan tree to describe the material world",
        "The process of detachment from material attachments",
        "The importance of surrendering to the Supreme",
        "The nature of the Supreme Person",
        "The path to returning to the spiritual world"
      ],
      bengali: [
        "বস্তুজগতকে বর্ণনা করার জন্য বটগাছের উপমা",
        "বস্তুগত আসক্তি থেকে মুক্তির প্রক্রিয়া",
        "পরমেশ্বরের কাছে আত্মসমর্পণের গুরুত্ব",
        "পরম পুরুষের স্বরূপ",
        "আধ্যাত্মিক জগতে ফিরে যাওয়ার পথ"
      ]
    },
    16: {
      english: [
        "The divine and demoniac qualities",
        "The characteristics of those with divine qualities",
        "The characteristics of those with demoniac qualities",
        "The consequences of following each path",
        "The importance of choosing the path of righteousness"
      ],
      bengali: [
        "দৈবী ও আসুরিক গুণাবলী",
        "যাদের মধ্যে দৈবী গুণাবলী রয়েছে তাদের বৈশিষ্ট্য",
        "যাদের মধ্যে আসুরিক গুণাবলী রয়েছে তাদের বৈশিষ্ট্য",
        "প্রতিটি পথ অনুসরণ করার পরিণতি",
        "ধার্মিকতার পথ বেছে নেওয়ার গুরুত্ব"
      ]
    },
    17: {
      english: [
        "The three divisions of faith",
        "How faith influences our actions and choices",
        "The different types of sacrifices, austerities, and charities",
        "The importance of performing actions with the right intention",
        "The path to purifying our consciousness"
      ],
      bengali: [
        "বিশ্বাসের তিনটি বিভাগ",
        "বিশ্বাস আমাদের কর্ম ও পছন্দকে কিভাবে প্রভাবিত করে",
        "বিভিন্ন ধরনের যজ্ঞ, তপস্যা এবং দান",
        "সঠিক উদ্দেশ্য নিয়ে কর্ম করার গুরুত্ব",
        "আমাদের চেতনাকে শুদ্ধ করার পথ"
      ]
    },
    18: {
      english: [
        "The conclusion of the teachings",
        "The importance of renunciation and surrender",
        "The ultimate goal of life: liberation",
        "The path of devotion as the most direct way to the Supreme",
        "The call to action and the promise of divine grace"
      ],
      bengali: [
        "শিক্ষার উপসংহার",
        "ত্যাগ ও আত্মসমর্পণের গুরুত্ব",
        "জীবনের চূড়ান্ত লক্ষ্য: মুক্তি",
        "পরমেশ্বরের কাছে যাওয়ার সবচেয়ে সরাসরি পথ হিসেবে ভক্তির পথ",
        "কর্মের আহ্বান এবং ঐশ্বরিক কৃপার প্রতিশ্রুতি"
      ]
    }
  };

  // Return teachings for the specified chapter and language, or an empty array if not found
  return teachings[chapterNumber as keyof typeof teachings]?.[language] || [];
};

// Function to get key verses for each chapter
const getKeyVerses = (chapterNumber: number, language: 'english' | 'bengali') => {
  const verses = {
    1: [
      {
        sanskrit: "dhṛtarāṣṭra uvāca dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",
        translation: language === 'english' 
          ? "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager for battle?"
          : "ধৃতরাষ্ট্র বললেন: হে সঞ্জয়, যখন আমার পুত্ররা এবং পাণ্ডুর পুত্ররা যুদ্ধের জন্য উৎসুক হয়ে কুরুক্ষেত্রের পবিত্র ক্ষেত্রে সমবেত হয়েছিল, তখন তারা কী করেছিল?",
        reference: "Chapter 1, Verse 1"
      },
      {
        sanskrit: "tam uvāca hṛṣīkeśaḥ prahasann iva bhārata senayor ubhayor madhye viṣīdantam idaṁ vacaḥ",
        translation: language === 'english' 
          ? "In the midst of both armies, Krishna spoke these words to the grief-stricken Arjuna, as if smiling."
          : "উভয় সেনাবাহিনীর মধ্যে, কৃষ্ণ শোকাতুর অর্জুনকে এই কথাগুলি বললেন, যেন হাসছিলেন।",
        reference: "Chapter 1, Verse 47"
      },
    ],
    2: [
      {
        sanskrit: "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre",
        translation: language === 'english' 
          ? "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."
          : "আত্মার কোনো সময়েই জন্ম বা মৃত্যু নেই। এটি উৎপন্ন হয়নি, উৎপন্ন হয় না, এবং উৎপন্ন হবে না। এটি অজন্মা, চিরন্তন, চিরকাল বিদ্যমান এবং আদিম। দেহ বিনষ্ট হলেও এটি বিনষ্ট হয় না।",
        reference: "Chapter 2, Verse 20"
      },
      {
        sanskrit: "karmaṇy evādhikāras te mā phaleṣu kadācana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
        translation: language === 'english' 
          ? "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself as the cause of the results of your activities, and never be attached to not doing your duty."
          : "আপনার নির্ধারিত কর্তব্য পালন করার অধিকার আপনার আছে, কিন্তু আপনার কর্মের ফলের উপর আপনার অধিকার নেই। নিজেকে কখনো আপনার কর্মের ফলের কারণ হিসেবে বিবেচনা করবেন না, এবং কখনো আপনার কর্তব্য না করার প্রতি আসক্ত হবেন না।",
        reference: "Chapter 2, Verse 47"
      },
    ],
    3: [
      {
        sanskrit: "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ",
        translation: language === 'english'
          ? "Perform your prescribed duty, for action is better than inaction. A man cannot even maintain his physical body without work."
          : "তোমার নির্ধারিত কর্তব্য পালন করো, কারণ নিষ্ক্রিয়তার চেয়ে কর্ম ভালো। কর্ম ছাড়া মানুষ তার শরীরকেও টিকিয়ে রাখতে পারে না।",
        reference: "Chapter 3, Verse 8"
      },
      {
        sanskrit: "lokasaṅgraham evāpi sampaśhyan kartum arhasi yadyad ācharati śhreṣhṭhaḥ tattad evetaro janaḥ",
        translation: language === 'english'
          ? "Whatever action is performed by a great man, common men follow in his footsteps. And whatever standards he sets by exemplary acts, all the world pursues."
          : "মহৎ ব্যক্তি যে কাজ করেন, সাধারণ মানুষ তার পদাঙ্ক অনুসরণ করে। এবং তিনি অনুকরণীয় কাজের মাধ্যমে যে মান নির্ধারণ করেন, সারা বিশ্ব তা অনুসরণ করে।",
        reference: "Chapter 3, Verse 21"
      },
    ],
    4: [
      {
        sanskrit: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛjāmyaham",
        translation: language === 'english'
          ? "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself."
          : "যখনই এবং যেখানেই ধর্মের অনুশীলনে অবনতি হয়, হে ভারত বংশধর, এবং অধর্মের প্রবল বৃদ্ধি হয়—তখন আমি নিজেকে অবতারিত করি।",
        reference: "Chapter 4, Verse 7"
      },
      {
        sanskrit: "paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām dharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
        translation: language === 'english'
          ? "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium."
          : "ধার্মিকদের রক্ষা করতে এবং দুষ্টদের বিনাশ করতে, সেইসাথে ধর্মের নীতিগুলি পুনঃপ্রতিষ্ঠা করতে, আমি যুগে যুগে নিজেকে প্রকাশ করি।",
        reference: "Chapter 4, Verse 8"
      },
    ],
    5: [
      {
        sanskrit: "sannyāsaḥ karma-yogaś ca niḥśreyasa-karāv ubhau tayos tu karma-sannyāsāt karma-yogo viśiṣhyate",
        translation: language === 'english'
          ? "The renunciation of action and action in devotion both lead to liberation, but of the two, action in devotional service is better than renunciation of action."
          : "কর্ম ত্যাগ এবং ভক্তিতে কর্ম উভয়ই মুক্তির দিকে পরিচালিত করে, তবে উভয়ের মধ্যে, ভক্তিমূলক সেবায় কর্ম কর্ম ত্যাগ থেকে উত্তম।",
        reference: "Chapter 5, Verse 2"
      },
      {
        sanskrit: "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ lipyate na sa pāpena padma-patram ivāmbhasā",
        translation: language === 'english'
          ? "One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water."
          : "যিনি আসক্তি ছাড়া তাঁর কর্তব্য পালন করেন, পরমেশ্বরের কাছে ফলাফল অর্পণ করেন, তিনি পাপপূর্ণ কর্ম দ্বারা প্রভাবিত হন না, যেমন পদ্ম পাতা জল দ্বারা অস্পৃষ্ট থাকে।",
        reference: "Chapter 5, Verse 10"
      },
    ],
    6: [
      {
        sanskrit: "uddhared ātmanātmānaṁ nātmānam avasādayet ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
        translation: language === 'english'
          ? "A man must elevate himself by his own mind, not degrade himself. The mind is the friend of the conditioned soul, and its enemy as well."
          : "মানুষকে অবশ্যই নিজের মন দিয়ে নিজেকে উন্নত করতে হবে, নিজেকে অবনমিত করা উচিত নয়। মন হল শর্তযুক্ত আত্মার বন্ধু এবং শত্রু উভয়ই।",
        reference: "Chapter 6, Verse 5"
      },
      {
        sanskrit: "yuktāhāra-vihārasya yuktacheṣhṭasya karmasu yukta-svapnāvabodhasya yogo bhavati duḥkhahā",
        translation: language === 'english'
          ? "He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system."
          : "যিনি তাঁর আহার, ঘুম, বিনোদন এবং কাজের অভ্যাসে নিয়মিত, তিনি যোগ অনুশীলনের মাধ্যমে সমস্ত জাগতিক কষ্ট কমাতে পারেন।",
        reference: "Chapter 6, Verse 17"
      },
    ],
    7: [
      {
        sanskrit: "mayy āsakta-manāḥ pārtha yogaṁ yuñjan mad-āśrayaḥ asaṁśhayaṁ samagraṁ māṁ yathā jñāsyasi tach chhṛṇu",
        translation: language === 'english'
          ? "Now hear, O son of Pritha, how by practicing yoga in full consciousness of Me, with mind attached to Me, you can know Me completely, free from all doubt."
          : "হে পৃথা পুত্র, এখন শোনো, কিভাবে আমার প্রতি মন সংযুক্ত করে, আমার পূর্ণ চেতনায় যোগ অনুশীলন করে, তুমি কিভাবে আমাকে সম্পূর্ণরূপে জানতে পারবে, সমস্ত সন্দেহ থেকে মুক্ত হয়ে।",
        reference: "Chapter 7, Verse 1"
      },
      {
        sanskrit: "raso 'ham apsu kaunteya prabhāsmi śaśi-sūryayoḥ praṇavaḥ sarva-vedeṣhu śabdaḥ khe pauruṣhaṁ nṛiṣhu",
        translation: language === 'english'
          ? "O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable om in the Vedic mantras; I am the sound in ether and ability in man."
          : "হে কুন্তী পুত্র, আমি জলের স্বাদ, সূর্য ও চন্দ্রের আলো, বৈদিক মন্ত্রে ওঁ শব্দটি; আমি আকাশের শব্দ এবং মানুষের ক্ষমতা।",
        reference: "Chapter 7, Verse 8"
      },
    ],
    8: [
      {
        sanskrit: "anta-kāle cha mām eva smaran muktvā kalevaram yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśhayaḥ",
        translation: language === 'english'
          ? "And whoever, at the end of his life, quits his body remembering Me alone, at once attains My nature. Of this there is no doubt."
          : "এবং যে কেউ, তার জীবনের শেষে, একা আমাকে স্মরণ করে তার শরীর ত্যাগ করে, সে অবিলম্বে আমার প্রকৃতি লাভ করে। এতে কোনো সন্দেহ নেই।",
        reference: "Chapter 8, Verse 5"
      },
      {
        sanskrit: "abhyāsa-yoga-yuktena chetasā nānya-gāminā paramaṁ puruṣhaṁ divyaṁ yāti pārthānuchintayan",
        translation: language === 'english'
          ? "He who meditates on the Supreme Personality of Godhead, his mind constantly engaged in remembering Me, undeviated from the path, he, O Partha, is sure to reach Me."
          : "যিনি পরমেশ্বর ভগবানের উপর ধ্যান করেন, তাঁর মন সর্বদা আমাকে স্মরণ করতে নিযুক্ত থাকে, পথ থেকে বিচ্যুত না হয়ে, হে পার্থ, তিনি নিশ্চিতভাবে আমাকে লাভ করেন।",
        reference: "Chapter 8, Verse 8"
      },
    ],
    9: [
      {
        sanskrit: "ananyāś chintayanto māṁ ye janāḥ paryupāsate teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
        translation: language === 'english'
          ? "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have."
          : "কিন্তু যারা সর্বদা অনন্য ভক্তি সহকারে আমার পূজা করে, আমার অলৌকিক রূপের উপর ধ্যান করে—তাদের যা নেই তা আমি বহন করি এবং তাদের যা আছে তা আমি রক্ষা করি।",
        reference: "Chapter 9, Verse 22"
      },
      {
        sanskrit: "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati tad ahaṁ bhakty-upahṛitam aśhnāmi prayatātmanaḥ",
        translation: language === 'english'
          ? "If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it."
          : "যদি কেউ আমাকে ভালবাসা এবং ভক্তি সহকারে একটি পাতা, একটি ফুল, একটি ফল বা জল অর্পণ করে, আমি তা গ্রহণ করি।",
        reference: "Chapter 9, Verse 26"
      },
    ],
    10: [
      {
        sanskrit: "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate iti matvā bhajante māṁ budhā bhāva-samanvitāḥ",
        translation: language === 'english'
          ? "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts."
          : "আমি সমস্ত আধ্যাত্মিক এবং বস্তুগত জগতের উৎস। সবকিছু আমার থেকে উৎপন্ন হয়। জ্ঞানী যারা এটি সম্পূর্ণরূপে জানেন তারা আমার ভক্তিমূলক সেবায় নিযুক্ত হন এবং তাদের সমস্ত হৃদয় দিয়ে আমার পূজা করেন।",
        reference: "Chapter 10, Verse 8"
      },
      {
        sanskrit: "teṣhāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam dadāmi buddhi-yogaṁ taṁ yena mām upayānti te",
        translation: language === 'english'
          ? "To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me."
          : "যারা সর্বদা ভালবাসার সাথে আমার সেবায় নিবেদিত, আমি তাদের সেই জ্ঞান দান করি যার দ্বারা তারা আমার কাছে আসতে পারে।",
        reference: "Chapter 10, Verse 10"
      },
    ],
    11: [
      {
        sanskrit: "arjuna uvācha paśhyāmi devāṁs tava deva dehe sarvāṁs tathā bhūta-viśheṣha-saṅghān brahmāṇam īśaṁ kamalāsana-stham ṛiṣhīṁśh cha sarvān uragāṁśh cha divyān",
        translation: language === 'english'
          ? "Arjuna said: My dear Lord Krishna, I see assembled in Your body all the demigods and various other living entities. I see Brahma sitting on the lotus flower, as well as Lord Shiva and all the sages and divine serpents."
          : "অর্জুন বললেন: হে আমার প্রিয় কৃষ্ণ, আমি আপনার দেহে সমস্ত দেবতা এবং অন্যান্য বিভিন্ন জীবন্ত সত্তাকে একত্রিত দেখছি। আমি ব্রহ্মা কে পদ্মফুলের উপর বসে থাকতে দেখছি, সেইসাথে শিব এবং সমস্ত
