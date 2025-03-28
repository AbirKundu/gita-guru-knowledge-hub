
// Collection of key verses for each chapter

import { Verse } from './chapterUtils';

export const getKeyVerses = (chapterNumber: number, language: 'english' | 'bengali'): Verse[] => {
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
          : "অর্জুন বললেন: হে আমার প্রিয় কৃষ্ণ, আমি আপনার দেহে সমস্ত দেবতা এবং অন্যান্য বিভিন্ন জীবন্ত সত্তাকে একত্রিত দেখছি। আমি ব্রহ্মা কে পদ্মফুলের উপর বসে থাকতে দেখছি, সেইসাথে শিব এবং সমস্ত ঋষি ও দিব্য সর্পদের।",
        reference: "Chapter 11, Verse 15"
      },
      {
        sanskrit: "kālo 'smi loka-kṣhaya-kṛit pravṛiddho lokān samāhartum iha pravṛittaḥ ṛite 'pi tvāṁ na bhaviṣhyanti sarve ye 'vasthitāḥ pratyanīkeṣhu yodhāḥ",
        translation: language === 'english'
          ? "I am time, the destroyer of all worlds, and I have come to engage all people. Even without your participation, all the warriors standing arrayed in the opposing armies shall cease to exist."
          : "আমি সময়, সমস্ত জগতের ধ্বংসকারী, এবং আমি সমস্ত মানুষকে নিয়োজিত করতে এসেছি। আপনার অংশগ্রহণ ছাড়াই, বিপক্ষ সেনাবাহিনীতে সজ্জিত সমস্ত যোদ্ধার অস্তিত্ব শেষ হয়ে যাবে।",
        reference: "Chapter 11, Verse 32"
      },
    ],
    12: [
      {
        sanskrit: "mayy āveśhya mano ye māṁ nitya-yuktā upāsate śhraddhayā parayopetās te me yuktatamā matāḥ",
        translation: language === 'english'
          ? "Those who fix their minds on My personal form and are always engaged in worshiping Me with great and transcendental faith are considered by Me to be most perfect."
          : "যারা আমার ব্যক্তিগত রূপে তাদের মন নিবদ্ধ করে এবং সর্বদা মহৎ ও অতিক্রান্ত বিশ্বাসের সাথে আমার উপাসনায় নিযুক্ত থাকে, তাদের আমি সবচেয়ে পরিপূর্ণ মনে করি।",
        reference: "Chapter 12, Verse 2"
      },
      {
        sanskrit: "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
        translation: language === 'english'
          ? "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is forgiving..."
          : "যিনি কোনো প্রাণীর প্রতি বিদ্বেষী নন কিন্তু সব প্রাণীর প্রতি দয়ালু বন্ধু, যিনি নিজেকে মালিক মনে করেন না এবং মিথ্যা অহংকার থেকে মুক্ত, যিনি সুখ ও দুঃখে সমান, যিনি ক্ষমাশীল...",
        reference: "Chapter 12, Verse 13"
      },
    ],
    13: [
      {
        sanskrit: "kṣhetra-kṣhetrajñayor evam antaraṁ jñāna-chakṣhuṣhā bhūta-prakṛiti-mokṣhaṁ cha ye vidur yānti te param",
        translation: language === 'english'
          ? "Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal."
          : "যারা জ্ঞানচক্ষু দিয়ে দেহ ও দেহের জ্ঞাতার মধ্যে পার্থক্য দেখেন, এবং বস্তুগত প্রকৃতির বন্ধন থেকে মুক্তির প্রক্রিয়াও বুঝতে পারেন, তারা পরম লক্ষ্যে পৌঁছান।",
        reference: "Chapter 13, Verse 35"
      },
      {
        sanskrit: "upadraṣhṭānumantā cha bhartā bhoktā maheśhvaraḥ paramātmeti chāpy ukto dehe 'smin puruṣhaḥ paraḥ",
        translation: language === 'english'
          ? "In this body there is also a transcendental enjoyer who is the Lord, the supreme proprietor, who exists as the overseer and permitter, and who is known as the Supersoul."
          : "এই দেহে একজন অতিক্রান্ত ভোক্তাও আছেন যিনি প্রভু, সর্বোচ্চ মালিক, যিনি তত্ত্বাবধায়ক ও অনুমতিদাতা হিসাবে বিদ্যমান, এবং যিনি পরমাত্মা হিসাবে পরিচিত।",
        reference: "Chapter 13, Verse 23"
      },
    ],
    14: [
      {
        sanskrit: "sattvaṁ rajas tama iti guṇāḥ prakṛiti-sambhavāḥ nibadhnanti mahā-bāho dehe dehinam avyayam",
        translation: language === 'english'
          ? "The three modes of material nature - goodness, passion, and ignorance - bind the imperishable soul to the body, O mighty-armed Arjuna."
          : "বস্তুজগতের তিন গুণ - সত্ত্ব, রজঃ, এবং তমঃ - অবিনাশী আত্মাকে দেহের সাথে বেঁধে রাখে, হে মহাবাহু অর্জুন।",
        reference: "Chapter 14, Verse 5"
      },
      {
        sanskrit: "yadā sattve pravṛiddhe tu pralayaṁ yāti deha-bhṛit tadottama-vidāṁ lokān amalān pratipadyate",
        translation: language === 'english'
          ? "When one dies in the mode of goodness, he attains the pure higher planets of the great sages."
          : "যখন কেউ সাত্ত্বিক গুণে মৃত্যুবরণ করে, সে মহান ঋষিদের বিশুদ্ধ উচ্চতর গ্রহে পৌঁছায়।",
        reference: "Chapter 14, Verse 14"
      },
    ],
    15: [
      {
        sanskrit: "sarvasya chāhaṁ hṛidi sanniviṣhṭo mattaḥ smṛitir jñānam apohanaṁ cha vedaiśh cha sarvair aham eva vedyo vedānta-kṛid veda-vid eva chāham",
        translation: language === 'english'
          ? "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedānta, and I am the knower of the Vedas."
          : "আমি প্রত্যেকের হৃদয়ে অধিষ্ঠিত, এবং আমার থেকেই স্মৃতি, জ্ঞান ও বিস্মৃতি আসে। সমস্ত বেদ দ্বারা, আমাকেই জানতে হবে। আমিই বেদান্তের সংকলক, এবং আমিই বেদের জ্ঞাতা।",
        reference: "Chapter 15, Verse 15"
      },
      {
        sanskrit: "dvāv imau puruṣhau loke kṣharaśh chākṣhara eva cha kṣharaḥ sarvāṇi bhūtāni kūṭa-stho 'kṣhara uchyate",
        translation: language === 'english'
          ? "There are two kinds of beings in this world: the fallible and the infallible. All created beings are fallible, but the uncreated are infallible."
          : "এই জগতে দুই ধরনের সত্তা আছে: ক্ষয়শীল এবং অক্ষয়। সমস্ত সৃষ্ট প্রাণী ক্ষয়শীল, কিন্তু অসৃষ্ট অক্ষয়।",
        reference: "Chapter 15, Verse 16"
      },
    ],
    16: [
      {
        sanskrit: "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśhanam ātmanaḥ kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
        translation: language === 'english'
          ? "There are three gates leading to hell—lust, anger, and greed. Every sane man should give these up, for they lead to the degradation of the soul."
          : "নরকের দিকে নিয়ে যাওয়া তিনটি দ্বার আছে—কাম, ক্রোধ, এবং লোভ। প্রত্যেক সুস্থ মানুষের এগুলি ত্যাগ করা উচিত, কারণ এগুলি আত্মার অধঃপতনের দিকে নিয়ে যায়।",
        reference: "Chapter 16, Verse 21"
      },
      {
        sanskrit: "daivī sampad vimokṣhāya nibandhāyāsurī matā mā śhuchaḥ sampadaṁ daivīm abhijāto 'si pāṇḍava",
        translation: language === 'english'
          ? "The divine qualities lead to liberation, while the demoniac qualities lead to bondage. Do not worry, O son of Pandu, for you are born with divine qualities."
          : "দৈবী গুণাবলী মুক্তির দিকে নিয়ে যায়, যেখানে আসুরিক গুণাবলী বন্ধনের দিকে নিয়ে যায়। চিন্তা করো না, হে পাণ্ডু পুত্র, কারণ তুমি দৈবী গুণাবলী নিয়ে জন্মগ্রহণ করেছ।",
        reference: "Chapter 16, Verse 5"
      },
    ],
    17: [
      {
        sanskrit: "śhraddha-mayoyaṁ puruṣho yo yach-chhraddhaḥ sa eva saḥ",
        translation: language === 'english'
          ? "A person is what his faith is. Whatever faith he has, that he becomes."
          : "একজন ব্যক্তি তার বিশ্বাসের মতোই। তার যে বিশ্বাস আছে, সে তাই হয়ে ওঠে।",
        reference: "Chapter 17, Verse 3"
      },
      {
        sanskrit: "yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat yajño dānaṁ tapaśh chaiva pāvanāni manīṣhiṇām",
        translation: language === 'english'
          ? "Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance are purifiers of the wise."
          : "যজ্ঞ, দান এবং তপস্যার কাজ ত্যাগ করা উচিত নয়; এগুলি অবশ্যই সম্পাদন করতে হবে। প্রকৃতপক্ষে, যজ্ঞ, দান এবং তপস্যা জ্ঞানীদের পবিত্রকারী।",
        reference: "Chapter 17, Verse 25"
      },
    ],
    18: [
      {
        sanskrit: "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
        translation: language === 'english'
          ? "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
          : "সমস্ত ধর্মের প্রকারভেদ ত্যাগ করে শুধু আমার শরণাপন্ন হও। আমি তোমাকে সমস্ত পাপ-প্রতিক্রিয়া থেকে মুক্ত করব। ভয় করো না।",
        reference: "Chapter 18, Verse 66"
      },
      {
        sanskrit: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣyasi satyaṁ te pratijāne priyo 'si me",
        translation: language === 'english'
          ? "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
          : "সর্বদা আমার চিন্তা করো, আমার ভক্ত হও, আমার উপাসনা করো এবং আমাকে প্রণাম করো। এভাবে তুমি নিশ্চিতভাবে আমার কাছে আসবে। আমি তোমাকে এর প্রতিশ্রুতি দিচ্ছি কারণ তুমি আমার অতি প্রিয় বন্ধু।",
        reference: "Chapter 18, Verse 65"
      },
    ],
  };

  return verses[chapterNumber as keyof typeof verses] || [];
};
