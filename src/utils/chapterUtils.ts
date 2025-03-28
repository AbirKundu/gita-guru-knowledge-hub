
// Chapter-related utility functions

export const getChapterSummary = (chapterNumber: number, language: 'english' | 'bengali'): string => {
  const summaries = {
    1: {
      english: "The first chapter sets the scene of the Kurukshetra war. Arjuna, seeing his relatives, teachers, and friends on the opposing side, is overcome with grief and moral dilemma. Throwing down his bow and arrow, he tells Krishna that he would rather not fight than kill those he loves and respects.",
      bengali: "প্রথম অধ্যায়ে কুরুক্ষেত্র যুদ্ধের দৃশ্য স্থাপন করা হয়েছে। অর্জুন বিপক্ষ পক্ষে তার আত্মীয়, শিক্ষক এবং বন্ধুদের দেখে শোক ও নৈতিক দ্বন্দ্বে ভোগেন। তিনি তার ধনুক-বাণ ফেলে দিয়ে কৃষ্ণকে বলেন যে তিনি যাদের ভালোবাসেন ও শ্রদ্ধা করেন তাদের হত্যা করার চেয়ে যুদ্ধ না করাই পছন্দ করবেন।"
    },
    2: {
      english: "Krishna begins his teachings by explaining the immortality of the soul and the nature of duty (dharma). He introduces the concept of Karma Yoga, the path of selfless action, and explains that Arjuna must fight because it is his duty as a warrior, regardless of personal attachments.",
      bengali: "কৃষ্ণ আত্মার অমরত্ব এবং কর্তব্য (ধর্ম) এর প্রকৃতি ব্যাখ্যা করে তার শিক্ষা শুরু করেন। তিনি কর্ম যোগের ধারণা, নিঃস্বার্থ কর্মের পথ, প্রবর্তন করেন এবং ব্যাখ্যা করেন যে অর্জুনকে অবশ্যই যুদ্ধ করতে হবে কারণ এটি একজন যোদ্ধা হিসাবে তার কর্তব্য, ব্যক্তিগত সম্পর্ক নির্বিশেষে।"
    },
    3: {
      english: "This chapter focuses on Karma Yoga - the path of selfless action. Krishna emphasizes that everyone must perform action, and the right way to act is without attachment to results. He explains how action performed as a sacrifice becomes free from karmic reactions.",
      bengali: "এই অধ্যায়টি কর্ম যোগের উপর ফোকাস করে - নিঃস্বার্থ কর্মের পথ। কৃষ্ণ জোর দেন যে প্রত্যেককে কর্ম করতে হবে, এবং কর্ম করার সঠিক উপায় হল ফলাফলের প্রতি আসক্তি ছাড়া। তিনি ব্যাখ্যা করেন কিভাবে যজ্ঞ হিসাবে সম্পাদিত কর্ম কর্মিক প্রতিক্রিয়া থেকে মুক্ত হয়।"
    },
    4: {
      english: "Krishna reveals the eternal nature of this knowledge, which was first imparted to the sun god and has been passed down through spiritual lineage. He explains the purpose of divine incarnations and introduces the concept of different types of sacrifices, culminating in the sacrifice of knowledge.",
      bengali: "কৃষ্ণ এই জ্ঞানের চিরন্তন প্রকৃতি প্রকাশ করেন, যা প্রথমে সূর্যদেবতাকে দেওয়া হয়েছিল এবং আধ্যাত্মিক বংশানুক্রমের মাধ্যমে বংশানুক্রমিকভাবে প্রদান করা হয়েছে। তিনি ঐশ্বরিক অবতারের উদ্দেশ্য ব্যাখ্যা করেন এবং বিভিন্ন ধরনের যজ্ঞের ধারণা প্রবর্তন করেন, যা জ্ঞানের যজ্ঞে পরিণত হয়।"
    },
    5: {
      english: "Here, Krishna reconciles the paths of action and renunciation, explaining that they are not contradictory but complementary. True renunciation means performing actions without attachment, with a steady mind, seeing all beings equally, and experiencing inner peace.",
      bengali: "এখানে, কৃষ্ণ কর্ম ও ত্যাগের পথগুলি মিলিত করেন, ব্যাখ্যা করেন যে এগুলি পরস্পরবিরোধী নয় বরং পরিপূরক। সত্যিকার ত্যাগ মানে আসক্তি ছাড়া কর্ম করা, স্থির মন সহ, সব প্রাণীকে সমানভাবে দেখা, এবং অভ্যন্তরীণ শান্তি অনুভব করা।"
    },
    6: {
      english: "This chapter focuses on the practice of meditation (Dhyana Yoga). Krishna provides detailed instructions on meditation postures, concentration techniques, and the importance of moderation in all activities. He describes the qualities of a perfect yogi and how to control the mind.",
      bengali: "এই অধ্যায়টি ধ্যানের অনুশীলনের (ধ্যান যোগ) উপর ফোকাস করে। কৃষ্ণ ধ্যানের ভঙ্গি, একাগ্রতা কৌশল, এবং সমস্ত কার্যকলাপে মিতাচারের গুরুত্ব সম্পর্কে বিস্তারিত নির্দেশনা প্রদান করেন। তিনি একজন পরিপূর্ণ যোগীর গুণাবলী এবং কিভাবে মনকে নিয়ন্ত্রণ করতে হয় তা বর্ণনা করেন।"
    },
    7: {
      english: "Krishna reveals his divine nature and explains how he manifests in the material world. He discusses the different types of devotees who approach him and why most people fail to recognize his true nature, being deluded by the three modes of material nature.",
      bengali: "কৃষ্ণ তার দিব্য প্রকৃতি প্রকাশ করেন এবং কিভাবে তিনি বস্তুজগতে প্রকাশিত হন তা ব্যাখ্যা করেন। তিনি বিভিন্ন ধরনের ভক্তদের নিয়ে আলোচনা করেন যারা তার কাছে আসেন এবং কেন বেশিরভাগ মানুষ তার প্রকৃত স্বরূপ চিনতে ব্যর্থ হয়, বস্তুজগতের তিন গুণের দ্বারা বিভ্রান্ত হয়ে।"
    },
    8: {
      english: "Krishna explains the nature of the absolute reality, the self, and the process of leaving the body at the time of death. He teaches that whatever one remembers at the final moment determines their next destination. The chapter concludes with a description of the cosmic cycles and how to transcend them.",
      bengali: "কৃষ্ণ পরম সত্য, আত্মা, এবং মৃত্যুর সময় দেহ ত্যাগের প্রক্রিয়া ব্যাখ্যা করেন। তিনি শেখান যে অন্তিম মুহূর্তে যা কিছু স্মরণ করা হয় তা তাদের পরবর্তী গন্তব্য নির্ধারণ করে। অধ্যায়টি মহাবিশ্বীয় চক্রের বর্ণনা এবং কিভাবে সেগুলি অতিক্রম করতে হয় তার সাথে শেষ হয়।"
    },
    9: {
      english: "Krishna reveals the most confidential knowledge about his divine nature, emphasizing that he is the source of everything. He explains how all beings rest in him, while he remains unattached and transcendental. This chapter particularly highlights the path of devotion as accessible to all regardless of background.",
      bengali: "কৃষ্ণ তার দিব্য প্রকৃতি সম্পর্কে সবচেয়ে গোপনীয় জ্ঞান প্রকাশ করেন, জোর দিয়ে বলেন যে তিনি সবকিছুর উৎস। তিনি ব্যাখ্যা করেন কিভাবে সকল প্রাণী তার মধ্যে বিশ্রাম নেয়, যখন তিনি অনাসক্ত এবং অতিক্রান্ত থাকেন। এই অধ্যায়টি বিশেষভাবে ভক্তির পথকে হাইলাইট করে যা পটভূমি নির্বিশেষে সকলের জন্য সুলভ।"
    },
    10: {
      english: "This chapter describes the divine manifestations of Krishna in the world. He explains how he manifests as the best of every category of existence - the brightest of lights, the strongest of forces, the wisest of beings, and so on - to help devotees recognize his presence everywhere.",
      bengali: "এই অধ্যায়ে জগতে কৃষ্ণের দিব্য প্রকাশগুলি বর্ণনা করা হয়েছে। তিনি ব্যাখ্যা করেন কিভাবে তিনি অস্তিত্বের প্রতিটি বিভাগের সেরা হিসাবে প্রকাশিত হন - আলোর সবচেয়ে উজ্জ্বল, শক্তির সবচেয়ে শক্তিশালী, সত্তার সবচেয়ে জ্ঞানী, ইত্যাদি - ভক্তদের সর্বত্র তার উপস্থিতি চিনতে সাহায্য করার জন্য।"
    },
    11: {
      english: "At Arjuna's request, Krishna reveals his universal form (Vishvarupa), showing his infinite, awe-inspiring, and terrifying cosmic manifestation. This overwhelming vision includes all beings, all worlds, and all time simultaneously. Arjuna, unable to bear this sight, asks Krishna to return to his four-armed and then human-like form.",
      bengali: "অর্জুনের অনুরোধে, কৃষ্ণ তার বিশ্বরূপ (বিশ্বরূপ) প্রকাশ করেন, তার অসীম, ভয়-অনুপ্রেরণাদায়ক, এবং ভয়ঙ্কর মহাজাগতিক প্রকাশ দেখান। এই অভিভূত করা দর্শনে সমস্ত প্রাণী, সমস্ত জগত, এবং সমস্ত সময় একসাথে অন্তর্ভুক্ত। অর্জুন, এই দৃশ্য সহ্য করতে না পেরে, কৃষ্ণকে তার চতুর্ভুজ এবং তারপর মানবসদৃশ রূপে ফিরে আসতে অনুরোধ করেন।"
    },
    12: {
      english: "This chapter compares different forms of spiritual practice, with Krishna explaining that devotional service to him is the highest path. He describes the qualities of his dear devotees - they are compassionate to all beings, free from ego, equipoised in all situations, and fully devoted to him.",
      bengali: "এই অধ্যায়ে আধ্যাত্মিক অনুশীলনের বিভিন্ন রূপের তুলনা করা হয়েছে, কৃষ্ণ ব্যাখ্যা করেন যে তার প্রতি ভক্তিমূলক সেবা সর্বোচ্চ পথ। তিনি তার প্রিয় ভক্তদের গুণাবলী বর্ণনা করেন - তারা সকল প্রাণীর প্রতি করুণাময়, অহংকারমুক্ত, সকল পরিস্থিতিতে সমভাবাপন্ন, এবং সম্পূর্ণরূপে তার প্রতি নিবেদিত।"
    },
    13: {
      english: "Krishna explains the difference between the body (field) and the soul (knower of the field), and the Supreme Soul that pervades all existence. He describes in detail the qualities that constitute true knowledge and the path to self-realization through understanding these distinctions.",
      bengali: "কৃষ্ণ দেহ (ক্ষেত্র) এবং আত্মা (ক্ষেত্রজ্ঞ) এর মধ্যে পার্থক্য ব্যাখ্যা করেন, এবং সেই পরমাত্মা যা সমস্ত অস্তিত্ব ব্যাপ্ত করে আছে। তিনি বিস্তারিতভাবে সেই গুণাবলী বর্ণনা করেন যা সত্য জ্ঞান গঠন করে এবং এই পার্থক্য বোঝার মাধ্যমে আত্ম-উপলব্ধির পথ।"
    },
    14: {
      english: "This chapter describes the three modes or qualities of material nature: goodness (sattva), passion (rajas), and ignorance (tamas). Krishna explains how these modes bind the soul to the body, influence behavior, and determine future destinies. He then explains how to transcend all three modes through devotion to him.",
      bengali: "এই অধ্যায়ে বস্তু প্রকৃতির তিন গুণ বর্ণনা করা হয়েছে: সত্ত্ব (সাত্ত্বিক), রজঃ (রাজসিক), এবং তমঃ (তামসিক)। কৃষ্ণ ব্যাখ্যা করেন কিভাবে এই গুণগুলি আত্মাকে শরীরের সাথে বেঁধে রাখে, আচরণকে প্রভাবিত করে, এবং ভবিষ্যৎ নিয়তি নির্ধারণ করে। তারপর তিনি ব্যাখ্যা করেন কিভাবে তার প্রতি ভক্তির মাধ্যমে তিনটি গুণকেই অতিক্রম করতে হয়।"
    },
    15: {
      english: "Krishna compares the material world to an upside-down banyan tree that must be cut down with the weapon of detachment. He describes the eternal nature of the Supreme Soul, the individual soul, and the relationship between them. He explains that knowing him as the Supreme Person is the essence of all knowledge.",
      bengali: "কৃষ্ণ বস্তুজগতকে একটি উল্টানো বটগাছের সাথে তুলনা করেন যা অনাসক্তির অস্ত্র দিয়ে কাটতে হবে। তিনি পরমাত্মা, ব্যক্তিগত আত্মা, এবং তাদের মধ্যে সম্পর্কের চিরন্তন প্রকৃতি বর্ণনা করেন। তিনি ব্যাখ্যা করেন যে তাকে পরম পুরুষ হিসাবে জানা সমস্ত জ্ঞানের সারমর্ম।"
    },
    16: {
      english: "This chapter contrasts the divine and demoniac natures that can manifest in human beings. Krishna describes in detail the qualities of those with divine nature (compassion, self-control, charity) and those with demoniac nature (pride, anger, arrogance). He warns against lust, anger, and greed as the three gates to spiritual destruction.",
      bengali: "এই অধ্যায়ে মানুষের মধ্যে প্রকাশিত হতে পারে এমন দৈবী ও আসুরিক প্রকৃতির মধ্যে তুলনা করা হয়েছে। কৃষ্ণ বিস্তারিতভাবে দৈবী প্রকৃতি সম্পন্ন ব্যক্তিদের গুণাবলী (করুণা, আত্ম-নিয়ন্ত্রণ, দান) এবং আসুরিক প্রকৃতি সম্পন্ন ব্যক্তিদের গুণাবলী (অহংকার, ক্রোধ, দম্ভ) বর্ণনা করেন। তিনি কাম, ক্রোধ, এবং লোভকে আধ্যাত্মিক ধ্বংসের তিনটি দ্বার হিসাবে সতর্ক করেন।"
    },
    17: {
      english: "Krishna explains how faith, worship, food, charity, and austerity can each manifest in the three modes of nature. He introduces the three syllables of sacred sound - Om Tat Sat - and their significance in spiritual practices. He emphasizes that acts of sacrifice, charity, and penance should be performed with faith and proper understanding.",
      bengali: "কৃষ্ণ ব্যাখ্যা করেন কিভাবে বিশ্বাস, উপাসনা, খাদ্য, দান, এবং তপস্যা প্রত্যেকটি প্রকৃতির তিন গুণে প্রকাশিত হতে পারে। তিনি পবিত্র শব্দের তিনটি অক্ষর - ওম তৎ সৎ - এবং আধ্যাত্মিক অনুশীলনে তাদের তাৎপর্য প্রবর্তন করেন। তিনি জোর দেন যে যজ্ঞ, দান, এবং তপস্যার কাজগুলি বিশ্বাস ও সঠিক বোঝার সাথে সম্পাদন করা উচিত।"
    },
    18: {
      english: "The final chapter summarizes the entire Bhagavad Gita. Krishna discusses renunciation, the five causes of action, the three types of knowledge, duties according to one's nature, and how to attain the supreme perfection. The chapter concludes with Krishna's famous advice to abandon all religious duties and simply surrender to him with love and devotion.",
      bengali: "শেষ অধ্যায়টি সমগ্র ভগবদ্গীতার সারাংশ। কৃষ্ণ ত্যাগ, কর্মের পাঁচটি কারণ, জ্ঞানের তিনটি প্রকার, নিজের প্রকৃতি অনুসারে কর্তব্য, এবং কিভাবে সর্বোচ্চ পূর্ণতা অর্জন করতে হয় তা নিয়ে আলোচনা করেন। অধ্যায়টি কৃষ্ণের বিখ্যাত উপদেশের সাথে শেষ হয় যে সমস্ত ধর্মীয় কর্তব্য ত্যাগ করে ভালবাসা ও ভক্তি সহকারে শুধু তার কাছে আত্মসমর্পণ করতে হবে।"
    }
  };

  return summaries[chapterNumber as keyof typeof summaries]?.[language] || '';
};

