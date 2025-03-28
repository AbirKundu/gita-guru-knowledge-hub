
import React, { useEffect, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, BookOpen, Heart, Brain, Compass, Activity, Infinity, Sparkles, Scale } from 'lucide-react';
import { LanguageContext } from '@/providers/LanguageProvider';

// Interface for the ConceptCard component
interface ConceptCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  chapters: string;
  mainVerse: string;
  translation: string;
  index?: number;
}

const ConceptCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  details, 
  chapters, 
  mainVerse, 
  translation, 
  index = 0 
}: ConceptCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 transition-transform duration-300 group-hover:scale-110 ${color}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Key Points:</h4>
            <ul className="list-disc pl-5 space-y-1 text-foreground/70">
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Where to find:</h4>
            <p className="text-foreground/70">{chapters}</p>
          </div>
          
          <div className="pt-2 border-t border-border">
            <p className="italic text-xs text-foreground/60 mb-1">{mainVerse}</p>
            <p className="text-sm text-foreground/70">{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhilosophyPage = () => {
  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'Philosophy | GitaGuru' : 'দর্শন | গীতাগুরু';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'english' ? 'Philosophical Concepts' : 'দার্শনিক ধারণাসমূহ'}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            {language === 'english' 
              ? 'The Bhagavad Gita presents profound philosophical ideas that have influenced spiritual seekers for millennia. Explore the core teachings below.'
              : 'ভগবদ্গীতা গভীর দার্শনিক ধারণা উপস্থাপন করে যা সহস্রাব্দীর জন্য আধ্যাত্মিক সাধকদের প্রভাবিত করেছে। নিচে মূল শিক্ষাগুলি অন্বেষণ করুন।'}
          </p>

          <Tabs defaultValue="paths" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="paths">
                {language === 'english' ? 'Paths of Yoga' : 'যোগের পথসমূহ'}
              </TabsTrigger>
              <TabsTrigger value="fundamental">
                {language === 'english' ? 'Fundamental Concepts' : 'মৌলিক ধারণাসমূহ'}
              </TabsTrigger>
              <TabsTrigger value="gunas">
                {language === 'english' ? 'The Three Gunas' : 'তিন গুণ'}
              </TabsTrigger>
              <TabsTrigger value="dharma">
                {language === 'english' ? 'Dharma & Ethics' : 'ধর্ম ও নীতিশাস্ত্র'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="paths" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title={language === 'english' ? "Karma Yoga" : "কর্ম যোগ"}
                  description={language === 'english' 
                    ? "The path of selfless action where one performs duties without attachment to results. Krishna teaches that actions performed without desire for personal gain purify the mind and lead to liberation."
                    : "নিঃস্বার্থ কর্মের পথ যেখানে একজন ব্যক্তি ফলাফলের প্রতি আসক্তি ছাড়াই কর্তব্য পালন করে। কৃষ্ণ শেখান যে ব্যক্তিগত লাভের ইচ্ছা ছাড়া সম্পাদিত কর্ম মনকে শুদ্ধ করে এবং মুক্তির দিকে নিয়ে যায়।"}
                  icon={<Activity size={28} />}
                  color="bg-blue-50 text-blue-600"
                  details={language === 'english' 
                    ? [
                      "Act without attachment to the fruits of action (Chapter 2, Verse 47)",
                      "Perform duty for duty's sake, not for reward",
                      "Even enlightened beings should act to set an example",
                      "Actions bind when performed with selfish motives",
                      "Perfect action is performed with equanimity, without concern for success or failure"
                    ]
                    : [
                      "ফলের প্রতি আসক্তি ছাড়াই কর্ম করুন (অধ্যায় ২, শ্লোক ৪৭)",
                      "পুরস্কারের জন্য নয়, কর্তব্যের জন্যই কর্তব্য পালন করুন",
                      "এমনকি জ্ঞানী ব্যক্তিদেরও উদাহরণ স্থাপন করার জন্য কর্ম করা উচিত",
                      "স্বার্থপর উদ্দেশ্যে সম্পাদিত কর্ম বন্ধন সৃষ্টি করে",
                      "পরিপূর্ণ কর্ম সাফল্য বা ব্যর্থতার চিন্তা ছাড়াই সমতা সহকারে সম্পাদিত হয়"
                    ]}
                  chapters={language === 'english' ? "Primarily discussed in Chapters 2, 3, and 5" : "প্রধানত অধ্যায় ২, ৩, এবং ৫-এ আলোচিত"}
                  mainVerse="karmaṇy-evādhikāras te mā phaleṣhu kadāchana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi"
                  translation={language === 'english' 
                    ? "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself as the cause of the results of your activities, and never be attached to not doing your duty."
                    : "আপনার নির্ধারিত কর্তব্য পালন করার অধিকার আপনার আছে, কিন্তু আপনার কর্মের ফলের উপর আপনার অধিকার নেই। নিজেকে কখনো আপনার কর্মের ফলের কারণ হিসেবে বিবেচনা করবেন না, এবং কখনো আপনার কর্তব্য না করার প্রতি আসক্ত হবেন না।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Bhakti Yoga" : "ভক্তি যোগ"}
                  description={language === 'english' 
                    ? "The path of loving devotion to the Divine. Krishna explains that sincere devotion with love and surrender is a direct way to spiritual realization and divine grace."
                    : "ভগবানের প্রতি ভালবাসাপূর্ণ ভক্তির পথ। কৃষ্ণ ব্যাখ্যা করেন যে ভালবাসা ও সমর্পণের সাথে আন্তরিক ভক্তি আধ্যাত্মিক উপলব্ধি ও দিব্য কৃপার সরাসরি পথ।"}
                  icon={<Heart size={28} />}
                  color="bg-red-50 text-red-600"
                  details={language === 'english' 
                    ? [
                      "Loving devotion to God with complete surrender",
                      "Accessible to all regardless of background or ability",
                      "Considered by Krishna as the highest form of practice",
                      "Nine forms of devotion including listening, chanting, remembering",
                      "Culminates in complete union with the Divine"
                    ]
                    : [
                      "সম্পূর্ণ আত্মসমর্পণের সাথে ভগবানের প্রতি ভালোবাসাপূর্ণ ভক্তি",
                      "পটভূমি বা যোগ্যতা নির্বিশেষে সকলের জন্য সুলভ",
                      "কৃষ্ণের মতে সর্বোচ্চ অনুশীলনের রূপ",
                      "শ্রবণ, কীর্তন, স্মরণসহ ভক্তির নয়টি রূপ",
                      "ভগবানের সাথে সম্পূর্ণ মিলনে পরিণত হয়"
                    ]}
                  chapters={language === 'english' ? "Primarily discussed in Chapters 9, 10, 11, and 12" : "প্রধানত অধ্যায় ৯, ১০, ১১, এবং ১২-এ আলোচিত"}
                  mainVerse="man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣyasi satyaṁ te pratijāne priyo 'si me"
                  translation={language === 'english' 
                    ? "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
                    : "সর্বদা আমাকে স্মরণ করো, আমার ভক্ত হও, আমার পূজা করো এবং আমাকে প্রণাম করো। এভাবে তুমি নিশ্চিতভাবে আমার কাছে আসবে। আমি তোমাকে এই প্রতিশ্রুতি দিচ্ছি কারণ তুমি আমার অতি প্রিয় বন্ধু।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Jnana Yoga" : "জ্ঞান যোগ"}
                  description={language === 'english' 
                    ? "The path of knowledge and wisdom. Krishna explains that understanding the true nature of reality, the self, and the universe leads to liberation from the cycle of birth and death."
                    : "জ্ঞান ও প্রজ্ঞার পথ। কৃষ্ণ ব্যাখ্যা করেন যে বাস্তবতা, আত্মা এবং বিশ্বের প্রকৃত স্বরূপ বোঝা জন্ম-মৃত্যুর চক্র থেকে মুক্তির দিকে নিয়ে যায়।"}
                  icon={<BookOpen size={28} />}
                  color="bg-amber-50 text-amber-600"
                  details={language === 'english' 
                    ? [
                      "Discriminative knowledge between the real and unreal",
                      "Understanding of Atman (soul) and Brahman (ultimate reality)",
                      "Self-inquiry and philosophical investigation",
                      "Requires sharp intellect and discernment",
                      "Culminates in direct realization of one's true nature"
                    ]
                    : [
                      "বাস্তব ও অবাস্তবের মধ্যে বিবেচনামূলক জ্ঞান",
                      "আত্মন (আত্মা) এবং ব্রহ্মন (পরম সত্য) এর উপলব্ধি",
                      "আত্ম-অনুসন্ধান এবং দার্শনিক অন্বেষণ",
                      "তীক্ষ্ণ বুদ্ধি এবং বিবেচনা প্রয়োজন",
                      "নিজের সত্য স্বরূপের প্রত্যক্ষ উপলব্ধিতে পরিণত হয়"
                    ]}
                  chapters={language === 'english' ? "Primarily discussed in Chapters 2, 3, 4, and 13" : "প্রধানত অধ্যায় ২, ৩, ৪, এবং ১৩-এ আলোচিত"}
                  mainVerse="jñānaṁ te 'haṁ sa-vijñānam idaṁ vakṣyāmy aśeṣataḥ yaj jñātvā neha bhūyo 'nyaj jñātavyam avaśiṣyate"
                  translation={language === 'english' 
                    ? "I shall now declare unto you in full this knowledge both phenomenal and numinous, by knowing which nothing further shall remain for you to know."
                    : "আমি এখন তোমাকে সম্পূর্ণরূপে এই জ্ঞান ঘটনাগত এবং অলৌকিক উভয়ই প্রকাশ করব, যা জানার পর তোমার জানার মতো আর কিছু অবশিষ্ট থাকবে না।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Dhyana Yoga" : "ধ্যান যোগ"}
                  description={language === 'english' 
                    ? "The path of meditation and concentration. Krishna provides detailed instructions on controlling the mind and focusing consciousness on the Divine through various meditation techniques."
                    : "ধ্যান ও একাগ্রতার পথ। কৃষ্ণ বিভিন্ন ধ্যান কৌশলের মাধ্যমে মনকে নিয়ন্ত্রণ করা এবং ভগবানের উপর চেতনা কেন্দ্রীভূত করার বিস্তারিত নির্দেশাবলী প্রদান করেন।"}
                  icon={<Compass size={28} />}
                  color="bg-green-50 text-green-600"
                  details={language === 'english' 
                    ? [
                      "Systematic practice of concentration and meditation",
                      "Control of mind, senses, and breath",
                      "Establishment in equanimity and mental stillness",
                      "Progressive stages from concentration to meditation to samadhi",
                      "Practical techniques for steady abidance in the self"
                    ]
                    : [
                      "একাগ্রতা ও ধ্যানের নিয়মিত অনুশীলন",
                      "মন, ইন্দ্রিয় ও প্রাণের নিয়ন্ত্রণ",
                      "সমতা এবং মানসিক স্থিরতায় প্রতিষ্ঠা",
                      "একাগ্রতা থেকে ধ্যান এবং সমাধি পর্যন্ত ক্রমবর্ধমান পর্যায়",
                      "আত্মায় স্থিরভাবে অবস্থানের জন্য ব্যবহারিক কৌশল"
                    ]}
                  chapters={language === 'english' ? "Primarily discussed in Chapter 6" : "প্রধানত অধ্যায় ৬-এ আলোচিত"}
                  mainVerse="yuñjann evaṁ sadātmānaṁ yogī niyata-mānasaḥ śāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigacchati"
                  translation={language === 'english' 
                    ? "The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with Me, and thus he is liberated from all reactions to past deeds."
                    : "যে যোগীর মন আমাতে স্থির, সে সত্যিই দিব্য আনন্দের সর্বোচ্চ পূর্ণতা লাভ করে। সে রজোগুণের ঊর্ধ্বে, সে আমার সঙ্গে তার গুণগত অভিন্নতা উপলব্ধি করে, এবং এভাবে সে অতীত কর্মের সমস্ত প্রতিক্রিয়া থেকে মুক্ত হয়।"}
                />
              </div>
            </TabsContent>

            <TabsContent value="fundamental" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title={language === 'english' ? "Atman - The Self" : "আত্মন - আত্মা"}
                  description={language === 'english' 
                    ? "The eternal, imperishable soul that is distinct from the physical body and mind. Krishna teaches that the true self (Atman) is never born and never dies."
                    : "শারীরিক দেহ ও মন থেকে পৃথক চিরন্তন, অবিনাশী আত্মা। কৃষ্ণ শেখান যে প্রকৃত আত্মা (আত্মন) কখনও জন্মায় না এবং কখনও মরে না।"}
                  icon={<Infinity size={28} />}
                  color="bg-violet-50 text-violet-600"
                  details={language === 'english' 
                    ? [
                      "Eternal, indestructible, and unchanging",
                      "Neither born nor does it ever die",
                      "Cannot be cut, burned, wetted, or dried",
                      "The witness consciousness behind all experiences",
                      "Identical to Brahman (absolute reality) in essence"
                    ]
                    : [
                      "চিরন্তন, অবিনাশী এবং অপরিবর্তনীয়",
                      "জন্মায় না, মরেও না কখনও",
                      "কাটা, পোড়ানো, ভেজানো বা শুকানো যায় না",
                      "সমস্ত অভিজ্ঞতার পিছনে সাক্ষী চেতনা",
                      "সারমর্মে ব্রহ্মের (পরম সত্য) সঙ্গে অভিন্ন"
                    ]}
                  chapters={language === 'english' ? "Primarily discussed in Chapter 2" : "প্রধানত অধ্যায় ২-এ আলোচিত"}
                  mainVerse="na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre"
                  translation={language === 'english' 
                    ? "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."
                    : "আত্মার কোনো সময়েই জন্ম বা মৃত্যু নেই। এটি উৎপন্ন হয়নি, উৎপন্ন হয় না, এবং উৎপন্ন হবে না। এটি অজন্মা, চিরন্তন, চিরকাল বিদ্যমান এবং আদিম। দেহ বিনষ্ট হলেও এটি বিনষ্ট হয় না।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Brahman - Ultimate Reality" : "ব্রহ্মন - পরম সত্য"}
                  description={language === 'english' 
                    ? "The absolute, ultimate reality that pervades everything. It is both transcendent (beyond the universe) and immanent (present throughout creation)."
                    : "পরম সত্য যা সবকিছু ব্যাপ্ত করে আছে। এটি উভয়ই অতিক্রান্ত (বিশ্বের ঊর্ধ্বে) এবং অন্তর্নিহিত (সৃষ্টি জুড়ে বিদ্যমান)।"}
                  icon={<Sparkles size={28} />}
                  color="bg-indigo-50 text-indigo-600"
                  details={language === 'english' 
                    ? [
                      "The supreme cosmic principle, ground of all being",
                      "Both with form (saguna) and without form (nirguna)",
                      "Both transcendent beyond creation and immanent within it",
                      "The source and substance of everything that exists",
                      "Realized through spiritual practice and divine grace"
                    ]
                    : [
                      "সর্বোচ্চ বিশ্বীয় নীতি, সমস্ত অস্তিত্বের ভিত্তি",
                      "উভয়ই আকারযুক্ত (সগুণ) এবং আকারহীন (নির্গুণ)",
                      "সৃষ্টির ঊর্ধ্বে অতিক্রান্ত এবং তার মধ্যে অন্তর্নিহিত",
                      "যা কিছু বিদ্যমান তার উৎস ও সারবস্তু",
                      "আধ্যাত্মিক অনুশীলন ও দিব্য কৃপার মাধ্যমে উপলব্ধ"
                    ]}
                  chapters={language === 'english' ? "Discussed throughout, especially in Chapters 7, 8, and 13" : "সর্বত্র আলোচিত, বিশেষ করে অধ্যায় ৭, ৮, এবং ১৩-এ"}
                  mainVerse="brahmaṇo hi pratiṣṭhāham amṛtasyāvyayasya ca śāśvatasya ca dharmasya sukhasyaikāntikasya ca"
                  translation={language === 'english' 
                    ? "And I am the basis of the impersonal Brahman, which is immortal, imperishable and eternal and is the constitutional position of ultimate happiness."
                    : "এবং আমি নিরাকার ব্রহ্মের ভিত্তি, যা অমর, অবিনাশী এবং চিরন্তন এবং পরম সুখের সাংবিধানিক অবস্থান।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Maya - Cosmic Illusion" : "মায়া - মহাবিশ্বীয় মিথ্যা"}
                  description={language === 'english' 
                    ? "The principle of divine illusion that creates the appearance of multiplicity and separation. Maya causes beings to misidentify with the body and mind rather than their true self."
                    : "দিব্য মিথ্যার নীতি যা বহুত্ব এবং বিচ্ছিন্নতার প্রকাশ সৃষ্টি করে। মায়া প্রাণীদের তাদের প্রকৃত আত্মার পরিবর্তে দেহ ও মনের সাথে ভুল পরিচয় সৃষ্টি করে।"}
                  icon={<Brain size={28} />}
                  color="bg-cyan-50 text-cyan-600"
                  details={language === 'english' 
                    ? [
                      "Divine power that veils the true nature of reality",
                      "Creates the appearance of multiplicity in the one reality",
                      "Not mere illusion, but a real power with unreal effects",
                      "Causes beings to identify with body, mind, and ego",
                      "Transcended through spiritual practice and divine grace"
                    ]
                    : [
                      "দিব্য শক্তি যা বাস্তবতার প্রকৃত স্বরূপকে আবৃত করে",
                      "এক বাস্তবতার মধ্যে বহুত্বের প্রকাশ সৃষ্টি করে",
                      "শুধুমাত্র মিথ্যা নয়, বরং অবাস্তব প্রভাবযুক্ত একটি বাস্তব শক্তি",
                      "প্রাণীদের দেহ, মন, এবং অহংকারের সাথে পরিচয় স্থাপন করায়",
                      "আধ্যাত্মিক অনুশীলন ও দিব্য কৃপার মাধ্যমে অতিক্রম করা যায়"
                    ]}
                  chapters={language === 'english' ? "Discussed in Chapters 7 and 14" : "অধ্যায় ৭ এবং ১৪-এ আলোচিত"}
                  mainVerse="daivī hy eṣā guṇa-mayī mama māyā duratyayā mām eva ye prapadyante māyām etāṁ taranti te"
                  translation={language === 'english' 
                    ? "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it."
                    : "আমার এই দিব্য শক্তি, যা বস্তুজগতের তিন গুণ নিয়ে গঠিত, তা অতিক্রম করা কঠিন। কিন্তু যারা আমার কাছে আত্মসমর্পণ করেছে তারা সহজেই এর পরে যেতে পারে।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Samsara - Cycle of Rebirth" : "সংসার - পুনর্জন্মের চক্র"}
                  description={language === 'english' 
                    ? "The continuous cycle of birth, death, and rebirth determined by one's karma. Krishna teaches how to transcend this cycle and attain moksha (liberation)."
                    : "কর্ম দ্বারা নির্ধারিত জন্ম, মৃত্যু এবং পুনর্জন্মের অবিরাম চক্র। কৃষ্ণ শেখান কিভাবে এই চক্র অতিক্রম করে মোক্ষ (মুক্তি) লাভ করতে হয়।"}
                  icon={<Book size={28} />}
                  color="bg-orange-50 text-orange-600"
                  details={language === 'english' 
                    ? [
                      "The continuous cycle of birth, death, and rebirth",
                      "Driven by karma and perpetuated by desire and ignorance",
                      "Characterized by suffering due to attachment and aversion",
                      "Each soul migrates according to the quality of actions",
                      "Transcended through spiritual realization and divine grace"
                    ]
                    : [
                      "জন্ম, মৃত্যু, এবং পুনর্জন্মের অবিরাম চক্র",
                      "কর্ম দ্বারা চালিত এবং বাসনা ও অজ্ঞানতা দ্বারা চিরস্থায়ী",
                      "আসক্তি ও বিরাগ কারণে দুঃখ দ্বারা চিহ্নিত",
                      "প্রতিটি আত্মা কর্মের গুণ অনুযায়ী স্থানান্তরিত হয়",
                      "আধ্যাত্মিক উপলব্ধি ও দিব্য কৃপার মাধ্যমে অতিক্রম করা যায়"
                    ]}
                  chapters={language === 'english' ? "Discussed in Chapters 2, 8, and 9" : "অধ্যায় ২, ৮, এবং ৯-এ আলোচিত"}
                  mainVerse="ābrahmabhuvanāl lokāḥ punar āvartino 'rjuna mām upetya tu kaunteya punar janma na vidyate"
                  translation={language === 'english' 
                    ? "From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode, O son of Kunti, never takes birth again."
                    : "বস্তুজগতের সর্বোচ্চ গ্রহ থেকে নিম্নতম পর্যন্ত, সবই দুঃখের স্থান যেখানে পুনরাবৃত্ত জন্ম ও মৃত্যু ঘটে। কিন্তু যে আমার ধাম পৌঁছে, হে কুন্তীপুত্র, সে আর কখনও জন্মগ্রহণ করে না।"}
                />
              </div>
            </TabsContent>

            <TabsContent value="gunas" className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'english' ? 'The Three Gunas (Modes of Nature)' : 'তিন গুণ (প্রকৃতির মোড)'}
                </h3>
                <p className="text-foreground/80 mb-6">
                  {language === 'english' 
                    ? 'According to the Bhagavad Gita, all of material existence is composed of three fundamental qualities or energies called gunas. Every person, object, and phenomenon in nature contains a unique combination of these qualities, which determine their behavior and characteristics.'
                    : 'ভগবদ্গীতা অনুসারে, সমস্ত বস্তুগত অস্তিত্ব তিনটি মৌলিক গুণ বা শক্তি দ্বারা গঠিত যাকে গুণ বলা হয়। প্রকৃতিতে প্রতিটি ব্যক্তি, বস্তু এবং ঘটনা এই গুণগুলির একটি অনন্য সংমিশ্রণ ধারণ করে, যা তাদের আচরণ ও বৈশিষ্ট্য নির্ধারণ করে।'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-amber-500/10 p-5">
                    <h3 className="text-xl font-semibold text-amber-700 mb-2">
                      {language === 'english' ? 'Sattva (Goodness)' : 'সত্ত্ব (ভালো)'}
                    </h3>
                    <p className="text-foreground/90">
                      {language === 'english' 
                        ? 'The mode of purity, knowledge, harmony, and balance.'
                        : 'পবিত্রতা, জ্ঞান, সদ্ভাব এবং ভারসাম্যের মোড।'}
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">
                      {language === 'english' ? 'Characteristics:' : 'বৈশিষ্ট্য:'}
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      {language === 'english' ? (
                        <>
                          <li>Clarity of mind and wisdom</li>
                          <li>Peacefulness and contentment</li>
                          <li>Compassion and selflessness</li>
                          <li>Harmony with nature and others</li>
                          <li>Ability to perceive higher truths</li>
                        </>
                      ) : (
                        <>
                          <li>মনের স্পষ্টতা ও প্রজ্ঞা</li>
                          <li>শান্তি ও সন্তুষ্টি</li>
                          <li>করুণা ও নিঃস্বার্থপরতা</li>
                          <li>প্রকৃতি ও অন্যদের সাথে সদ্ভাব</li>
                          <li>উচ্চতর সত্য অনুধাবন করার ক্ষমতা</li>
                        </>
                      )}
                    </ul>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Effects:' : 'প্রভাব:'}
                    </h4>
                    <p className="text-foreground/80">
                      {language === 'english' 
                        ? 'Leads to happiness, knowledge, and spiritual elevation. Those dominated by sattva naturally gravitate toward spiritual practices, vegetarian diet, and peaceful actions.'
                        : 'সুখ, জ্ঞান এবং আধ্যাত্মিক উন্নতির দিকে নিয়ে যায়। সত্ত্ব দ্বারা প্রভাবিত ব্যক্তিরা স্বাভাবিকভাবেই আধ্যাত্মিক অনুশীলন, নিরামিষ খাদ্য এবং শান্তিপূর্ণ কার্যকলাপের দিকে ঝুঁকে পড়ে।'}
                    </p>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Relevant Verse:' : 'প্রাসঙ্গিক শ্লোক:'}
                    </h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-amber-200 pl-4">
                      {language === 'english' 
                        ? '"From sattva, knowledge arises; from rajas, greed; from tamas, negligence, delusion and ignorance arise." (Chapter 14, Verse 17)'
                        : '"সত্ত্ব থেকে জ্ঞান উদ্ভূত হয়; রজঃ থেকে লোভ; তমঃ থেকে অবহেলা, বিভ্রান্তি এবং অজ্ঞানতা উদ্ভূত হয়।" (অধ্যায় ১৪, শ্লোক ১৭)'}
                    </blockquote>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-red-500/10 p-5">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">
                      {language === 'english' ? 'Rajas (Passion)' : 'রজঃ (আবেগ)'}
                    </h3>
                    <p className="text-foreground/90">
                      {language === 'english' 
                        ? 'The mode of energy, desire, action, and struggle.'
                        : 'শক্তি, বাসনা, কর্ম, এবং সংগ্রামের মোড।'}
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">
                      {language === 'english' ? 'Characteristics:' : 'বৈশিষ্ট্য:'}
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      {language === 'english' ? (
                        <>
                          <li>Intense activity and ambition</li>
                          <li>Attachment to results of action</li>
                          <li>Desire for recognition and success</li>
                          <li>Competitive nature and restlessness</li>
                          <li>Emotional turbulence and anxiety</li>
                        </>
                      ) : (
                        <>
                          <li>তীব্র কর্মতৎপরতা ও উচ্চাকাঙ্ক্ষা</li>
                          <li>কর্মের ফলাফলে আসক্তি</li>
                          <li>স্বীকৃতি ও সাফল্যের আকাঙ্ক্ষা</li>
                          <li>প্রতিযোগিতামূলক প্রকৃতি ও অস্থিরতা</li>
                          <li>আবেগের বিক্ষোভ ও উদ্বেগ</li>
                        </>
                      )}
                    </ul>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Effects:' : 'প্রভাব:'}
                    </h4>
                    <p className="text-foreground/80">
                      {language === 'english' 
                        ? 'Leads to action, productivity, but also stress and anxiety. Those dominated by rajas are driven to achieve, accumulate wealth, and gain status, but may struggle with discontent.'
                        : 'কর্ম, উৎপাদনশীলতার দিকে নিয়ে যায়, কিন্তু চাপ ও উদ্বেগও সৃষ্টি করে। রজঃ দ্বারা প্রভাবিত ব্যক্তিরা সাফল্য অর্জন, সম্পদ সঞ্চয়, এবং মর্যাদা অর্জনে চালিত হয়, কিন্তু অসন্তোষের সাথে সংগ্রাম করতে পারে।'}
                    </p>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Relevant Verse:' : 'প্রাসঙ্গিক শ্লোক:'}
                    </h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-red-200 pl-4">
                      {language === 'english' 
                        ? '"The mode of passion is born of unlimited desires and longings, O son of Kunti, and because of this, one is bound to material fruitive activities." (Chapter 14, Verse 7)'
                        : '"রজোগুণ অসীম বাসনা ও আকাঙ্ক্ষা থেকে জন্ম নেয়, হে কুন্তীপুত্র, এবং এর কারণে, মানুষ বস্তুবাদী ফলপ্রসূ কর্মে আবদ্ধ হয়।" (অধ্যায় ১৪, শ্লোক ৭)'}
                    </blockquote>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-slate-500/10 p-5">
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">
                      {language === 'english' ? 'Tamas (Ignorance)' : 'তমঃ (অজ্ঞানতা)'}
                    </h3>
                    <p className="text-foreground/90">
                      {language === 'english' 
                        ? 'The mode of inertia, darkness, ignorance, and delusion.'
                        : 'জড়তা, অন্ধকার, অজ্ঞানতা, এবং বিভ্রান্তির মোড।'}
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">
                      {language === 'english' ? 'Characteristics:' : 'বৈশিষ্ট্য:'}
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      {language === 'english' ? (
                        <>
                          <li>Ignorance and delusion</li>
                          <li>Laziness and procrastination</li>
                          <li>Confusion and indecision</li>
                          <li>Excessive sleep and intoxication</li>
                          <li>Destructive or negligent behavior</li>
                        </>
                      ) : (
                        <>
                          <li>অজ্ঞানতা ও বিভ্রান্তি</li>
                          <li>অলসতা ও টালবাহানা</li>
                          <li>বিভ্রান্তি ও অনিশ্চয়তা</li>
                          <li>অতিরিক্ত ঘুম ও নেশা</li>
                          <li>ধ্বংসাত্মক বা অবহেলাযুক্ত আচরণ</li>
                        </>
                      )}
                    </ul>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Effects:' : 'প্রভাব:'}
                    </h4>
                    <p className="text-foreground/80">
                      {language === 'english' 
                        ? 'Leads to ignorance, delusion, and suffering. Those dominated by tamas tend toward destructive habits, neglect responsibilities, and resist positive change.'
                        : 'অজ্ঞানতা, বিভ্রান্তি, এবং দুঃখের দিকে নিয়ে যায়। তমঃ দ্বারা প্রভাবিত ব্যক্তিরা ধ্বংসাত্মক অভ্যাসের দিকে ঝুঁকে, দায়িত্ব অবহেলা করে, এবং ইতিবাচক পরিবর্তনের বিরোধিতা করে।'}
                    </p>
                    
                    <h4 className="font-medium">
                      {language === 'english' ? 'Relevant Verse:' : 'প্রাসঙ্গিক শ্লোক:'}
                    </h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-slate-200 pl-4">
                      {language === 'english' 
                        ? '"O son of Bharata, know that the mode of darkness, born of ignorance, is the delusion of all embodied living entities. The results of this mode are madness, indolence and sleep, which bind the conditioned soul." (Chapter 14, Verse 8)'
                        : '"হে ভরতবংশীয়, জেনে রাখো যে অজ্ঞানতা থেকে জাত অন্ধকারের মোড সমস্ত দেহধারী জীবের বিভ্রান্তি। এই মোডের ফলাফল উন্মাদনা, আলস্য এবং ঘুম, যা বদ্ধ আত্মাকে আবদ্ধ করে।" (অধ্যায় ১৪, শ্লোক ৮)'}
                    </blockquote>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 mt-4">
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'english' ? 'Transcending the Gunas' : 'গুণ অতিক্রম করা'}
                </h3>
                <p className="mb-4">
                  {language === 'english' 
                    ? 'While everyone is influenced by all three gunas, Krishna teaches that spiritual progress involves gradually moving from tamas to rajas to sattva, and ultimately transcending even sattva to reach a state beyond the gunas.'
                    : 'যদিও প্রত্যেকেই তিন গুণ দ্বারা প্রভাবিত, কৃষ্ণ শেখান যে আধ্যাত্মিক উন্নতি ধীরে ধীরে তমঃ থেকে রজঃ এবং সত্ত্বে যাওয়া, এবং শেষ পর্যন্ত সত্ত্বকেও অতিক্রম করে গুণের বাইরের অবস্থায় পৌঁছানো জড়িত।'}
                </p>
                <blockquote className="italic text-foreground/80 border-l-4 border-primary/20 pl-4">
                  {language === 'english' 
                    ? '"When the embodied being is able to transcend these three modes associated with the material body, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life." (Chapter 14, Verse 20)'
                    : '"যখন দেহধারী প্রাণী বস্তুগত শরীরের সাথে সংযুক্ত এই তিন মোড অতিক্রম করতে পারে, তখন সে জন্ম, মৃত্যু, বার্ধক্য এবং তাদের কষ্ট থেকে মুক্ত হতে পারে এবং এই জীবনেও অমৃত ভোগ করতে পারে।" (অধ্যায় ১৪, শ্লোক ২০)'}
                </blockquote>
              </div>
            </TabsContent>

            <TabsContent value="dharma" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title={language === 'english' ? "Svadharma - Personal Duty" : "স্বধর্ম - ব্যক্তিগত কর্তব্য"}
                  description={language === 'english' 
                    ? "One's specific duties according to their nature, station in life, and social position. Krishna emphasizes the importance of following one's own dharma over imitating another's."
                    : "প্রকৃতি, জীবনের অবস্থান, এবং সামাজিক অবস্থান অনুযায়ী একজনের নির্দিষ্ট কর্তব্য। কৃষ্ণ অন্যের অনুকরণের চেয়ে নিজের ধর্ম অনুসরণের গুরুত্ব জোর দেন।"}
                  icon={<Scale size={28} />}
                  color="bg-emerald-50 text-emerald-600"
                  details={language === 'english' 
                    ? [
                      "Duties based on natural inclinations and social position",
                      "Better to perform one's own duty imperfectly than another's perfectly",
                      "Tied to the concept of varnashrama (social organization)",
                      "Fulfilling svadharma leads to spiritual growth",
                      "Neglecting svadharma creates social and personal disorder"
                    ]
                    : [
                      "প্রাকৃতিক প্রবণতা ও সামাজিক অবস্থানের উপর ভিত্তি করে কর্তব্য",
                      "অন্যের কর্তব্য নিখুঁতভাবে পালন করার চেয়ে নিজের কর্তব্য অপূর্ণভাবে পালন করা ভালো",
                      "বর্ণাশ্রম (সামাজিক সংগঠন) ধারণার সাথে সম্পর্কিত",
                      "স্বধর্ম পালন আধ্যাত্মিক বৃদ্ধিতে নিয়ে যায়",
                      "স্বধর্ম অবহেলা সামাজিক ও ব্যক্তিগত অশান্তি সৃষ্টি করে"
                    ]}
                  chapters={language === 'english' ? "Discussed in Chapters 2, 3, and 18" : "অধ্যায় ২, ৩, এবং ১৮-এ আলোচিত"}
                  mainVerse="śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ"
                  translation={language === 'english' 
                    ? "It is better to perform one's own duties imperfectly than to master another's duties. By fulfilling the obligations he is born with, a person never incurs sin."
                    : "অন্যের কর্তব্য পূর্ণরূপে করার চেয়ে নিজের কর্তব্য অপূর্ণরূপে করা ভালো। যে কর্তব্যের সাথে সে জন্মগ্রহণ করেছে তা পালন করে, একজন ব্যক্তি কখনও পাপ অর্জন করে না।"}
                />
                
                <ConceptCard 
                  title={language === 'english' ? "Dharmic Ethics" : "ধার্মিক নীতিশাস্ত্র"}
                  description={language === 'english' 
                    ? "The moral principles that govern righteous action. The Gita presents a complex ethical framework that considers intention, duty, universal welfare, and ultimate reality."
                    : "ধার্মিক কর্মকে নিয়ন্ত্রণ করে এমন নৈতিক নীতিমালা। গীতা একটি জটিল নৈতিক কাঠামো উপস্থাপন করে যা উদ্দেশ্য, কর্তব্য, বিশ্বকল্যাণ, এবং চূড়ান্ত বাস্তবতা বিবেচনা করে।"}
                  icon={<Book size={28} />}
                  color="bg-sky-50 text-sky-600"
                  details={language === 'english' 
                    ? [
                      "Righteousness that upholds cosmic and social order",
                      "Based on principles like non-violence, truth, and compassion",
                      "Actions judged by intention, not just consequences",
                      "Different from rigid rule-based morality",
                      "Ultimately aimed at spiritual liberation and universal welfare"
                    ]
                    : [
                      "মহাজাগতিক ও সামাজিক শৃঙ্খলা বজায় রাখে এমন ধার্মিকতা",
                      "অহিংসা, সত্য, এবং করুণার মতো নীতির উপর ভিত্তি করে",
                      "কর্মের বিচার শুধু ফলাফল নয়, উদ্দেশ্য দ্বারাও হয়",
                      "কঠোর নিয়ম-ভিত্তিক নৈতিকতা থেকে ভিন্ন",
                      "চূড়ান্তভাবে আধ্যাত্মিক মুক্তি ও বিশ্বকল্যাণের লক্ষ্যে নির্দিষ্ট"
                    ]}
                  chapters={language === 'english' ? "Discussed throughout, especially in Chapters 3, 16, and 18" : "সর্বত্র আলোচিত, বিশেষ করে অধ্যায় ৩, ১৬, এবং ১৮-এ"}
                  mainVerse="yataḥ pravṛttir bhūtānāṁ yena sarvam idaṁ tatam sva-karmaṇā tam abhyarcya siddhiṁ vindati mānavaḥ"
                  translation={language === 'english' 
                    ? "By worship of the Lord, who is the source of all beings and who is all-pervading, a man can attain perfection through performing his own work."
                    : "সমস্ত প্রাণীর উৎস এবং সর্বব্যাপী ভগবানের পূজার মাধ্যমে, একজন মানুষ তার নিজের কর্ম সম্পাদন করে পূর্ণতা অর্জন করতে পারে।"}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhilosophyPage;
