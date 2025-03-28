
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { LanguageContext } from '@/providers/LanguageProvider';
import { useContext } from 'react';

interface Verse {
  id: number;
  chapter: number;
  verseNumber: number;
  sanskrit: string;
  transliteration: string;
  englishTranslation: string;
  bengaliTranslation: string;
  englishExplanation: string;
  bengaliExplanation: string;
}

const VersesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVerses, setFilteredVerses] = useState<Verse[]>([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Filter verses based on search term
    const filtered = verses.filter(verse => {
      const searchString = `${verse.chapter}.${verse.verseNumber} ${verse.sanskrit} ${verse.transliteration} ${verse.englishTranslation} ${verse.bengaliTranslation}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
    setFilteredVerses(filtered);
  }, [searchTerm]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'Key Verses | GitaGuru' : 'মূল শ্লোক | গীতাগুরু';

    // Initialize with all verses
    setFilteredVerses(verses);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'english' ? 'Key Verses from the Bhagavad Gita' : 'ভগবদ্গীতা থেকে মূল শ্লোক'}
            </h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              {language === 'english' 
                ? 'Explore the most significant verses from each chapter of the Bhagavad Gita, representing the essence of its teachings.'
                : 'ভগবদ্গীতার প্রতিটি অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ শ্লোকগুলি অন্বেষণ করুন, যা এর শিক্ষার সারমর্ম উপস্থাপন করে।'}
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-foreground/60" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={language === 'english' ? 'Search verses by chapter, keywords...' : 'অধ্যায়, কীওয়ার্ড দ্বারা শ্লোক অনুসন্ধান করুন...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Verses List */}
          <div className="grid grid-cols-1 gap-8">
            {filteredVerses.length > 0 ? (
              filteredVerses.map(verse => (
                <div key={verse.id} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      {language === 'english' 
                        ? `Chapter ${verse.chapter}, Verse ${verse.verseNumber}`
                        : `অধ্যায় ${verse.chapter}, শ্লোক ${verse.verseNumber}`}
                    </span>
                    <div className="text-xl md:text-2xl text-primary font-medium font-serif leading-relaxed">
                      {verse.sanskrit}
                    </div>
                    <div className="mt-2 text-sm text-foreground/70 italic">
                      {verse.transliteration}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="text-lg mb-4">
                      "{language === 'english' ? verse.englishTranslation : verse.bengaliTranslation}"
                    </div>
                    <p className="text-foreground/80">
                      {language === 'english' ? verse.englishExplanation : verse.bengaliExplanation}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-foreground/70">
                  {language === 'english' 
                    ? 'No verses found matching your search.'
                    : 'আপনার অনুসন্ধানের সাথে মিলে এমন কোন শ্লোক পাওয়া যায়নি।'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Key verses from each chapter
const verses: Verse[] = [
  {
    id: 1,
    chapter: 1,
    verseNumber: 47,
    sanskrit: "एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः॥",
    transliteration: "evam uktvārjunaḥ saṅkhye rathopastha upāviśat visṛijya saśaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ",
    englishTranslation: "Having spoken thus, Arjuna, overwhelmed with grief, cast aside his bow and arrows, and sat down on the chariot, his mind in distress.",
    bengaliTranslation: "এইভাবে বলে, অর্জুন, শোকে অভিভূত হয়ে, তার ধনুক ও তীর একপাশে রেখে, রথের উপর বসে পড়লেন, তার মন বিষণ্ণ।",
    englishExplanation: "This verse marks the end of Chapter 1, showing Arjuna's complete despair. His grief paralyzes him, making him unwilling to fight the battle.",
    bengaliExplanation: "এই শ্লোকটি প্রথম অধ্যায়ের সমাপ্তি চিহ্নিত করে, অর্জুনের সম্পূর্ণ হতাশা দেখায়। তার শোক তাকে অচল করে দেয়, যা তাকে যুদ্ধ করতে অনিচ্ছুক করে তোলে।"
  },
  {
    id: 2,
    chapter: 2,
    verseNumber: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    englishTranslation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
    bengaliTranslation: "তোমার কর্মে অধিকার আছে, কিন্তু তার ফলে নয়। কর্মফলের কারণ হয়ো না, এবং অকর্মে আসক্তও হয়ো না।",
    englishExplanation: "This verse teaches the essence of detached action. Do your duty without being attached to the results. This detachment from outcomes is key to finding peace in action.",
    bengaliExplanation: "এই শ্লোকটি অনাসক্ত কর্মের সারমর্ম শেখায়। ফলের আসক্তি ছাড়াই নিজের কর্তব্য পালন করো। এই ফলাফল থেকে বিচ্ছিন্নতা কর্মের মধ্যে শান্তি খুঁজে পাওয়ার চাবিকাঠি।"
  },
  {
    id: 3,
    chapter: 3,
    verseNumber: 27,
    sanskrit: "प्रकृते: क्रियमाणानि गुणै: कर्माणि सर्वश:। अहंकारविमूढात्मा कर्ताहमिति मन्यते॥",
    transliteration: "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ ahaṅkāra-vimūḍhātmā kartāham iti manyate",
    englishTranslation: "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
    bengaliTranslation: "প্রকৃতির গুণ দ্বারা সমস্ত কার্য সম্পাদিত হয়, কিন্তু অহংকারে মোহগ্রস্ত ব্যক্তি নিজেকে কর্তা মনে করে।",
    englishExplanation: "This verse explains that all actions are actually performed by the forces of nature, but due to ego, we think we are the doers. Understanding this removes false pride.",
    bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে যে সমস্ত কর্ম আসলে প্রকৃতির শক্তি দ্বারা সম্পাদিত হয়, কিন্তু অহংকারের কারণে, আমরা মনে করি আমরাই কর্তা। এটি বুঝতে পারলে মিথ্যা অহংকার দূর হয়।"
  },
  {
    id: 4,
    chapter: 4,
    verseNumber: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
    englishTranslation: "Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest myself. For the protection of the good, for the destruction of the wicked, and for the establishment of righteousness, I appear in every age.",
    bengaliTranslation: "হে ভারত, যখনই ধর্মের হানি এবং অধর্মের উত্থান হয়, তখনই আমি নিজেকে সৃষ্টি করি। সাধুদের রক্ষা, দুষ্টদের বিনাশ এবং ধর্মের পুনঃস্থাপনের জন্য আমি যুগে যুগে আবির্ভূত হই।",
    englishExplanation: "Krishna reveals his divine purpose of appearing in the world whenever there is a decline in dharma (righteousness). This verse indicates the recurring cycle of divine intervention in worldly affairs.",
    bengaliExplanation: "কৃষ্ণ যখনই ধর্মের অবনতি হয় তখন পৃথিবীতে আবির্ভূত হওয়ার তার দিব্য উদ্দেশ্য প্রকাশ করেন। এই শ্লোকটি বিশ্ব বিষয়ে ঐশ্বরিক হস্তক্ষেপের পুনরাবৃত্ত চক্রকে নির্দেশ করে।"
  },
  {
    id: 5,
    chapter: 5,
    verseNumber: 22,
    sanskrit: "ये हि संस्पर्शजा भोगा दु:खयोनय एव ते। आद्यन्तवन्त: कौन्तेय न तेषु रमते बुध:॥",
    transliteration: "ye hi saṁsparśa-jā bhogā duḥkha-yonaya eva te ādy-antavantaḥ kaunteya na teṣu ramate budhaḥ",
    englishTranslation: "The pleasures that arise from contact with sense objects, though appearing as enjoyable, are in fact sources of misery. They have a beginning and an end, O son of Kunti, and the wise do not delight in them.",
    bengaliTranslation: "ইন্দ্রিয় বস্তুর সংস্পর্শে যে সুখ উৎপন্ন হয়, তা আনন্দদায়ক মনে হলেও আসলে দুঃখের উৎস। হে কুন্তীপুত্র, এগুলির আদি ও অন্ত আছে, তাই জ্ঞানী ব্যক্তি এগুলিতে আসক্ত হন না।",
    englishExplanation: "This verse cautions against attachment to sensory pleasures. Krishna explains that these pleasures are temporary and ultimately lead to suffering. The wise recognize this and find joy elsewhere.",
    bengaliExplanation: "এই শ্লোকটি ইন্দ্রিয় সুখে আসক্তি সম্পর্কে সতর্ক করে। কৃষ্ণ ব্যাখ্যা করেন যে এই সুখগুলি ক্ষণস্থায়ী এবং শেষ পর্যন্ত দুঃখের দিকে নিয়ে যায়। জ্ঞানী ব্যক্তিরা এটি বুঝতে পারেন এবং অন্যত্র আনন্দ খুঁজে পান।"
  },
  {
    id: 6,
    chapter: 6,
    verseNumber: 34,
    sanskrit: "चञ्चलं हि मन: कृष्ण प्रमाथि बलवद्दृढम्। तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥",
    transliteration: "chañchalaṁ hi manaḥ kṛiṣhṇa pramāthi balavad dṛiḍham tasyāhaṁ nigrahaṁ manye vāyor iva su-duṣhkaram",
    englishTranslation: "For the mind is restless, turbulent, obstinate and very strong, O Krishna, and to subdue it, I think, is more difficult than controlling the wind.",
    bengaliTranslation: "হে কৃষ্ণ, মন চঞ্চল, উত্তেজক, জেদী এবং অত্যন্ত শক্তিশালী, এবং এটিকে দমন করা, আমি মনে করি, বাতাসকে নিয়ন্ত্রণ করার চেয়েও বেশি কঠিন।",
    englishExplanation: "In this verse, Arjuna expresses the difficulty of controlling the mind. Krishna acknowledges this challenge but goes on to explain that with practice and detachment, the mind can be controlled.",
    bengaliExplanation: "এই শ্লোকে, অর্জুন মনকে নিয়ন্ত্রণ করার কঠিনতা প্রকাশ করেন। কৃষ্ণ এই চ্যালেঞ্জ স্বীকার করেন তবে ব্যাখ্যা করেন যে অভ্যাস এবং বিরক্তি দিয়ে, মনকে নিয়ন্ত্রণ করা যেতে পারে।"
  },
  {
    id: 7,
    chapter: 7,
    verseNumber: 8,
    sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययो:। प्रणव: सर्ववेदेषु शब्द: खे पौरुषं नृषु॥",
    transliteration: "raso 'ham apsu kaunteya prabhāsmi śaśi-sūryayoḥ praṇavaḥ sarva-vedeṣu śabdaḥ khe pauruṣaṁ nṛṣu",
    englishTranslation: "I am the taste in water, O son of Kunti, and the light in the moon and the sun. I am the syllable Om in the Vedic mantras; I am the sound in ether and ability in man.",
    bengaliTranslation: "হে কুন্তীপুত্র, আমি জলের স্বাদ, চন্দ্র-সূর্যের আলো। আমি বৈদিক মন্ত্রে ওঁকার; আমি আকাশে শব্দ এবং মানুষে সামর্থ্য।",
    englishExplanation: "Krishna explains his omnipresence by describing how he exists in the essential qualities of various elements and beings. This verse shows that the divine permeates everything.",
    bengaliExplanation: "কৃষ্ণ বিভিন্ন উপাদান এবং প্রাণীদের অপরিহার্য গুণাবলীতে তিনি কিভাবে বিদ্যমান তা বর্ণনা করে তার সর্বব্যাপিতা ব্যাখ্যা করেন। এই শ্লোকটি দেখায় যে ঐশ্বরিক সবকিছু ব্যাপ্ত করে।"
  },
  {
    id: 8,
    chapter: 8,
    verseNumber: 5,
    sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। य: प्रयाति स मद्भावं याति नास्त्यत्र संशय:॥",
    transliteration: "anta-kāle ca mām eva smaran muktvā kalevaram yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ",
    englishTranslation: "And whoever, at the end of his life, quits his body remembering Me alone, at once attains My nature. Of this there is no doubt.",
    bengaliTranslation: "যে ব্যক্তি মৃত্যুর সময় আমাকেই স্মরণ করে দেহত্যাগ করে, সে আমার স্বরূপ প্রাপ্ত হয়। এতে কোন সন্দেহ নেই।",
    englishExplanation: "This verse emphasizes the importance of remembering God at the time of death. Whatever one thinks of at the final moment determines their next destination, as the mind carries these thoughts beyond death.",
    bengaliExplanation: "এই শ্লোকটি মৃত্যুর সময় ঈশ্বরকে স্মরণ করার গুরুত্ব জোর দেয়। শেষ মুহূর্তে যা চিন্তা করা হয় তা পরবর্তী গন্তব্য নির্ধারণ করে, কারণ মন এই চিন্তাগুলিকে মৃত্যুর পরেও বহন করে।"
  },
  {
    id: 9,
    chapter: 9,
    verseNumber: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmyaham",
    englishTranslation: "For those who worship Me exclusively with unwavering devotion, contemplating no other, I provide what they lack and preserve what they already possess.",
    bengaliTranslation: "যারা অনন্যভাবে আমাকে চিন্তা করে আমার উপাসনা করে, সেই নিত্যযুক্তদের যোগক্ষেম আমি বহন করি।",
    englishExplanation: "Krishna promises to take personal responsibility for the wellbeing of those who worship him with undivided attention and complete devotion.",
    bengaliExplanation: "কৃষ্ণ প্রতিশ্রুতি দেন যে যারা অবিভক্ত মনোযোগ এবং পূর্ণ ভক্তি সহকারে তাকে উপাসনা করেন তাদের কল্যাণের জন্য তিনি ব্যক্তিগত দায়িত্ব নেবেন।"
  },
  {
    id: 10,
    chapter: 10,
    verseNumber: 41,
    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा। तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥",
    transliteration: "yad yad vibhūtimat sattvaṁ śrīmad ūrjitam eva vā tat tad evāvagaccha tvaṁ mama tejo-'ṁśa-sambhavam",
    englishTranslation: "Know that all opulent, beautiful and glorious creations spring from but a spark of My splendor.",
    bengaliTranslation: "যে কোন বস্তু বিভূতিসম্পন্ন, শ্রীমান বা শক্তিশালী, তা আমার তেজের অংশ থেকে উদ্ভূত বলে জানবে।",
    englishExplanation: "After listing many of his divine manifestations, Krishna summarizes by saying that anything possessing exceptional beauty, power, or glory exists due to a fraction of his divine splendor.",
    bengaliExplanation: "তার অনেক দিব্য প্রকাশ তালিকাভুক্ত করার পরে, কৃষ্ণ সংক্ষেপে বলেন যে অসাধারণ সৌন্দর্য, শক্তি বা মহিমা সম্পন্ন যে কোনও কিছু তার দিব্য ঔজ্জ্বল্যের একটি অংশের কারণে বিদ্যমান।"
  },
  {
    id: 11,
    chapter: 11,
    verseNumber: 32,
    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्त:। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिता: प्रत्यनीकेषु योधा:॥",
    transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ",
    englishTranslation: "I am time, the destroyer of all worlds, and I have come here to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.",
    bengaliTranslation: "আমি কাল, লোকক্ষয়কারী, এবং এখানে সমস্ত লোককে ধ্বংস করতে প্রবৃত্ত হয়েছি। তোমাকে ছাড়াও, উভয় পক্ষের সমস্ত যোদ্ধারা বিনষ্ট হবে।",
    englishExplanation: "In this dramatic verse from the eleventh chapter, Krishna reveals his form as all-consuming time, showing that the warriors Arjuna is hesitant to kill are already destined to die as part of the divine plan.",
    bengaliExplanation: "একাদশ অধ্যায়ের এই নাটকীয় শ্লোকে, কৃষ্ণ সর্বগ্রাসী সময় হিসাবে তার রূপ প্রকাশ করেন, দেখিয়ে যে অর্জুন যে যোদ্ধাদের হত্যা করতে দ্বিধাগ্রস্ত, তারা ইতিমধ্যেই ঐশ্বরিক পরিকল্পনার অংশ হিসাবে মৃত্যুর জন্য নির্ধারিত।"
  },
  {
    id: 12,
    chapter: 12,
    verseNumber: 8,
    sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय। निवसिष्यसि मय्येव अत ऊर्ध्वं न संशय:॥",
    transliteration: "mayy eva mana ādhatsva mayi buddhiṁ niveśaya nivasiṣyasi mayy eva ata ūrdhvaṁ na saṁśayaḥ",
    englishTranslation: "Just fix your mind upon Me, the Supreme Personality of Godhead, and engage all your intelligence in Me. Thus you will live in Me always, without a doubt.",
    bengaliTranslation: "আমাতেই মন নিবেশ কর, আমাতেই বুদ্ধি স্থাপন কর। অতঃপর তুমি আমাতেই বাস করবে, এতে সন্দেহ নেই।",
    englishExplanation: "Krishna explains the simplest form of yoga: fixing one's mind and intelligence on God. This direct approach to devotion leads to constant communion with the divine.",
    bengaliExplanation: "কৃষ্ণ যোগের সরলতম রূপ ব্যাখ্যা করেন: ঈশ্বরের উপর নিজের মন এবং বুদ্ধি স্থির করা। ভক্তির এই সরাসরি পদ্ধতি দিব্যের সাথে নিরন্তর যোগাযোগের দিকে নিয়ে যায়।"
  },
  {
    id: 13,
    chapter: 13,
    verseNumber: 28,
    sanskrit: "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्। न हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥",
    transliteration: "samaṁ paśyan hi sarvatra samavasthitam īśvaram na hinasty ātmanātmānaṁ tato yāti parāṁ gatim",
    englishTranslation: "One who sees the Supreme Lord equally present everywhere, in all living beings, does not degrade himself by his mind. Thus he approaches the transcendental destination.",
    bengaliTranslation: "যে ব্যক্তি সর্বত্র সমভাবে অবস্থিত ঈশ্বরকে দেখে, সে নিজের দ্বারা নিজেকে বিনষ্ট করে না, এবং তাই পরম গতি প্রাপ্ত হয়।",
    englishExplanation: "This verse emphasizes the importance of seeing God in all beings equally. This equal vision prevents self-destruction through wrong actions and leads to spiritual liberation.",
    bengaliExplanation: "এই শ্লোকটি সমস্ত প্রাণীতে সমানভাবে ঈশ্বরকে দেখার গুরুত্ব জোর দেয়। এই সমদর্শন ভুল ক্রিয়ার মাধ্যমে আত্ম-বিনাশ রোধ করে এবং আধ্যাত্মিক মুক্তির দিকে নিয়ে যায়।"
  },
  {
    id: 14,
    chapter: 14,
    verseNumber: 20,
    sanskrit: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्। जन्ममृत्युजरादु:खैर्विमुक्तोऽमृतमश्नुते॥",
    transliteration: "guṇān etān atītya trīn dehī deha-samudbhavān janma-mṛtyu-jarā-duḥkhair vimukto 'mṛtam aśnute",
    englishTranslation: "When the embodied being is able to transcend these three modes associated with the material body, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life.",
    bengaliTranslation: "দেহধারী জীব যখন দেহ উৎপত্তিকারী এই তিন গুণ অতিক্রম করতে পারে, তখন সে জন্ম, মৃত্যু, জরা এবং তাদের দুঃখ থেকে মুক্ত হয়ে এই জীবনেই অমৃত আস্বাদন করতে পারে।",
    englishExplanation: "This verse explains that transcending the three modes of material nature (goodness, passion, and ignorance) frees one from the cycle of birth and death, allowing them to experience immortality.",
    bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে যে প্রকৃতির তিন গুণ (সত্ত্ব, রজঃ ও তমঃ) অতিক্রম করা জন্ম ও মৃত্যুর চক্র থেকে মুক্ত করে, তাদের অমরত্ব অনুভব করতে দেয়।"
  },
  {
    id: 15,
    chapter: 15,
    verseNumber: 15,
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्त: स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
    transliteration: "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham",
    englishTranslation: "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.",
    bengaliTranslation: "আমি সকলের হৃদয়ে অধিষ্ঠিত, আমা থেকেই স্মৃতি, জ্ঞান ও বিস্মৃতি। সমস্ত বেদ দ্বারা আমিই জানার যোগ্য। আমিই বেদান্তকৃৎ এবং বেদবিদ।",
    englishExplanation: "Krishna explains his presence in everyone's heart as the source of memory, knowledge, and forgetfulness. He is both the object of knowledge in the Vedas and the knower of their true meaning.",
    bengaliExplanation: "কৃষ্ণ স্মৃতি, জ্ঞান এবং বিস্মৃতির উৎস হিসাবে প্রত্যেকের হৃদয়ে তার উপস্থিতি ব্যাখ্যা করেন। তিনি বেদে জ্ঞানের বিষয় এবং তাদের প্রকৃত অর্থের জ্ঞাতা উভয়ই।"
  },
  {
    id: 16,
    chapter: 16,
    verseNumber: 21,
    sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मन:। काम: क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    transliteration: "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
    englishTranslation: "There are three gates leading to this hell—lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.",
    bengaliTranslation: "এই নরকের তিনটি দ্বার - কাম, ক্রোধ এবং লোভ। প্রত্যেক বিবেকবান ব্যক্তির উচিত এগুলো ত্যাগ করা, কারণ এগুলো আত্মার অবনতির দিকে নিয়ে যায়।",
    englishExplanation: "Krishna identifies three main vices—lust, anger and greed—as gateways to hell. These negative qualities degrade one's consciousness and lead to suffering, so they should be abandoned.",
    bengaliExplanation: "কৃষ্ণ তিনটি প্রধান দোষ—কাম, ক্রোধ এবং লোভ—কে নরকের প্রবেশদ্বার হিসাবে চিহ্নিত করেন। এই নেতিবাচক গুণগুলি একজনের চেতনাকে অবনত করে এবং দুঃখের দিকে নিয়ে যায়, তাই এগুলি পরিত্যাগ করা উচিত।"
  },
  {
    id: 17,
    chapter: 17,
    verseNumber: 3,
    sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्ध: स एव स:॥",
    transliteration: "sattvānurūpā sarvasya śraddhā bhavati bhārata śraddhā-mayo 'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ",
    englishTranslation: "O son of Bharata, according to one's existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired.",
    bengaliTranslation: "হে ভারত, প্রকৃতির বিভিন্ন গুণের অধীনে একজনের অস্তিত্ব অনুসারে, একটি বিশেষ ধরণের শ্রদ্ধা বিকশিত হয়। জীবকে তার অর্জিত গুণ অনুসারে একটি বিশেষ শ্রদ্ধা সম্পন্ন বলা হয়।",
    englishExplanation: "This verse explains that one's faith corresponds to the mode of nature they are influenced by. A person is characterized by the type of faith they possess, which is determined by their consciousness.",
    bengaliExplanation: "এই শ্লোকটি ব্যাখ্যা করে যে একজনের শ্রদ্ধা তাদের প্রভাবিত প্রকৃতির গুণের সাথে সামঞ্জস্যপূর্ণ। একজন ব্যক্তিকে তাদের অধিকারে থাকা শ্রদ্ধার ধরণ দ্বারা চিহ্নিত করা হয়, যা তাদের চেতনা দ্বারা নির্ধারিত হয়।"
  },
  {
    id: 18,
    chapter: 18,
    verseNumber: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच:॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śuchaḥ",
    englishTranslation: "Abandon all varieties of dharma and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not fear.",
    bengaliTranslation: "সমস্ত ধর্ম পরিত্যাগ করে আমার শরণাগত হও। আমি তোমাকে সমস্ত পাপ থেকে মুক্ত করব, শোক করো না।",
    englishExplanation: "One of the most important verses in the Gita, this is Krishna's ultimate instruction to Arjuna – complete surrender to the Divine is the highest spiritual path.",
    bengaliExplanation: "গীতার সবচেয়ে গুরুত্বপূর্ণ শ্লোকগুলির মধ্যে একটি, এটি অর্জুনের প্রতি কৃষ্ণের চূড়ান্ত নির্দেশ - দিব্যের কাছে পূর্ণ সমর্পণই সর্বোচ্চ আধ্যাত্মিক পথ।"
  }
];

export default VersesPage;
