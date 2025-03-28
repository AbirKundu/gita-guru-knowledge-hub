
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Book, Languages, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const VersesPage = () => {
  const [language, setLanguage] = useState<'english' | 'bengali'>('english');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVerses, setFilteredVerses] = useState(allVerses);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'Key Verses | GitaGuru' : 'মূল শ্লোক | গীতাগুরু';

    // Filter verses based on search term
    if (searchTerm.trim() === '') {
      setFilteredVerses(allVerses);
    } else {
      const lowercasedSearch = searchTerm.toLowerCase();
      setFilteredVerses(
        allVerses.filter(verse => 
          verse.translation.toLowerCase().includes(lowercasedSearch) ||
          verse.explanation.toLowerCase().includes(lowercasedSearch) ||
          `chapter ${verse.chapter}`.includes(lowercasedSearch) ||
          `verse ${verse.verse}`.includes(lowercasedSearch)
        )
      );
    }
  }, [language, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="flex items-center space-x-2">
              <Languages size={20} className="text-primary" />
              <span className="text-foreground/80">Language:</span>
              <div className="flex rounded-md border overflow-hidden">
                <button 
                  onClick={() => setLanguage('english')}
                  className={cn(
                    "px-3 py-2 text-sm transition-colors",
                    language === 'english' ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                  )}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('bengali')}
                  className={cn(
                    "px-3 py-2 text-sm transition-colors",
                    language === 'bengali' ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                  )}
                >
                  বাংলা
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
              <Input
                placeholder={language === 'english' ? "Search verses..." : "শ্লোক অনুসন্ধান করুন..."}
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-16 mb-20">
            {filteredVerses.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/60">
                  {language === 'english' ? "No verses found matching your search." : "আপনার অনুসন্ধানের সাথে মিলে এমন কোন শ্লোক পাওয়া যায়নি।"}
                </p>
              </div>
            ) : (
              filteredVerses.map((chapter, index) => (
                <ChapterSection 
                  key={index} 
                  chapterData={chapter} 
                  language={language} 
                />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Component for each chapter section
const ChapterSection = ({ 
  chapterData, 
  language 
}: { 
  chapterData: ChapterVerse, 
  language: 'english' | 'bengali' 
}) => {
  return (
    <section className="scroll-mt-20" id={`chapter-${chapterData.chapter}`}>
      <div className="flex items-center gap-3 mb-6">
        <Book size={28} className="text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold">
          {language === 'english' 
            ? `Chapter ${chapterData.chapter}: ${chapterData.chapterName}`
            : `অধ্যায় ${chapterData.chapter}: ${chapterData.chapterNameBengali}`}
        </h2>
      </div>
      
      <p className="text-foreground/80 mb-8">
        {language === 'english' ? chapterData.chapterDescription : chapterData.chapterDescriptionBengali}
      </p>
      
      <div className="space-y-12">
        {chapterData.verses.map((verse, idx) => (
          <VerseCard 
            key={idx} 
            verse={verse} 
            chapterNum={chapterData.chapter}
            language={language} 
          />
        ))}
      </div>
    </section>
  );
};

// Component for each verse card
const VerseCard = ({ 
  verse, 
  chapterNum,
  language 
}: { 
  verse: Verse, 
  chapterNum: number,
  language: 'english' | 'bengali' 
}) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
          {language === 'english' 
            ? `Verse ${verse.verse}`
            : `শ্লোক ${verse.verse}`}
        </span>
      </div>
      
      <div className="mb-6">
        <p className="text-xl font-medium font-serif leading-relaxed mb-2">
          {verse.sanskrit}
        </p>
        <p className="text-foreground/70 italic text-sm">
          {verse.transliteration}
        </p>
      </div>
      
      <div className="border-t border-border pt-4">
        <p className="text-lg mb-4 font-medium">
          {language === 'english' ? verse.translation : verse.bengaliTranslation}
        </p>
        <p className="text-foreground/80">
          {language === 'english' ? verse.explanation : verse.bengaliExplanation}
        </p>
      </div>
    </div>
  );
};

// Types
interface Verse {
  verse: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  bengaliTranslation: string;
  explanation: string;
  bengaliExplanation: string;
}

interface ChapterVerse {
  chapter: number;
  chapterName: string;
  chapterNameBengali: string;
  chapterDescription: string;
  chapterDescriptionBengali: string;
  verses: Verse[];
}

// All verses data
const allVerses: ChapterVerse[] = [
  {
    chapter: 1,
    chapterName: "Arjuna's Dilemma",
    chapterNameBengali: "অর্জুনের সংশয়",
    chapterDescription: "Arjuna faces the moral dilemma of fighting against his own family and teachers.",
    chapterDescriptionBengali: "অর্জুন তার নিজের পরিবার এবং শিক্ষকদের বিরুদ্ধে যুদ্ধ করার নৈতিক সংকটের মুখোমুখি হন।",
    verses: [
      {
        verse: 47,
        sanskrit: "एवमुक्त्वार्जुन: संख्ये रथोपस्थ उपाविशत् । विसृज्य सशरं चापं शोकसंविग्नमानस: ॥",
        transliteration: "evam uktvārjunaḥ saṅkhye rathopastha upāviśhat visṛijya saśaraṁ chāpaṁ śhoka-saṁvigna-mānasaḥ",
        translation: "Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down on the chariot seat, his mind overwhelmed with grief.",
        bengaliTranslation: "এভাবে যুদ্ধক্ষেত্রে বলার পর, অর্জুন তার ধনুক ও তীর রেখে দিলেন এবং রথের আসনে বসে পড়লেন, তার মন শোকে বিহ্বল হয়ে গেল।",
        explanation: "This verse marks the culmination of Arjuna's despair as he refuses to fight, setting the stage for Krishna's teachings.",
        bengaliExplanation: "এই শ্লোকটি অর্জুনের হতাশার চরম বিন্দু চিহ্নিত করে যেখানে তিনি যুদ্ধ করতে অস্বীকার করেন, যা কৃষ্ণের শিক্ষার জন্য মঞ্চ তৈরি করে।"
      }
    ]
  },
  {
    chapter: 2,
    chapterName: "Transcendental Knowledge",
    chapterNameBengali: "সাংখ্য যোগ",
    chapterDescription: "Krishna begins his teachings with the nature of the soul and the concept of duty.",
    chapterDescriptionBengali: "কৃষ্ণ আত্মার প্রকৃতি এবং কর্তব্যের ধারণা নিয়ে তার শিক্ষা শুরু করেন।",
    verses: [
      {
        verse: 47,
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
        translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
        bengaliTranslation: "তোমার কর্মে অধিকার আছে, কিন্তু তার ফলে নয়। কর্মফলের কারণ হয়ো না, এবং অকর্মে আসক্তও হয়ো না।",
        explanation: "This famous verse is the essence of Karma Yoga, teaching detached action - doing one's duty without being attached to the results.",
        bengaliExplanation: "এই বিখ্যাত শ্লোকটি কর্মযোগের সারমর্ম, যা অনাসক্ত কর্মের শিক্ষা দেয় - ফলের আসক্তি ছাড়াই নিজের কর্তব্য পালন করা।"
      },
      {
        verse: 55,
        sanskrit: "प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्। आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते॥",
        transliteration: "prajahāti yadā kāmān sarvān pārtha mano-gatān ātmany-evātmanā tuṣhṭaḥ sthita-prajñas tadochyate",
        translation: "When one gives up all varieties of desire for sense gratification, which arise from mental concoction, and when the mind, thus purified, finds satisfaction in the self alone, then one is said to be in pure transcendental consciousness.",
        bengaliTranslation: "হে পার্থ, যখন কেউ মনের সমস্ত কামনা ত্যাগ করে, এবং আত্মাতেই আত্মা দ্বারা সন্তুষ্ট থাকে, তখন তাকে স্থিতপ্রজ্ঞ বলা হয়।",
        explanation: "This verse describes the characteristics of a person with steady wisdom (sthitaprajna) who has overcome material desires and found inner contentment.",
        bengaliExplanation: "এই শ্লোকটি একজন স্থিতপ্রজ্ঞ ব্যক্তির বৈশিষ্ট্য বর্ণনা করে যিনি বস্তুগত ইচ্ছাকে অতিক্রম করেছেন এবং আন্তরিক সন্তুষ্টি খুঁজে পেয়েছেন।"
      }
    ]
  },
  {
    chapter: 3,
    chapterName: "Karma Yoga",
    chapterNameBengali: "কর্ম যোগ",
    chapterDescription: "Krishna explains the importance of selfless action and performing one's duty.",
    chapterDescriptionBengali: "কৃষ্ণ নিষ্কাম কর্ম এবং নিজের কর্তব্য পালনের গুরুত্ব ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 27,
        sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
        transliteration: "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ ahaṅkāra-vimūḍhātmā kartāham iti manyate",
        translation: "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
        bengaliTranslation: "প্রকৃতির গুণ দ্বারা সমস্ত কার্য সম্পাদিত হয়, কিন্তু অহংকারে মুগ্ধ আত্মা নিজেকে কর্তা মনে করে।",
        explanation: "This verse explains how our actions are performed by the forces of nature (gunas), but the deluded ego makes us think we are the doers.",
        bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে যে আমাদের কার্যগুলি প্রকৃতির শক্তি (গুণ) দ্বারা সম্পাদিত হয়, কিন্তু বিভ্রান্ত অহংকার আমাদের ভাবায় যে আমরাই কর্তা।"
      }
    ]
  },
  {
    chapter: 4,
    chapterName: "Transcendental Knowledge",
    chapterNameBengali: "জ্ঞান যোগ",
    chapterDescription: "Krishna reveals divine knowledge about his incarnations and the nature of action.",
    chapterDescriptionBengali: "কৃষ্ণ তার অবতার এবং কর্মের প্রকৃতি সম্পর্কে দিব্য জ্ঞান প্রকাশ করেন।",
    verses: [
      {
        verse: 7,
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
        translation: "Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest myself. For the protection of the good, for the destruction of the wicked, and for the establishment of righteousness, I appear in every age.",
        bengaliTranslation: "হে ভারত, যখনই ধর্মের হানি এবং অধর্মের উত্থান হয়, তখনই আমি নিজেকে সৃষ্টি করি। সাধুদের রক্ষা, দুষ্টদের বিনাশ এবং ধর্মের পুনঃস্থাপনের জন্য আমি যুগে যুগে আবির্ভূত হই।",
        explanation: "This fundamental verse describes Krishna's divine purpose in incarnating in the world whenever dharma (righteousness) declines.",
        bengaliExplanation: "এই মৌলিক শ্লোকটি বর্ণনা করে যে যখনই ধর্মের অবনতি হয়, তখন কৃষ্ণ পৃথিবীতে অবতার নেওয়ার দিব্য উদ্দেশ্য।"
      },
      {
        verse: 8,
        sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
        transliteration: "paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām dharma-sansthāpanārthāya sambhavāmi yuge yuge",
        translation: "To protect the righteous, to annihilate the wicked, and to reestablish the principles of dharma I appear millennium after millennium.",
        bengaliTranslation: "সাধুদের রক্ষা করার জন্য, দুষ্কৃতিদের বিনাশ করার জন্য, এবং ধর্মের নীতি পুনরায় প্রতিষ্ঠা করার জন্য আমি যুগে যুগে আবির্ভূত হই।",
        explanation: "This verse continues from the previous one, explaining the three purposes of God's incarnation: to protect the good, destroy evil, and reestablish dharma.",
        bengaliExplanation: "এই শ্লোকটি আগের শ্লোক থেকে অব্যাহত, ঈশ্বরের অবতারের তিনটি উদ্দেশ্য ব্যাখ্যা করে: ভালোকে রক্ষা করা, খারাপকে ধ্বংস করা এবং ধর্ম পুনঃপ্রতিষ্ঠা করা।"
      }
    ]
  },
  {
    chapter: 5,
    chapterName: "Karma-Sannyasa Yoga",
    chapterNameBengali: "কর্ম-সন্ন্যাস যোগ",
    chapterDescription: "Krishna compares the paths of renunciation and action, explaining they lead to the same goal.",
    chapterDescriptionBengali: "কৃষ্ণ ত্যাগ এবং কর্মের পথের তুলনা করেন, ব্যাখ্যা করেন যে তারা একই লক্ষ্যে পৌঁছায়।",
    verses: [
      {
        verse: 12,
        sanskrit: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्। अयुक्तः कामकारेण फले सक्तो निबध्यते॥",
        transliteration: "yuktaḥ karma-phalaṁ tyaktvā śhāntim āpnoti naiṣhṭhikīm ayuktaḥ kāma-kāreṇa phale sakto nibadhyate",
        translation: "The disciplined soul, relinquishing the fruits of action, attains perfect peace. The undisciplined soul, driven by desire and attached to the fruits, remains bound.",
        bengaliTranslation: "যোগযুক্ত ব্যক্তি কর্মফল ত্যাগ করে পরম শান্তি লাভ করে। অযুক্ত ব্যক্তি কামনার দ্বারা চালিত হয়ে ফলে আসক্ত থাকে এবং বন্ধনে থাকে।",
        explanation: "This verse contrasts the fate of the disciplined practitioner who works without attachment to results versus those who act with selfish desire.",
        bengaliExplanation: "এই শ্লোকটি শৃঙ্খলাবদ্ধ সাধকের ভাগ্যের তুলনা করে যারা ফলের আসক্তি ছাড়া কাজ করে এবং যারা স্বার্থপর ইচ্ছা নিয়ে কাজ করে।"
      }
    ]
  },
  {
    chapter: 6,
    chapterName: "Dhyana Yoga",
    chapterNameBengali: "ধ্যান যোগ",
    chapterDescription: "Krishna explains the process of meditation and controlling the mind.",
    chapterDescriptionBengali: "কৃষ্ণ ধ্যান এবং মন নিয়ন্ত্রণের প্রক্রিয়া ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 5,
        sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
        transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
        translation: "One must elevate oneself by one's own mind, not degrade oneself. The mind is the friend of the conditioned soul, and his enemy as well.",
        bengaliTranslation: "নিজের দ্বারা নিজেকে উদ্ধার করো, নিজেকে অবনত করো না। আত্মাই আত্মার বন্ধু, আবার আত্মাই আত্মার শত্রু।",
        explanation: "This verse emphasizes self-effort in spiritual advancement and how our mind can be either our greatest ally or worst enemy.",
        bengaliExplanation: "এই শ্লোকটি আধ্যাত্মিক উন্নতিতে আত্ম-প্রচেষ্টাকে জোর দেয় এবং কীভাবে আমাদের মন আমাদের সবচেয়ে বড় মিত্র বা সবচেয়ে খারাপ শত্রু হতে পারে।"
      },
      {
        verse: 34,
        sanskrit: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्। तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥",
        transliteration: "chañchalaṁ hi manaḥ kṛiṣhṇa pramāthi balavad dṛiḍham tasyāhaṁ nigrahaṁ manye vāyor iva su-duṣhkaram",
        translation: "For the mind is restless, turbulent, obstinate and very strong, O Krishna, and to subdue it, I think, is more difficult than controlling the wind.",
        bengaliTranslation: "হে কৃষ্ণ, মন চঞ্চল, উত্তেজক, জেদী এবং খুব শক্তিশালী, এবং একে দমন করা, আমার মনে হয়, বাতাসকে নিয়ন্ত্রণ করার চেয়েও বেশি কঠিন।",
        explanation: "Arjuna expresses the difficulty of controlling the mind, comparing it to the impossible task of controlling the wind.",
        bengaliExplanation: "অর্জুন মনকে নিয়ন্ত্রণ করার কঠিনতা প্রকাশ করেন, এটিকে বাতাসকে নিয়ন্ত্রণ করার অসম্ভব কাজের সাথে তুলনা করেন।"
      }
    ]
  },
  {
    chapter: 7,
    chapterName: "Knowledge of the Absolute",
    chapterNameBengali: "জ্ঞান-বিজ্ঞান যোগ",
    chapterDescription: "Krishna reveals his divine nature and how to know him fully.",
    chapterDescriptionBengali: "কৃষ্ণ তার দিব্য প্রকৃতি এবং তাকে পূর্ণরূপে জানার উপায় প্রকাশ করেন।",
    verses: [
      {
        verse: 8,
        sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः। प्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु॥",
        transliteration: "raso 'ham apsu kaunteya prabhāsmi śhaśhi-sūryayoḥ praṇavaḥ sarva-vedeṣhu śhabdaḥ khe pauruṣhaṁ nṛiṣhu",
        translation: "O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable Om in the Vedic mantras; I am the sound in ether and ability in man.",
        bengaliTranslation: "হে কুন্তীপুত্র, আমি জলের স্বাদ, সূর্য ও চন্দ্রের আলো, বৈদিক মন্ত্রে ওঙ্কার; আমি আকাশে শব্দ এবং মানুষে সামর্থ্য।",
        explanation: "Krishna describes how he exists in the essential qualities of various elements and phenomena in the universe.",
        bengaliExplanation: "কৃষ্ণ বর্ণনা করেন কিভাবে তিনি বিশ্বের বিভিন্ন উপাদান এবং ঘটনার অপরিহার্য গুণাবলীতে বিদ্যমান।"
      }
    ]
  },
  {
    chapter: 8,
    chapterName: "Attaining the Supreme",
    chapterNameBengali: "অক্ষর-ব্রহ্ম যোগ",
    chapterDescription: "Krishna describes the process of leaving the body at death and attaining the supreme abode.",
    chapterDescriptionBengali: "কৃষ্ণ মৃত্যুর সময় শরীর ত্যাগ করার এবং পরম ধাম প্রাপ্তির প্রক্রিয়া বর্ণনা করেন।",
    verses: [
      {
        verse: 5,
        sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
        transliteration: "anta-kāle cha mām eva smaran muktvā kalevaram yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśhayaḥ",
        translation: "And whoever, at the end of his life, quits his body remembering Me alone, at once attains My nature. Of this there is no doubt.",
        bengaliTranslation: "যে ব্যক্তি জীবনের শেষে আমাকেই স্মরণ করে দেহত্যাগ করে, সে আমার ভাবই প্রাপ্ত হয়, এতে কোন সন্দেহ নেই।",
        explanation: "This verse emphasizes the importance of one's consciousness at the time of death, which determines one's destination in the afterlife.",
        bengaliExplanation: "এই শ্লোকটি মৃত্যুর সময় একজনের চেতনার গুরুত্ব জোর দেয়, যা পরলোকে তার গন্তব্য নির্ধারণ করে।"
      }
    ]
  },
  {
    chapter: 9,
    chapterName: "The Most Confidential Knowledge",
    chapterNameBengali: "রাজবিদ্যা-রাজগুহ্য যোগ",
    chapterDescription: "Krishna reveals the most confidential knowledge about devotion and his divine nature.",
    chapterDescriptionBengali: "কৃষ্ণ ভক্তি এবং তার দিব্য প্রকৃতি সম্পর্কে সবচেয়ে গোপনীয় জ্ঞান প্রকাশ করেন।",
    verses: [
      {
        verse: 22,
        sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmyaham",
        translation: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
        bengaliTranslation: "যারা অনন্যভাবে আমাকে চিন্তা করে আমার উপাসনা করে, সেই নিত্যযুক্তদের যোগক্ষেম আমি বহন করি।",
        explanation: "Krishna promises to personally take care of the needs of those who worship him with exclusive devotion.",
        bengaliExplanation: "কৃষ্ণ প্রতিশ্রুতি দেন যে যারা তাকে অনন্য ভক্তি সহকারে উপাসনা করেন তাদের প্রয়োজনীয়তার যত্ন তিনি ব্যক্তিগতভাবে নেবেন।"
      }
    ]
  },
  {
    chapter: 10,
    chapterName: "The Opulence of the Absolute",
    chapterNameBengali: "বিভূতি যোগ",
    chapterDescription: "Krishna describes his divine manifestations throughout the creation.",
    chapterDescriptionBengali: "কৃষ্ণ সৃষ্টি জুড়ে তার দিব্য প্রকাশ বর্ণনা করেন।",
    verses: [
      {
        verse: 41,
        sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा। तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥",
        transliteration: "yad yad vibhūtimat sattvaṁ śhrīmad ūrjitam eva vā tat tad evāvagachchha tvaṁ mama tejo 'nśha-sambhavam",
        translation: "Know that all opulent, beautiful and glorious creations spring from but a spark of My splendor.",
        bengaliTranslation: "যে কোন বিভূতিমান, শ্রীমান বা ঐশ্বর্যশালী সত্তা দেখ, তা আমার তেজের একটি অংশ থেকে উদ্ভূত জেনো।",
        explanation: "Krishna explains that all magnificent things in the world represent just a fraction of his divine glory.",
        bengaliExplanation: "কৃষ্ণ ব্যাখ্যা করেন যে পৃথিবীর সমস্ত মহিমাময় জিনিস তার দিব্য গৌরবের মাত্র একটি অংশ প্রতিনিধিত্ব করে।"
      }
    ]
  },
  {
    chapter: 11,
    chapterName: "The Universal Form",
    chapterNameBengali: "বিশ্বরূপ-দর্শন যোগ",
    chapterDescription: "Krishna reveals his cosmic form to Arjuna, displaying the entirety of existence within himself.",
    chapterDescriptionBengali: "কৃষ্ণ অর্জুনকে তার বিশ্বরূপ প্রদর্শন করেন, নিজের মধ্যে সমগ্র অস্তিত্বকে প্রদর্শন করেন।",
    verses: [
      {
        verse: 32,
        sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः॥",
        transliteration: "kālo 'smi loka-kṣhaya-kṛit pravṛiddho lokān samāhartum iha pravṛittaḥ ṛite 'pi tvāṁ na bhaviṣhyanti sarve ye 'vasthitāḥ pratyanīkeṣhu yodhāḥ",
        translation: "I am time, the great destroyer of the worlds, and I have come here to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.",
        bengaliTranslation: "আমি কাল, জগতের মহাবিনাশক, এবং আমি সমস্ত মানুষকে ধ্বংস করতে এসেছি। তোমাদের [পাণ্ডবদের] ব্যতীত, এখানে উভয় পক্ষের সমস্ত সৈন্য নিহত হবে।",
        explanation: "In his cosmic form, Krishna reveals himself as Time, the ultimate destroyer that devours all existence.",
        bengaliExplanation: "তার বিশ্বরূপে, কৃষ্ণ নিজেকে কাল হিসাবে প্রকাশ করেন, পরম ধ্বংসকারী যা সমস্ত অস্তিত্ব গ্রাস করে।"
      }
    ]
  },
  {
    chapter: 12,
    chapterName: "Devotional Service",
    chapterNameBengali: "ভক্তি যোগ",
    chapterDescription: "Krishna explains the superiority of devotional service over other spiritual practices.",
    chapterDescriptionBengali: "কৃষ্ণ অন্যান্য আধ্যাত্মিক অনুশীলনের তুলনায় ভক্তি সেবার শ্রেষ্ঠত্ব ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 13,
        sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
        transliteration: "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
        translation: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant...",
        bengaliTranslation: "যে কোনো প্রাণীর প্রতি বিদ্বেষ পোষণ করে না, বরং সকলের বন্ধু ও করুণাময়, মমতাহীন, অহংকারশূন্য, সুখ-দুঃখে সমভাবাপন্ন এবং ক্ষমাশীল...",
        explanation: "This verse begins the description of a devotee's qualities, emphasizing freedom from envy, kindness to all, humility, equanimity, and forgiveness.",
        bengaliExplanation: "এই শ্লোকটি একজন ভক্তের গুণাবলীর বর্ণনা শুরু করে, ঈর্ষামুক্তি, সবার প্রতি দয়া, বিনয়, সমতা এবং ক্ষমার উপর জোর দেয়।"
      }
    ]
  },
  {
    chapter: 13,
    chapterName: "Nature, the Enjoyer and Consciousness",
    chapterNameBengali: "ক্ষেত্র-ক্ষেত্রজ্ঞ-বিভাগ যোগ",
    chapterDescription: "Krishna explains the difference between the body (field) and the knower of the body (soul).",
    chapterDescriptionBengali: "কৃষ্ণ শরীর (ক্ষেত্র) এবং শরীরের জ্ঞাতা (আত্মা) এর মধ্যে পার্থক্য ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 8,
        sanskrit: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः॥",
        transliteration: "amānitvam adambhitvam ahinsā kṣhāntir ārjavam āchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ",
        translation: "Humility, pridelessness, nonviolence, tolerance, simplicity, approaching a genuine spiritual master, cleanliness, steadiness and self-control...",
        bengaliTranslation: "অভিমানশূন্যতা, দম্ভহীনতা, অহিংসা, সহিষ্ণুতা, সরলতা, প্রকৃত আচার্যের কাছে গমন, পবিত্রতা, স্থিরতা এবং আত্মসংযম...",
        explanation: "This verse begins a list of qualities that constitute true knowledge, starting with humility and ending with self-control.",
        bengaliExplanation: "এই শ্লোকটি প্রকৃত জ্ঞান গঠনকারী গুণাবলীর একটি তালিকা শুরু করে, বিনয় দিয়ে শুরু করে আত্মসংযম দিয়ে শেষ করে।"
      }
    ]
  },
  {
    chapter: 14,
    chapterName: "The Three Modes of Material Nature",
    chapterNameBengali: "গুণত্রয়-বিভাগ যোগ",
    chapterDescription: "Krishna explains the three modes of material nature (goodness, passion, ignorance) and their effects.",
    chapterDescriptionBengali: "কৃষ্ণ প্রকৃতির তিন গুণ (সত্ত্ব, রজঃ, তমঃ) এবং তাদের প্রভাব ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 26,
        sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥",
        transliteration: "māṁ cha yo 'vyabhichāreṇa bhakti-yogena sevate sa guṇān samatītyaitān brahma-bhūyāya kalpate",
        translation: "One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman.",
        bengaliTranslation: "যে ব্যক্তি অব্যভিচারী ভক্তিযোগ দ্বারা আমার সেবা করে, সে এই প্রাকৃতিক গুণগুলি অতিক্রম করে ব্রহ্মভাব প্রাপ্ত হয়।",
        explanation: "This verse explains how devotional service to Krishna helps one transcend the three modes of material nature.",
        bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে কিভাবে কৃষ্ণের প্রতি ভক্তিমূলক সেবা একজনকে প্রকৃতির তিন গুণকে অতিক্রম করতে সাহায্য করে।"
      }
    ]
  },
  {
    chapter: 15,
    chapterName: "The Yoga of the Supreme Person",
    chapterNameBengali: "পুরুষোত্তম-যোগ",
    chapterDescription: "Krishna describes the ultimate reality as a cosmic tree and his own supreme position.",
    chapterDescriptionBengali: "কৃষ্ণ চরম বাস্তবতাকে একটি বিশ্ব বৃক্ষ হিসাবে এবং তার নিজের সর্বোচ্চ অবস্থান বর্ণনা করেন।",
    verses: [
      {
        verse: 15,
        sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
        transliteration: "sarvasya chāhaṁ hṛidi sanniviṣhṭo mattaḥ smṛitir jñānam apohanaṁ cha vedaiśh cha sarvair aham eva vedyo vedānta-kṛid veda-vid eva chāham",
        translation: "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedānta, and I am the knower of the Vedas.",
        bengaliTranslation: "আমি সকলের হৃদয়ে অবস্থিত, আমা থেকেই স্মৃতি, জ্ঞান ও বিস্মৃতি আসে। সমস্ত বেদ দ্বারা আমাকেই জানতে হয়। আমিই বেদান্তকার এবং বেদবিদ।",
        explanation: "Krishna explains his presence in every living being's heart and his role as the source of memory, knowledge, and forgetfulness.",
        bengaliExplanation: "কৃষ্ণ প্রত্যেক জীবের হৃদয়ে তার উপস্থিতি এবং স্মৃতি, জ্ঞান ও বিস্মৃতির উৎস হিসাবে তার ভূমিকা ব্যাখ্যা করেন।"
      }
    ]
  },
  {
    chapter: 16,
    chapterName: "The Divine and Demoniac Natures",
    chapterNameBengali: "দৈবাসুর-সম্পদ্-বিভাগ যোগ",
    chapterDescription: "Krishna distinguishes between divine and demoniac qualities in human beings.",
    chapterDescriptionBengali: "কৃষ্ণ মানুষের মধ্যে দৈবী ও আসুরিক গুণাবলীর মধ্যে পার্থক্য করেন।",
    verses: [
      {
        verse: 1,
        sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
        transliteration: "abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ dānaṁ damaśh cha yajñaśh cha svādhyāyas tapa ārjavam",
        translation: "Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, and simplicity...",
        bengaliTranslation: "অভয়, সত্ত্বশুদ্ধি, জ্ঞানযোগে অবস্থান, দান, দম, যজ্ঞ, স্বাধ্যায়, তপস্যা এবং সরলতা...",
        explanation: "This begins a list of divine qualities that characterize those with spiritual tendencies.",
        bengaliExplanation: "এটি দৈবিক গুণাবলীর একটি তালিকা শুরু করে যা আধ্যাত্মিক প্রবণতাযুক্ত ব্যক্তিদের বৈশিষ্ট্য।"
      }
    ]
  },
  {
    chapter: 17,
    chapterName: "The Divisions of Faith",
    chapterNameBengali: "শ্রদ্ধাত্রয়-বিভাগ যোগ",
    chapterDescription: "Krishna describes different types of faith according to the three modes of nature.",
    chapterDescriptionBengali: "কৃষ্ণ প্রকৃতির তিন গুণ অনুসারে বিভিন্ন ধরনের শ্রদ্ধা বর্ণনা করেন।",
    verses: [
      {
        verse: 3,
        sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
        transliteration: "sattvānurūpā sarvasya śhraddhā bhavati bhārata śhraddhā-mayo 'yaṁ puruṣho yo yach-chhraddhaḥ sa eva saḥ",
        translation: "According to one's existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired.",
        bengaliTranslation: "হে ভারত, প্রত্যেকের শ্রদ্ধা তার সত্ত্বের অনুরূপ হয়। মানুষ শ্রদ্ধাময়, যে যে শ্রদ্ধাযুক্ত, সে-ই সেইরূপ।",
        explanation: "This verse explains how faith follows one's nature, shaped by the three modes (gunas), and how this faith defines a person's character.",
        bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে কিভাবে শ্রদ্ধা একজনের প্রকৃতি অনুসরণ করে, তিন গুণ দ্বারা আকার নেয়, এবং কিভাবে এই শ্রদ্ধা একজন ব্যক্তির চরিত্র নির্ধারণ করে।"
      }
    ]
  },
  {
    chapter: 18,
    chapterName: "Conclusion—The Perfection of Renunciation",
    chapterNameBengali: "মোক্ষ-সন্ন্যাস যোগ",
    chapterDescription: "Krishna summarizes his teachings and explains the ultimate path to liberation.",
    chapterDescriptionBengali: "কৃষ্ণ তার শিক্ষাগুলি সংক্ষিপ্ত করেন এবং মুক্তির চূড়ান্ত পথ ব্যাখ্যা করেন।",
    verses: [
      {
        verse: 66,
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        transliteration: "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
        translation: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
        bengaliTranslation: "সমস্ত ধর্ম পরিত্যাগ করে আমার শরণাগত হও। আমি তোমাকে সমস্ত পাপ থেকে মুক্ত করব, শোক করো না।",
        explanation: "This is Krishna's ultimate instruction, often considered the essence of the entire Bhagavad Gita - surrender completely to God.",
        bengaliExplanation: "এটি কৃষ্ণের চূড়ান্ত নির্দেশ, প্রায়শই সমগ্র ভগবদ্গীতার সারমর্ম হিসাবে বিবেচিত - ঈশ্বরের কাছে সম্পূর্ণ শরণাগতি।"
      },
      {
        verse: 78,
        sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
        transliteration: "yatra yogeśhvaraḥ kṛiṣhṇo yatra pārtho dhanurdharaḥ tatra śhrīr vijayo bhūtir dhruvā nītir matir mama",
        translation: "Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.",
        bengaliTranslation: "যেখানে যোগেশ্বর কৃষ্ণ এবং যেখানে ধনুর্ধারী পার্থ, সেখানে শ্রী, বিজয়, ঐশ্বর্য ও নীতি অবশ্যই থাকবে - এটাই আমার মত।",
        explanation: "The final verse of the Gita, spoken by Sanjaya, affirms that wherever God and the devoted soul are together, there will be prosperity and victory.",
        bengaliExplanation: "গীতার শেষ শ্লোক, সঞ্জয় দ্বারা উচ্চারিত, নিশ্চিত করে যে যেখানে ঈশ্বর এবং ভক্ত আত্মা একসাথে থাকে, সেখানে সমৃদ্ধি ও বিজয় থাকবে।"
      }
    ]
  }
];

export default VersesPage;