export const getSanskritName = (chapterNumber: number): string => {
  const sanskritNames = {
    1: "Arjuna Visada Yoga",
    2: "Sankhya Yoga",
    3: "Karma Yoga",
    4: "Jnana Karma Sanyasa Yoga",
    5: "Karma Sanyasa Yoga",
    6: "Dhyana Yoga",
    7: "Jnana Vijnana Yoga",
    8: "Aksara Brahma Yoga",
    9: "Raja Vidya Yoga",
    10: "Vibhuti Yoga",
    11: "Visvarupa Darsana Yoga",
    12: "Bhakti Yoga",
    13: "Ksetra Ksetrajna Vibhaga Yoga",
    14: "Gunatraya Vibhaga Yoga",
    15: "Purusottama Yoga",
    16: "Daivasura Sampad Vibhaga Yoga",
    17: "Sraddhatraya Vibhaga Yoga",
    18: "Moksha Sanyasa Yoga"
  };

  return sanskritNames[chapterNumber as keyof typeof sanskritNames] || '';
};

export const getVerseCount = (chapterNumber: number): number => {
  const verseCounts = {
    1: 47,
    2: 72,
    3: 43,
    4: 42,
    5: 29,
    6: 47,
    7: 30,
    8: 28,
    9: 34,
    10: 42,
    11: 55,
    12: 20,
    13: 35,
    14: 27,
    15: 20,
    16: 24,
    17: 28,
    18: 78
  };

  return verseCounts[chapterNumber as keyof typeof verseCounts] || 0;
};

// Create types for teaching and verse data
export type Teaching = string;
export type Verse = {
  sanskrit: string;
  translation: string;
  reference: string;
};
