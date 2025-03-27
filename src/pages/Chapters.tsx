
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Book, ChevronRight } from 'lucide-react';

const chaptersDetail = [
  {
    number: 1,
    title: "Arjuna's Dilemma",
    sanskrit: "अर्जुनविषादयोग",
    transliteration: "Arjuna-Viṣāda-Yoga",
    verses: 47,
    summary: "Arjuna, standing between the armies, sees his relatives on both sides and is overcome with grief and moral dilemma about fighting them. He drops his bow and refuses to fight, presenting his arguments to Krishna about why he shouldn't engage in this battle.",
    keyTeachings: [
      "Introduction to the battlefield and the armies",
      "Arjuna's grief and reluctance to fight",
      "The first glimpse of Arjuna's attachment to results and fear of consequences"
    ],
    keyVerses: [
      {
        verse: "1.21-22",
        text: "Arjuna said: O Krishna, place my chariot between the two armies so that I may see those who stand here eager for battle and with whom I must fight in this great combat."
      },
      {
        verse: "1.29",
        text: "My limbs fail and my mouth is parched, my body quivers, and my hair stands on end."
      },
      {
        verse: "1.39",
        text: "With the destruction of the family, the eternal family traditions are destroyed, and with the destruction of tradition, lawlessness (adharma) overtakes the entire family."
      }
    ]
  },
  {
    number: 2,
    title: "Transcendental Knowledge",
    sanskrit: "सांख्ययोग",
    transliteration: "Sāṅkhya-Yoga",
    verses: 72,
    summary: "Krishna begins his teachings by explaining the immortal nature of the soul, distinguishing between the temporary body and the eternal soul. He introduces the concepts of duty (dharma) and the importance of performing one's duty without attachment to results (Karma Yoga).",
    keyTeachings: [
      "Explanation of the eternal nature of the soul (Atman)",
      "Introduction to Karma Yoga - the path of selfless action",
      "The importance of equanimity in pleasure and pain",
      "Characteristics of a person with steady wisdom (Sthitaprajna)"
    ],
    keyVerses: [
      {
        verse: "2.13",
        text: "As the embodied soul continuously passes, in this body, from childhood to youth to old age, similarly, the soul passes into another body at death. A sober person is not bewildered by such a change."
      },
      {
        verse: "2.47",
        text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to inaction."
      },
      {
        verse: "2.55-2.56",
        text: "When one abandons all desires that arise in the mind, and becomes content in the self by the self, then one is said to be of steady wisdom."
      }
    ]
  },
  {
    number: 3,
    title: "Karma Yoga",
    sanskrit: "कर्मयोग",
    transliteration: "Karma-Yoga",
    verses: 43,
    summary: "Krishna elaborates on the path of selfless action (Karma Yoga). He explains why action is necessary and how performing actions without attachment to the results leads to liberation. He warns about the dangers of inaction and discusses how desires and anger are the enemies of spiritual progress.",
    keyTeachings: [
      "Why action is necessary in the world",
      "Performing sacrifice (yajna) as a way to be free from karmic reactions",
      "Leading by example and setting standards for others",
      "Identifying desire and anger as the greatest enemies"
    ],
    keyVerses: [
      {
        verse: "3.19",
        text: "Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme."
      },
      {
        verse: "3.27",
        text: "All actions are performed by the qualities of material nature. One whose mind is deluded by ego thinks, 'I am the doer.'"
      },
      {
        verse: "3.36-3.37",
        text: "Arjuna asks: What impels a person to commit sin, even against their will, as if driven by force? Krishna answers: It is lust (kama) and anger (krodha), born of passion (rajas), all-devouring and most sinful. Know this as the enemy here."
      }
    ]
  },
  {
    number: 4,
    title: "Transcendental Knowledge",
    sanskrit: "ज्ञानकर्मसंन्यासयोग",
    transliteration: "Jñāna-Karma-Sanyāsa-Yoga",
    verses: 42,
    summary: "Krishna reveals how divine knowledge has been passed down through the ages. He explains his purpose for incarnating in the world from age to age. He further explores the mysteries of action and inaction, revealing different types of sacrifices and how knowledge is the highest purifier.",
    keyTeachings: [
      "Krishna's divine incarnations (avatars) and their purpose",
      "Understanding the subtleties of action and inaction",
      "Various types of spiritual sacrifices",
      "Knowledge as the ultimate purifier"
    ],
    keyVerses: [
      {
        verse: "4.7-4.8",
        text: "Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest myself. To protect the righteous, to annihilate the wicked, and to reestablish the principles of dharma, I appear millennium after millennium."
      },
      {
        verse: "4.18",
        text: "One who sees inaction in action, and action in inaction, is wise among men. He is engaged in transcendental knowledge even while performing all sorts of actions."
      },
      {
        verse: "4.39",
        text: "The person having faith attains knowledge, dedicated to it and restraining the senses. Having attained knowledge, one immediately attains supreme peace."
      }
    ]
  },
  {
    number: 5,
    title: "Karma-Sannyasa Yoga",
    sanskrit: "कर्मसंन्यासयोग",
    transliteration: "Karma-Sannyāsa-Yoga",
    verses: 29,
    summary: "Krishna addresses Arjuna's confusion about whether renunciation or action is better. He explains that true renunciation is not about abandoning action but performing action without attachment. The chapter discusses how the disciplined mind can achieve peace regardless of external conditions.",
    keyTeachings: [
      "Resolving the apparent conflict between action and renunciation",
      "Working for the welfare of all beings",
      "Achieving inner peace through detachment from sense objects",
      "Experiencing the joy that comes from self-realization"
    ],
    keyVerses: [
      {
        verse: "5.3",
        text: "One who neither hates nor desires the fruits of their activities is known to be always renounced. Such a person, free from all dualities, easily overcomes material bondage and is completely liberated."
      },
      {
        verse: "5.10",
        text: "Those who dedicate their actions to God, abandoning all attachment, remain untouched by sin, just as a lotus leaf is untouched by water."
      },
      {
        verse: "5.22",
        text: "The pleasures that arise from sense contacts are sources of pain. They have a beginning and an end. The wise do not delight in them."
      }
    ]
  },
  {
    number: 6,
    title: "Dhyana Yoga",
    sanskrit: "ध्यानयोग",
    transliteration: "Dhyāna-Yoga",
    verses: 47,
    summary: "This chapter focuses on meditation (dhyana) and its practice. Krishna explains how one should practice meditation, the qualities needed for success, and how to control the mind. He also addresses what happens to those who strive for spiritual growth but don't achieve perfection within their lifetime.",
    keyTeachings: [
      "Proper technique and posture for meditation",
      "Balancing extremes in spiritual practice",
      "Taming the restless mind through practice and detachment",
      "The fate of unsuccessful yogis"
    ],
    keyVerses: [
      {
        verse: "6.5",
        text: "One must elevate oneself by one's own mind, not degrade oneself. The mind is the friend of the conditioned soul, and his enemy as well."
      },
      {
        verse: "6.19",
        text: "As a lamp in a windless place does not flicker, so the disciplined mind of a yogi remains steady in meditation on the self."
      },
      {
        verse: "6.34-6.35",
        text: "Arjuna asks: The mind is restless, turbulent, obstinate and very strong. To control it is more difficult than controlling the wind. Krishna answers: Undoubtedly the mind is restless and difficult to restrain. But by practice and detachment, it can be controlled."
      }
    ]
  },
  {
    number: 7,
    title: "Knowledge of the Absolute",
    sanskrit: "ज्ञानविज्ञानयोग",
    transliteration: "Jñāna-Vijñāna-Yoga",
    verses: 30,
    summary: "Krishna reveals his divine manifestations and explains how to recognize the divine in all things. He discusses his lower material nature and higher spiritual nature, and how everything in creation emanates from him. He also identifies four types of people who approach him and four types who don't.",
    keyTeachings: [
      "The dual nature of God: material and spiritual",
      "The divine pervades all of existence",
      "Different types of devotees and their motivations",
      "Overcoming the illusion (maya) created by the three modes of nature"
    ],
    keyVerses: [
      {
        verse: "7.7",
        text: "There is nothing higher than Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread."
      },
      {
        verse: "7.16",
        text: "Four kinds of people approach me: the distressed, the seekers of knowledge, the seekers of worldly possessions, and the wise."
      },
      {
        verse: "7.19",
        text: "After many births and deaths, the wise one surrenders to Me, knowing that I am everything. Such a great soul is very rare."
      }
    ]
  },
  {
    number: 8,
    title: "Attaining Salvation",
    sanskrit: "अक्षरब्रह्मयोग",
    transliteration: "Akṣara-Brahma-Yoga",
    verses: 28,
    summary: "This chapter addresses fundamental questions about existence, including what is Brahman, adhyatma, karma, adhibhuta, adhidaiva, and adhiyajna. Krishna explains what happens after death, including the paths of light and darkness (bright and dark paths), and emphasizes remembering him at the time of death.",
    keyTeachings: [
      "Understanding the ultimate reality (Brahman) and the individual soul",
      "The importance of one's state of mind at the time of death",
      "The path of light (devayana) and the path of darkness (pitriyana)",
      "The supreme destination through unwavering devotion"
    ],
    keyVerses: [
      {
        verse: "8.5",
        text: "And whoever, at the time of death, quits his body remembering Me alone, at once attains My nature. Of this there is no doubt."
      },
      {
        verse: "8.14",
        text: "For one who always remembers Me without deviation, I am easy to obtain, because of their constant engagement in devotional service."
      },
      {
        verse: "8.16",
        text: "From the highest planet in the material world down to the lowest, all are places of misery where repeated birth and death take place. But one who attains My abode never takes birth again."
      }
    ]
  },
  {
    number: 9,
    title: "Royal Knowledge",
    sanskrit: "राजविद्याराजगुह्ययोग",
    transliteration: "Rājavidyā-Rājaguhya-Yoga",
    verses: 34,
    summary: "Krishna proclaims this knowledge as the king of all knowledge and the most confidential. He reveals himself as the Supreme Being and explains his relationship with the universe. He emphasizes that true devotion to him, even in the simplest form, leads to liberation.",
    keyTeachings: [
      "God pervades all existence yet remains detached",
      "The eternal relationship between God and creation",
      "The efficacy of devotion, regardless of one's background",
      "Equal vision towards all beings"
    ],
    keyVerses: [
      {
        verse: "9.4",
        text: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them."
      },
      {
        verse: "9.22",
        text: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have."
      },
      {
        verse: "9.29",
        text: "I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to them."
      }
    ]
  },
  {
    number: 10,
    title: "Divine Glories",
    sanskrit: "विभूतियोग",
    transliteration: "Vibhūti-Yoga",
    verses: 42,
    summary: "Krishna describes his divine manifestations to help Arjuna understand his omnipresence. He explains how he manifests as the most excellent of every category of existence, emphasizing that just a spark of his splendor sustains the entire universe.",
    keyTeachings: [
      "God as the source of all material and spiritual worlds",
      "Divine manifestations in various forms of excellence",
      "Recognizing God's presence in all aspects of creation",
      "Understanding divine opulence (vibhuti)"
    ],
    keyVerses: [
      {
        verse: "10.8",
        text: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who perfectly know this engage in My devotional service and worship Me with all their hearts."
      },
      {
        verse: "10.20",
        text: "I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings."
      },
      {
        verse: "10.41",
        text: "Whatever is glorious, beautiful, or mighty, know that to be but a fragment of My splendor."
      }
    ]
  },
  {
    number: 11,
    title: "Universal Form",
    sanskrit: "विश्वरूपदर्शनयोग",
    transliteration: "Viśvarūpa-Darśana-Yoga",
    verses: 55,
    summary: "At Arjuna's request, Krishna reveals his cosmic form (Vishwarupa), showing that he is indeed the Supreme Being containing all of existence. This overwhelming vision includes multiple divine forms, all of time, and the fate of the warriors on the battlefield. Unable to bear this sight, Arjuna asks Krishna to return to his human-like form.",
    keyTeachings: [
      "The revelation of God's universal form that contains all existence",
      "The terrifying aspect of the divine that includes time and destruction",
      "Divine vision required to see God's cosmic form",
      "The importance of devotion for knowing God"
    ],
    keyVerses: [
      {
        verse: "11.11",
        text: "Arjuna sees in the universal form unlimited mouths, unlimited eyes, unlimited wonderful visions. The form was decorated with many celestial ornaments and bore many divine upraised weapons."
      },
      {
        verse: "11.32",
        text: "The Supreme Lord said: Time I am, the great destroyer of the worlds, and I have come here to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain."
      },
      {
        verse: "11.54",
        text: "My dear Arjuna, only by undivided devotional service can I be understood as I am, standing before you, and can thus be seen directly. Only in this way can you enter into the mysteries of My understanding."
      }
    ]
  },
  {
    number: 12,
    title: "Devotional Service",
    sanskrit: "भक्तियोग",
    transliteration: "Bhakti-Yoga",
    verses: 20,
    summary: "Arjuna asks whether it's better to worship the personal or impersonal aspect of the divine. Krishna explains that while both paths lead to him, the path of personal devotion is easier. He then describes the qualities of his devotees that make them dear to him.",
    keyTeachings: [
      "Comparing worship of the personal and impersonal divine",
      "The accessibility of the path of devotion",
      "Gradual stages of spiritual practice",
      "Divine qualities that make a devotee dear to God"
    ],
    keyVerses: [
      {
        verse: "12.6-12.7",
        text: "But those who worship Me, giving up all their activities unto Me and being devoted to Me without deviation, engaged in devotional service and always meditating upon Me, having fixed their minds upon Me - for them I am the swift deliverer from the ocean of birth and death."
      },
      {
        verse: "12.13-12.14",
        text: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant, always satisfied, self-controlled, and engaged in devotional service with determination, his mind and intelligence fixed on Me—such a devotee of Mine is very dear to Me."
      },
      {
        verse: "12.18-12.19",
        text: "One who is equal to friends and enemies, who is equipoised in honor and dishonor, heat and cold, happiness and distress, fame and infamy, who is always free from contaminating association, always silent and satisfied with anything, who doesn't care for any residence, who is fixed in knowledge and who is engaged in devotional service—such a person is very dear to Me."
      }
    ]
  },
  {
    number: 13,
    title: "Nature, Enjoyer, Consciousness",
    sanskrit: "क्षेत्र-क्षेत्रज्ञविभागयोग",
    transliteration: "Kṣetra-Kṣetrajña-Vibhāga-Yoga",
    verses: 35,
    summary: "Krishna explains the difference between the physical body (the field) and the eternal soul (the knower of the field). He discusses the process of knowledge, the soul's relationship with the Supreme, and how the three modes of material nature bind the soul to the body.",
    keyTeachings: [
      "Understanding the body as the field and the soul as the knower",
      "The process of gaining liberating knowledge",
      "The relationship between individual souls and the Supreme Soul",
      "Breaking free from the bondage of material nature"
    ],
    keyVerses: [
      {
        verse: "13.7",
        text: "Humility; pridelessness; nonviolence; tolerance; simplicity; approaching a bona fide spiritual master; cleanliness; steadiness; self-control; renunciation of the objects of sense gratification; absence of false ego; the perception of the evil of birth, death, old age, and disease; detachment; freedom from entanglement with children, wife, home, and the rest; even-mindedness amid pleasant and unpleasant events; constant and unalloyed devotion to Me; aspiring to live in a solitary place; detachment from the general mass of people; accepting the importance of self-realization; and philosophical search for the Absolute Truth—all these I declare to be knowledge, and anything contrary to these is ignorance."
      },
      {
        verse: "13.22",
        text: "The living entity in material nature thus follows the ways of life, enjoying the three modes of nature. This is due to his association with that material nature. Thus he meets with good and evil among various species."
      },
      {
        verse: "13.35",
        text: "Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal."
      }
    ]
  },
  {
    number: 14,
    title: "The Three Qualities",
    sanskrit: "गुणत्रयविभागयोग",
    transliteration: "Guṇa-Traya-Vibhāga-Yoga",
    verses: 27,
    summary: "Krishna describes the three gunas (qualities) of material nature: sattva (goodness), rajas (passion), and tamas (ignorance). He explains how these qualities bind the soul to the body, influence behavior, and affect one's future. He then describes how to transcend these qualities entirely.",
    keyTeachings: [
      "The characteristics and effects of the three gunas",
      "How the gunas influence knowledge, action, and consciousness",
      "Signs of one who has transcended the three gunas",
      "The path to rise above material qualities"
    ],
    keyVerses: [
      {
        verse: "14.5",
        text: "Material nature consists of three modes—goodness, passion, and ignorance. When the eternal living entity comes in contact with nature, O mighty-armed Arjuna, he becomes conditioned by these modes."
      },
      {
        verse: "14.17",
        text: "From the mode of goodness, real knowledge develops; from the mode of passion, grief develops; and from the mode of ignorance, foolishness, madness and illusion develop."
      },
      {
        verse: "14.26",
        text: "One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman."
      }
    ]
  },
  {
    number: 15,
    title: "The Supreme Person",
    sanskrit: "पुरुषोत्तमयोग",
    transliteration: "Puruṣottama-Yoga",
    verses: 20,
    summary: "Krishna compares the material world to an upside-down banyan tree with roots above and branches below. He explains how to cut this tree of attachment and surrender to the Supreme Person. He discusses the relationship between the individual soul, the Supersoul, and the Supreme Person.",
    keyTeachings: [
      "The material world as an inverted banyan tree",
      "Cutting attachments to find the original source",
      "The nature of the soul and its relationship with God",
      "The all-pervading yet detached nature of the Supreme Person"
    ],
    keyVerses: [
      {
        verse: "15.5",
        text: "Those who are free from false prestige, illusion and false association, who understand the eternal, who are done with material lust, who are freed from the dualities of happiness and distress, and who, unbewildered, know how to surrender unto the Supreme Person attain to that eternal kingdom."
      },
      {
        verse: "15.15",
        text: "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas."
      },
      {
        verse: "15.19",
        text: "Whoever knows Me as the Supreme Personality of Godhead, without doubting, is the knower of everything. He therefore engages himself in full devotional service to Me, O son of Bharata."
      }
    ]
  },
  {
    number: 16,
    title: "Divine and Demonic Qualities",
    sanskrit: "दैवासुरसम्पद्विभागयोग",
    transliteration: "Daivāsura-Sampad-Vibhāga-Yoga",
    verses: 24,
    summary: "Krishna distinguishes between divine and demonic qualities in people. He lists the qualities of those with divine nature and those with demonic nature, describing the behaviors, attitudes, and ultimate destinations of each type. He emphasizes following scriptural injunctions rather than acting according to one's whims.",
    keyTeachings: [
      "Enumeration of divine and demonic qualities",
      "The priorities and worldview of those with demonic tendencies",
      "The cycle of rebirth for those who reject spiritual principles",
      "The importance of following scriptural guidance"
    ],
    keyVerses: [
      {
        verse: "16.1-16.3",
        text: "The Supreme Personality of Godhead said: Fearlessness; purification of one's existence; cultivation of spiritual knowledge; charity; self-control; performance of sacrifice; study of the Vedas; austerity; simplicity; nonviolence; truthfulness; freedom from anger; renunciation; tranquility; aversion to faultfinding; compassion for all living entities; freedom from covetousness; gentleness; modesty; steady determination; vigor; forgiveness; fortitude; cleanliness; and freedom from envy and from the passion for honor—these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature."
      },
      {
        verse: "16.13-16.15",
        text: "The demoniac person thinks: 'So much wealth do I have today, and I will gain more according to my schemes. So much is mine now, and it will increase in the future, more and more. He is my enemy, and I have killed him, and my other enemies will also be killed. I am the lord of everything. I am the enjoyer. I am perfect, powerful and happy. I am the richest man, surrounded by aristocratic relatives. There is none so powerful and happy as I am. I shall perform sacrifices, I shall give some charity, and thus I shall rejoice.' In this way, such persons are deluded by ignorance."
      },
      {
        verse: "16.24",
        text: "One should therefore understand what is duty and what is not duty by the regulations of the scriptures. Knowing such rules and regulations, one should act so that one may gradually be elevated."
      }
    ]
  },
  {
    number: 17,
    title: "Three Divisions of Faith",
    sanskrit: "श्रद्धात्रयविभागयोग",
    transliteration: "Śraddhā-Traya-Vibhāga-Yoga",
    verses: 28,
    summary: "Krishna explains how faith is divided according to the three gunas. He discusses how different types of worship, food, sacrifice, austerity, and charity correspond to these three modes of nature. He also explains the meaning of the sacred syllable OM and the significance of 'OM TAT SAT.'",
    keyTeachings: [
      "Different types of faith according to the three gunas",
      "Classification of food, sacrifice, austerity, and charity",
      "The significance of 'OM TAT SAT' in spiritual practices",
      "Developing sattvic (in goodness) qualities in all actions"
    ],
    keyVerses: [
      {
        verse: "17.3",
        text: "O son of Bharata, according to one's existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired."
      },
      {
        verse: "17.17",
        text: "Austerity of speech consists in speaking words that are truthful, pleasing, beneficial, and not agitating to others, and also in regularly reciting Vedic literature."
      },
      {
        verse: "17.28",
        text: "Whatever sacrifice, charity or penance is performed, whatever is done without faith, it is called 'asat'—it has no eternal effect. It is useless both in this life and the next, O son of Pritha."
      }
    ]
  },
  {
    number: 18,
    title: "Conclusion - Moksha",
    sanskrit: "मोक्षसंन्यासयोग",
    transliteration: "Mokṣa-Sannyāsa-Yoga",
    verses: 78,
    summary: "In this concluding chapter, Krishna summarizes his teachings. He discusses different types of renunciation, the factors that influence action, and the duties according to one's nature. He reemphasizes the path of surrender to him as the ultimate teaching and assures Arjuna that through devotion, one can overcome all obstacles.",
    keyTeachings: [
      "Different types of renunciation and their effects",
      "The five factors of action and their role",
      "Understanding one's natural duty (swadharma)",
      "The essence of surrender to the Divine"
    ],
    keyVerses: [
      {
        verse: "18.47",
        text: "It is better to engage in one's own occupation, even though one may perform it imperfectly, than to accept another's occupation and perform it perfectly. Duties prescribed according to one's nature are never affected by sinful reactions."
      },
      {
        verse: "18.61",
        text: "The Supreme Lord dwells in the hearts of all beings, O Arjuna, and by His divine power causes all beings to revolve, as though they were mounted on a machine."
      },
      {
        verse: "18.65-18.66",
        text: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend. Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
      }
    ]
  }
];

const ChaptersPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Chapters | GitaGuru';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Chapters of the Bhagavad Gita
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            The Bhagavad Gita consists of 18 chapters, each offering profound spiritual wisdom. 
            Explore each chapter's content and key teachings below.
          </p>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 justify-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed View</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chaptersDetail.map((chapter) => (
                  <div 
                    key={chapter.number}
                    className="bg-card border border-border rounded-xl p-5 shadow hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                          Chapter {chapter.number}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{chapter.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{chapter.sanskrit}</p>
                        <p className="text-xs text-muted-foreground italic mb-3">{chapter.verses} verses</p>
                      </div>
                      <Book size={20} className="text-primary/60" />
                    </div>
                    <p className="text-sm text-foreground/70 line-clamp-3">{chapter.summary}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="detailed">
              <div className="space-y-8">
                {chaptersDetail.map((chapter) => (
                  <div 
                    key={chapter.number}
                    className="bg-card border border-border rounded-xl p-6 shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
                          Chapter {chapter.number}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{chapter.title}</h3>
                        <div className="space-y-1 mb-4">
                          <p className="text-md text-muted-foreground">{chapter.sanskrit} ({chapter.transliteration})</p>
                          <p className="text-sm font-medium">{chapter.verses} verses</p>
                        </div>
                      </div>
                      <div className="md:text-right">
                        <span className="inline-block px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground mb-1">
                          Sanskrit Name
                        </span>
                        <p className="text-md font-semibold mb-2">{chapter.sanskrit}</p>
                        <span className="inline-block px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground mb-1">
                          Transliteration
                        </span>
                        <p className="text-md">{chapter.transliteration}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center">
                          <ChevronRight size={18} className="text-primary mr-1" />
                          Summary
                        </h4>
                        <p className="text-foreground/80">{chapter.summary}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center">
                          <ChevronRight size={18} className="text-primary mr-1" />
                          Key Teachings
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 pl-2">
                          {chapter.keyTeachings.map((teaching, index) => (
                            <li key={index}>{teaching}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center">
                          <ChevronRight size={18} className="text-primary mr-1" />
                          Key Verses
                        </h4>
                        <div className="bg-secondary/30 rounded-lg p-4">
                          <ScrollArea className="h-[180px] rounded-md">
                            <div className="space-y-4">
                              {chapter.keyVerses.map((verse, index) => (
                                <div key={index} className="border-l-2 border-primary/30 pl-3">
                                  <p className="text-sm font-semibold text-primary">Verse {verse.verse}</p>
                                  <p className="text-sm text-foreground/80 italic">"{verse.text}"</p>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-card border border-border rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Chapters Summary</h2>
            <ScrollArea className="h-[400px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Chapter</TableHead>
                    <TableHead className="w-[180px]">Title</TableHead>
                    <TableHead className="w-[120px]">Sanskrit</TableHead>
                    <TableHead className="w-[100px]">Verses</TableHead>
                    <TableHead>Key Focus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chaptersDetail.map((chapter) => (
                    <TableRow key={chapter.number}>
                      <TableCell className="font-medium">{chapter.number}</TableCell>
                      <TableCell>{chapter.title}</TableCell>
                      <TableCell className="text-sm">{chapter.sanskrit}</TableCell>
                      <TableCell>{chapter.verses}</TableCell>
                      <TableCell className="text-sm">{chapter.keyTeachings[0]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChaptersPage;
