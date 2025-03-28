
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const keyVerses = [
  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
    bengaliTranslation: "তোমার কর্মে অধিকার আছে, কিন্তু তার ফলে নয়। কর্মফলের কারণ হয়ো না, এবং অকর্মে আসক্তও হয়ো না।",
    explanation: "This verse teaches the essence of detached action. Do your duty without being attached to the results. This detachment from outcomes is key to finding peace in action.",
    bengaliExplanation: "এই শ্লোকটি অনাসক্ত কর্মের সারমর্ম শেখায়। ফলের আসক্তি ছাড়াই নিজের কর্তব্য পালন করো। এই ফলাফল থেকে বিচ্ছিন্নতা কর্মের মধ্যে শান্তি খুঁজে পাওয়ার চাবিকাঠি।"
  },
  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
    translation: "Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest myself. For the protection of the good, for the destruction of the wicked, and for the establishment of righteousness, I appear in every age.",
    bengaliTranslation: "হে ভারত, যখনই ধর্মের হানি এবং অধর্মের উত্থান হয়, তখনই আমি নিজেকে সৃষ্টি করি। সাধুদের রক্ষা, দুষ্টদের বিনাশ এবং ধর্মের পুনঃস্থাপনের জন্য আমি যুগে যুগে আবির্ভূত হই।",
    explanation: "Krishna reveals his divine purpose of appearing in the world whenever there is a decline in dharma (righteousness). This verse indicates the recurring cycle of divine intervention in worldly affairs.",
    bengaliExplanation: "কৃষ্ণ যখনই ধর্মের অবনতি হয় তখন পৃথিবীতে আবির্ভূত হওয়ার তার দিব্য উদ্দেশ্য প্রকাশ করেন। এই শ্লোকটি বিশ্ব বিষয়ে ঐশ্বরিক হস্তক্ষেপের পুনরাবৃত্ত চক্রকে নির্দেশ করে।"
  },
  {
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmyaham",
    translation: "For those who worship Me exclusively with unwavering devotion, contemplating no other, I provide what they lack and preserve what they already possess.",
    bengaliTranslation: "যারা অনন্যভাবে আমাকে চিন্তা করে আমার উপাসনা করে, সেই নিত্যযুক্তদের যোগক্ষেম আমি বহন করি।",
    explanation: "Krishna promises to take personal responsibility for the wellbeing of those who worship him with undivided attention and complete devotion.",
    bengaliExplanation: "কৃষ্ণ প্রতিশ্রুতি দেন যে যারা অবিভক্ত মনোযোগ এবং পূর্ণ ভক্তি সহকারে তাকে উপাসনা করেন তাদের কল্যাণের জন্য তিনি ব্যক্তিগত দায়িত্ব নেবেন।"
  },
  {
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
    translation: "Abandon all varieties of dharma and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not fear.",
    bengaliTranslation: "সমস্ত ধর্ম পরিত্যাগ করে আমার শরণাগত হও। আমি তোমাকে সমস্ত পাপ থেকে মুক্ত করব, শোক করো না।",
    explanation: "One of the most important verses in the Gita, this is Krishna's ultimate instruction to Arjuna – complete surrender to the Divine is the highest spiritual path.",
    bengaliExplanation: "গীতার সবচেয়ে গুরুত্বপূর্ণ শ্লোকগুলির মধ্যে একটি, এটি অর্জুনের প্রতি কৃষ্ণের চূড়ান্ত নির্দেশ - দিব্যের কাছে পূর্ণ সমর্পণই সর্বোচ্চ আধ্যাত্মিক পথ।"
  },
];

const KeyVerses = () => {
  const [activeVerse, setActiveVerse] = useState(0);
  const [language, setLanguage] = useState<'english' | 'bengali'>('english');

  const nextVerse = () => {
    setActiveVerse((prev) => (prev === keyVerses.length - 1 ? 0 : prev + 1));
  };

  const prevVerse = () => {
    setActiveVerse((prev) => (prev === 0 ? keyVerses.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-primary/10 text-primary">
            {language === 'english' ? 'Divine Words' : 'দিব্য বাণী'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'english' ? 'Key Verses from the Gita' : 'গীতা থেকে মূল শ্লোক'}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {language === 'english' 
              ? 'These selected verses represent some of the most profound and widely quoted teachings from the Bhagavad Gita, highlighting its core messages.'
              : 'এই নির্বাচিত শ্লোকগুলি ভগবদ্গীতা থেকে কিছু সবচেয়ে গভীর এবং ব্যাপকভাবে উদ্ধৃত শিক্ষা প্রতিনিধিত্ব করে, এর মূল বার্তাগুলি হাইলাইট করে।'}
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 bg-muted/50 rounded-full p-1">
              <button 
                onClick={() => setLanguage('english')} 
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-colors",
                  language === 'english' ? "bg-background shadow" : "hover:bg-muted"
                )}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('bengali')} 
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-colors",
                  language === 'bengali' ? "bg-background shadow" : "hover:bg-muted"
                )}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
          <Quote size={48} className="absolute text-primary/10 top-8 left-8" />
          
          <div className="relative z-10">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                  {language === 'english' 
                    ? `Chapter ${keyVerses[activeVerse].chapter}, Verse ${keyVerses[activeVerse].verse}`
                    : `অধ্যায় ${keyVerses[activeVerse].chapter}, শ্লোক ${keyVerses[activeVerse].verse}`}
                </span>
                <div className="mt-4 text-xl md:text-2xl text-primary font-medium font-serif leading-relaxed">
                  {keyVerses[activeVerse].sanskrit}
                </div>
                <div className="mt-3 text-sm text-foreground/70 italic">
                  {keyVerses[activeVerse].transliteration}
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-lg md:text-xl mb-4">
                  "{language === 'english' 
                    ? keyVerses[activeVerse].translation 
                    : keyVerses[activeVerse].bengaliTranslation}"
                </div>
                <p className="text-foreground/80">
                  {language === 'english' 
                    ? keyVerses[activeVerse].explanation 
                    : keyVerses[activeVerse].bengaliExplanation}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevVerse} 
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              aria-label="Previous verse"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {keyVerses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVerse(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    activeVerse === index ? "bg-primary w-4" : "bg-primary/30"
                  )}
                  aria-label={`Go to verse ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextVerse} 
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              aria-label="Next verse"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyVerses;
