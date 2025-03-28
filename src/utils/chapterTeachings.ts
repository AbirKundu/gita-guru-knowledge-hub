
// Collection of key teachings for each chapter

import { Teaching } from './chapterUtils';

export const getKeyTeachings = (chapterNumber: number, language: 'english' | 'bengali'): Teaching[] => {
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
