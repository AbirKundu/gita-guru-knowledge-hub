
// This file contains all chapter-related data

export type ChapterData = {
  number: number;
  title: string;
  description: string;
};

export const getChapters = (language: 'english' | 'bengali'): ChapterData[] => {
  if (language === 'english') {
    return [
      {
        number: 1,
        title: "Arjuna's Dilemma",
        description: "Arjuna sees his relatives on the opposing army and has doubts about fighting. He seeks Krishna's guidance."
      },
      {
        number: 2,
        title: "Transcendental Knowledge",
        description: "Krishna explains the nature of the soul, the difference between body and soul, and introduces Karma Yoga."
      },
      {
        number: 3,
        title: "Karma Yoga",
        description: "Krishna explains the path of selfless action, performing duties without attachment to the results."
      },
      {
        number: 4,
        title: "Transcendental Knowledge",
        description: "Krishna reveals how divine knowledge has been passed down and explains the true nature of action and inaction."
      },
      {
        number: 5,
        title: "Karma-Sannyasa Yoga",
        description: "Krishna explains the path of renunciation and how it's connected to selfless action."
      },
      {
        number: 6,
        title: "Dhyana Yoga",
        description: "Krishna teaches meditation techniques and how to control the mind through yoga practice."
      },
      {
        number: 7,
        title: "Knowledge of the Absolute",
        description: "Krishna discusses his divine manifestations and how to recognize the divine in all things."
      },
      {
        number: 8,
        title: "Attaining Salvation",
        description: "Krishna explains different ways to reach the divine and what happens after death."
      },
      {
        number: 9,
        title: "Royal Knowledge",
        description: "Krishna reveals himself as the Supreme Being and explains how devotion leads to liberation."
      },
      {
        number: 10,
        title: "Divine Glories",
        description: "Krishna describes his divine manifestations to help Arjuna understand his omnipresence."
      },
      {
        number: 11,
        title: "Universal Form",
        description: "Krishna reveals his cosmic form to Arjuna, showing his true divine nature."
      },
      {
        number: 12,
        title: "Devotional Service",
        description: "Krishna explains the path of devotion and how it's the easiest way to reach him."
      },
      {
        number: 13,
        title: "Nature, Enjoyer, Consciousness",
        description: "Krishna explains the difference between the physical body and the eternal soul."
      },
      {
        number: 14,
        title: "The Three Qualities",
        description: "Krishna describes the three gunas (qualities) of material nature: sattva, rajas, and tamas."
      },
      {
        number: 15,
        title: "The Supreme Person",
        description: "Krishna compares the world to a banyan tree and discusses how to cut attachments to it."
      },
      {
        number: 16,
        title: "Divine and Demonic Qualities",
        description: "Krishna distinguishes between divine and demonic qualities in people."
      },
      {
        number: 17,
        title: "Three Divisions of Faith",
        description: "Krishna explains how faith is divided according to the three gunas."
      },
      {
        number: 18,
        title: "Conclusion - Moksha",
        description: "Krishna summarizes all teachings and advises Arjuna to surrender to him completely."
      },
    ];
  } else {
    return [
      {
        number: 1,
        title: "অর্জুনের দ্বিধা",
        description: "অর্জুন বিপক্ষ সেনাবাহিনীতে তার আত্মীয়দের দেখেন এবং যুদ্ধ করা নিয়ে সন্দেহ করেন। তিনি কৃষ্ণের নির্দেশনা চান।"
      },
      {
        number: 2,
        title: "দিব্য জ্ঞান",
        description: "কৃষ্ণ আত্মার প্রকৃতি, দেহ এবং আত্মার মধ্যে পার্থক্য ব্যাখ্যা করেন এবং কর্ম যোগ পরিচয় করিয়ে দেন।"
      },
      {
        number: 3,
        title: "কর্ম যোগ",
        description: "কৃষ্ণ নিঃস্বার্থ কর্মের পথ ব্যাখ্যা করেন, ফলাফলের প্রতি আসক্তি ছাড়াই কর্তব্য পালন করা।"
      },
      {
        number: 4,
        title: "দিব্য জ্ঞান",
        description: "কৃষ্ণ প্রকাশ করেন কিভাবে দিব্য জ্ঞান বংশানুক্রমে চলে এসেছে এবং কর্ম ও অকর্মের প্রকৃত স্বরূপ ব্যাখ্যা করেন।"
      },
      {
        number: 5,
        title: "কর্ম-সন্ন্যাস যোগ",
        description: "কৃষ্ণ ত্যাগের পথ এবং এটি কিভাবে নিঃস্বার্থ কর্মের সাথে সংযুক্ত তা ব্যাখ্যা করেন।"
      },
      {
        number: 6,
        title: "ধ্যান যোগ",
        description: "কৃষ্ণ ধ্যান কৌশল এবং যোগ অনুশীলনের মাধ্যমে মনকে নিয়ন্ত্রণ করার উপায় শেখান।"
      },
      {
        number: 7,
        title: "পরম সত্যের জ্ঞান",
        description: "কৃষ্ণ তার দিব্য প্রকাশগুলি এবং সমস্ত বিষয়ে দিব্যকে কিভাবে চেনা যায় সে বিষয়ে আলোচনা করেন।"
      },
      {
        number: 8,
        title: "মুক্তি লাভ",
        description: "কৃষ্ণ ভগবানকে পাওয়ার বিভিন্ন উপায় এবং মৃত্যুর পরে কী ঘটে তা ব্যাখ্যা করেন।"
      },
      {
        number: 9,
        title: "রাজকীয় জ্ঞান",
        description: "কৃষ্ণ নিজেকে পরম পুরুষ হিসাবে প্রকাশ করেন এবং ব্যাখ্যা করেন কিভাবে ভক্তি মুক্তির দিকে নিয়ে যায়।"
      },
      {
        number: 10,
        title: "দিব্য মহিমা",
        description: "কৃষ্ণ অর্জুনকে তার সর্বব্যাপকতা বুঝতে সাহায্য করার জন্য তার দিব্য প্রকাশগুলি বর্ণনা করেন।"
      },
      {
        number: 11,
        title: "বিশ্বরূপ",
        description: "কৃষ্ণ অর্জুনকে তার বিশ্বরূপ প্রকাশ করেন, তার সত্যিকারের দিব্য প্রকৃতি দেখান।"
      },
      {
        number: 12,
        title: "ভক্তি সেবা",
        description: "কৃষ্ণ ভক্তির পথ ব্যাখ্যা করেন এবং কিভাবে এটি তাকে পাওয়ার সবচেয়ে সহজ উপায়।"
      },
      {
        number: 13,
        title: "প্রকৃতি, ভোক্তা, চেতনা",
        description: "কৃষ্ণ শারীরিক দেহ এবং চিরন্তন আত্মার মধ্যে পার্থক্য ব্যাখ্যা করেন।"
      },
      {
        number: 14,
        title: "তিন গুণ",
        description: "কৃষ্ণ বস্তুজগতের তিন গুণ (বৈশিষ্ট্য) বর্ণনা করেন: সত্ত্ব, রজঃ এবং তমঃ।"
      },
      {
        number: 15,
        title: "পরম পুরুষ",
        description: "কৃষ্ণ বিশ্বকে একটি বটগাছের সাথে তুলনা করেন এবং এর প্রতি আসক্তি কিভাবে কাটাতে হয় তা আলোচনা করেন।"
      },
      {
        number: 16,
        title: "দৈবী ও আসুরিক গুণাবলী",
        description: "কৃষ্ণ মানুষের মধ্যে দৈবী ও আসুরিক গুণাবলীর মধ্যে পার্থক্য করেন।"
      },
      {
        number: 17,
        title: "বিশ্বাসের তিন বিভাগ",
        description: "কৃষ্ণ ব্যাখ্যা করেন কিভাবে বিশ্বাস তিন গুণ অনুসারে বিভক্ত।"
      },
      {
        number: 18,
        title: "উপসংহার - মোক্ষ",
        description: "কৃষ্ণ সমস্ত শিক্ষা সংক্ষিপ্ত করেন এবং অর্জুনকে সম্পূর্ণভাবে তার কাছে আত্মসমর্পণ করার পরামর্শ দেন।"
      },
    ];
  }
};
