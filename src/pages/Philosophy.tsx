
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, BookOpen, Heart, Brain, Compass, Activity, Infinity, Sparkles, Scale } from 'lucide-react';

const PhilosophyPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Philosophy | GitaGuru';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Philosophical Concepts
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            The Bhagavad Gita presents profound philosophical ideas that have influenced spiritual seekers for millennia. 
            Explore the core teachings below.
          </p>

          <Tabs defaultValue="paths" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="paths">Paths of Yoga</TabsTrigger>
              <TabsTrigger value="fundamental">Fundamental Concepts</TabsTrigger>
              <TabsTrigger value="gunas">The Three Gunas</TabsTrigger>
              <TabsTrigger value="dharma">Dharma & Ethics</TabsTrigger>
            </TabsList>

            <TabsContent value="paths" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title="Karma Yoga"
                  description="The path of selfless action where one performs duties without attachment to results. Krishna teaches that actions performed without desire for personal gain purify the mind and lead to liberation."
                  icon={<Activity size={28} />}
                  color="bg-blue-50 text-blue-600"
                  details={[
                    "Act without attachment to the fruits of action (Chapter 2, Verse 47)",
                    "Perform duty for duty's sake, not for reward",
                    "Even enlightened beings should act to set an example",
                    "Actions bind when performed with selfish motives",
                    "Perfect action is performed with equanimity, without concern for success or failure"
                  ]}
                  chapters="Primarily discussed in Chapters 2, 3, and 5"
                  mainVerse="karmaṇy-evādhikāras te mā phaleṣhu kadāchana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi"
                  translation="You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself as the cause of the results of your activities, and never be attached to not doing your duty."
                />
                <ConceptCard 
                  title="Bhakti Yoga"
                  description="The path of loving devotion to the Divine. Krishna explains that sincere devotion with love and surrender is a direct way to spiritual realization and divine grace."
                  icon={<Heart size={28} />}
                  color="bg-red-50 text-red-600"
                  details={[
                    "Loving devotion to God with complete surrender",
                    "Accessible to all regardless of background or ability",
                    "Considered by Krishna as the highest form of practice",
                    "Nine forms of devotion including listening, chanting, remembering",
                    "Culminates in complete union with the Divine"
                  ]}
                  chapters="Primarily discussed in Chapters 9, 10, 11, and 12"
                  mainVerse="man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣyasi satyaṁ te pratijāne priyo 'si me"
                  translation="Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
                />
                <ConceptCard 
                  title="Jnana Yoga"
                  description="The path of knowledge and wisdom. Krishna explains that understanding the true nature of reality, the self, and the universe leads to liberation from the cycle of birth and death."
                  icon={<BookOpen size={28} />}
                  color="bg-amber-50 text-amber-600"
                  details={[
                    "Discriminative knowledge between the real and unreal",
                    "Understanding of Atman (soul) and Brahman (ultimate reality)",
                    "Self-inquiry and philosophical investigation",
                    "Requires sharp intellect and discernment",
                    "Culminates in direct realization of one's true nature"
                  ]}
                  chapters="Primarily discussed in Chapters 2, 3, 4, and 13"
                  mainVerse="jñānaṁ te 'haṁ sa-vijñānam idaṁ vakṣyāmy aśeṣataḥ yaj jñātvā neha bhūyo 'nyaj jñātavyam avaśiṣyate"
                  translation="I shall now declare unto you in full this knowledge both phenomenal and numinous, by knowing which nothing further shall remain for you to know."
                />
                <ConceptCard 
                  title="Dhyana Yoga"
                  description="The path of meditation and concentration. Krishna provides detailed instructions on controlling the mind and focusing consciousness on the Divine through various meditation techniques."
                  icon={<Compass size={28} />}
                  color="bg-green-50 text-green-600"
                  details={[
                    "Systematic practice of concentration and meditation",
                    "Control of mind, senses, and breath",
                    "Establishment in equanimity and mental stillness",
                    "Progressive stages from concentration to meditation to samadhi",
                    "Practical techniques for steady abidance in the self"
                  ]}
                  chapters="Primarily discussed in Chapter 6"
                  mainVerse="yuñjann evaṁ sadātmānaṁ yogī niyata-mānasaḥ śāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigacchati"
                  translation="The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with Me, and thus he is liberated from all reactions to past deeds."
                />
              </div>
            </TabsContent>

            <TabsContent value="fundamental" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title="Atman - The Self"
                  description="The eternal, imperishable soul that is distinct from the physical body and mind. Krishna teaches that the true self (Atman) is never born and never dies."
                  icon={<Infinity size={28} />}
                  color="bg-violet-50 text-violet-600"
                  details={[
                    "Eternal, indestructible, and unchanging",
                    "Neither born nor does it ever die",
                    "Cannot be cut, burned, wetted, or dried",
                    "The witness consciousness behind all experiences",
                    "Identical to Brahman (absolute reality) in essence"
                  ]}
                  chapters="Primarily discussed in Chapter 2"
                  mainVerse="na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre"
                  translation="For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."
                />
                <ConceptCard 
                  title="Brahman - Ultimate Reality"
                  description="The absolute, ultimate reality that pervades everything. It is both transcendent (beyond the universe) and immanent (present throughout creation)."
                  icon={<Sparkles size={28} />}
                  color="bg-indigo-50 text-indigo-600"
                  details={[
                    "The supreme cosmic principle, ground of all being",
                    "Both with form (saguna) and without form (nirguna)",
                    "Both transcendent beyond creation and immanent within it",
                    "The source and substance of everything that exists",
                    "Realized through spiritual practice and divine grace"
                  ]}
                  chapters="Discussed throughout, especially in Chapters 7, 8, and 13"
                  mainVerse="brahmaṇo hi pratiṣṭhāham amṛtasyāvyayasya ca śāśvatasya ca dharmasya sukhasyaikāntikasya ca"
                  translation="And I am the basis of the impersonal Brahman, which is immortal, imperishable and eternal and is the constitutional position of ultimate happiness."
                />
                <ConceptCard 
                  title="Maya - Cosmic Illusion"
                  description="The principle of divine illusion that creates the appearance of multiplicity and separation. Maya causes beings to misidentify with the body and mind rather than their true self."
                  icon={<Brain size={28} />}
                  color="bg-cyan-50 text-cyan-600"
                  details={[
                    "Divine power that veils the true nature of reality",
                    "Creates the appearance of multiplicity in the one reality",
                    "Not mere illusion, but a real power with unreal effects",
                    "Causes beings to identify with body, mind, and ego",
                    "Transcended through spiritual practice and divine grace"
                  ]}
                  chapters="Discussed in Chapters 7 and 14"
                  mainVerse="daivī hy eṣā guṇa-mayī mama māyā duratyayā mām eva ye prapadyante māyām etāṁ taranti te"
                  translation="This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it."
                />
                <ConceptCard 
                  title="Samsara - Cycle of Rebirth"
                  description="The continuous cycle of birth, death, and rebirth determined by one's karma. Krishna teaches how to transcend this cycle and attain moksha (liberation)."
                  icon={<Book size={28} />}
                  color="bg-orange-50 text-orange-600"
                  details={[
                    "The continuous cycle of birth, death, and rebirth",
                    "Driven by karma and perpetuated by desire and ignorance",
                    "Characterized by suffering due to attachment and aversion",
                    "Each soul migrates according to the quality of actions",
                    "Transcended through spiritual realization and divine grace"
                  ]}
                  chapters="Discussed in Chapters 2, 8, and 9"
                  mainVerse="ābrahmabhuvanāl lokāḥ punar āvartino 'rjuna mām upetya tu kaunteya punar janma na vidyate"
                  translation="From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode, O son of Kunti, never takes birth again."
                />
              </div>
            </TabsContent>

            <TabsContent value="gunas" className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">The Three Gunas (Modes of Nature)</h3>
                <p className="text-foreground/80 mb-6">
                  According to the Bhagavad Gita, all of material existence is composed of three fundamental qualities or energies called gunas. 
                  Every person, object, and phenomenon in nature contains a unique combination of these qualities, which determine their behavior and characteristics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-amber-500/10 p-5">
                    <h3 className="text-xl font-semibold text-amber-700 mb-2">Sattva (Goodness)</h3>
                    <p className="text-foreground/90">The mode of purity, knowledge, harmony, and balance.</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      <li>Clarity of mind and wisdom</li>
                      <li>Peacefulness and contentment</li>
                      <li>Compassion and selflessness</li>
                      <li>Harmony with nature and others</li>
                      <li>Ability to perceive higher truths</li>
                    </ul>
                    
                    <h4 className="font-medium">Effects:</h4>
                    <p className="text-foreground/80">
                      Leads to happiness, knowledge, and spiritual elevation. Those dominated by sattva naturally gravitate toward spiritual practices, vegetarian diet, and peaceful actions.
                    </p>
                    
                    <h4 className="font-medium">Relevant Verse:</h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-amber-200 pl-4">
                      "From sattva, knowledge arises; from rajas, greed; from tamas, negligence, delusion and ignorance arise." (Chapter 14, Verse 17)
                    </blockquote>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-red-500/10 p-5">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">Rajas (Passion)</h3>
                    <p className="text-foreground/90">The mode of energy, desire, action, and struggle.</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      <li>Intense activity and ambition</li>
                      <li>Attachment to results of action</li>
                      <li>Desire for recognition and success</li>
                      <li>Competitive nature and restlessness</li>
                      <li>Emotional turbulence and anxiety</li>
                    </ul>
                    
                    <h4 className="font-medium">Effects:</h4>
                    <p className="text-foreground/80">
                      Leads to action, productivity, but also stress and anxiety. Those dominated by rajas are driven to achieve, accumulate wealth, and gain status, but may struggle with discontent.
                    </p>
                    
                    <h4 className="font-medium">Relevant Verse:</h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-red-200 pl-4">
                      "The mode of passion is born of unlimited desires and longings, O son of Kunti, and because of this, one is bound to material fruitive activities." (Chapter 14, Verse 7)
                    </blockquote>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-slate-500/10 p-5">
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">Tamas (Ignorance)</h3>
                    <p className="text-foreground/90">The mode of inertia, darkness, ignorance, and delusion.</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <h4 className="font-medium">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      <li>Ignorance and delusion</li>
                      <li>Laziness and procrastination</li>
                      <li>Confusion and indecision</li>
                      <li>Excessive sleep and intoxication</li>
                      <li>Destructive or negligent behavior</li>
                    </ul>
                    
                    <h4 className="font-medium">Effects:</h4>
                    <p className="text-foreground/80">
                      Leads to ignorance, delusion, and suffering. Those dominated by tamas tend toward destructive habits, neglect responsibilities, and resist positive change.
                    </p>
                    
                    <h4 className="font-medium">Relevant Verse:</h4>
                    <blockquote className="italic text-foreground/80 border-l-4 border-slate-200 pl-4">
                      "O son of Bharata, know that the mode of darkness, born of ignorance, is the delusion of all embodied living entities. The results of this mode are madness, indolence and sleep, which bind the conditioned soul." (Chapter 14, Verse 8)
                    </blockquote>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 mt-4">
                <h3 className="text-xl font-semibold mb-3">Transcending the Gunas</h3>
                <p className="mb-4">
                  While everyone is influenced by all three gunas, Krishna teaches that spiritual progress involves gradually moving from tamas to rajas to sattva, and ultimately transcending even sattva to reach a state beyond the gunas.
                </p>
                <blockquote className="italic text-foreground/80 border-l-4 border-primary/20 pl-4">
                  "When the embodied being is able to transcend these three modes associated with the material body, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life." (Chapter 14, Verse 20)
                </blockquote>
              </div>
            </TabsContent>

            <TabsContent value="dharma" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ConceptCard 
                  title="Svadharma - Personal Duty"
                  description="One's specific duties according to their nature, station in life, and social position. Krishna emphasizes the importance of following one's own dharma over imitating another's."
                  icon={<Scale size={28} />}
                  color="bg-emerald-50 text-emerald-600"
                  details={[
                    "Duties based on natural inclinations and social position",
                    "Better to perform one's own duty imperfectly than another's perfectly",
                    "Tied to the concept of varnashrama (social organization)",
                    "Fulfilling svadharma leads to spiritual growth",
                    "Neglecting svadharma creates social and personal disorder"
                  ]}
                  chapters="Discussed in Chapters 2, 3, and 18"
                  mainVerse="śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ"
                  translation="It is better to perform one's own duties imperfectly than to master another's duties. By fulfilling the obligations he is born with, a person never incurs sin."
                />
                <ConceptCard 
                  title="Dharmic Ethics"
                  description="The moral principles that govern righteous action. The Gita presents a complex ethical framework that considers intention, duty, universal welfare, and ultimate reality."
                  icon={<Book size={28} />}
                  color="bg-sky-50 text-sky-600"
                  details={[
                    "Righteousness that upholds cosmic and social order",
                    "Based on principles like non-violence, truth, and compassion",
                    "Actions judged by intention, not just consequences",
                    "Different from rigid rule-based morality",
                    "Ultimate ethics transcend conventional good and evil"
                  ]}
                  chapters="Discussed throughout, especially in Chapters 2, 3, and 18"
                  mainVerse="dharmāviruddho bhūteṣu kāmo 'smi bharatarṣabha"
                  translation="I am desire which is not contrary to dharma, O leader of the Bharatas."
                />
                <div className="bg-card border border-border rounded-xl p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">The Ethics of War in the Bhagavad Gita</h3>
                  <p className="text-foreground/80 mb-6">
                    The Bhagavad Gita takes place on a battlefield, and Krishna's advice to Arjuna about fighting raises important ethical questions. 
                    Rather than being a simple endorsement of violence, the Gita presents a nuanced ethical framework:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Contextual Ethics</h4>
                      <p className="text-foreground/80">
                        The Gita teaches that ethical action must be understood in context. Arjuna is a warrior (Kshatriya) whose duty (svadharma) is to fight in a righteous war. For him, refusing to fight would be an abandonment of duty and would create greater harm.
                      </p>
                      
                      <blockquote className="italic text-foreground/80 border-l-4 border-border pl-4">
                        "Therefore, Arjuna, carry out your prescribed duty, for action is better than inaction. Without action, even the basic functioning of your body would be impossible." (Chapter 3, Verse 8)
                      </blockquote>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Intention and Detachment</h4>
                      <p className="text-foreground/80">
                        The Gita emphasizes that the moral quality of an action depends not just on the act itself, but on intention and inner attitude. Actions performed with detachment from personal gain, with a focus on duty rather than results, take on a different ethical character.
                      </p>
                      
                      <blockquote className="italic text-foreground/80 border-l-4 border-border pl-4">
                        "Fixed in yoga, perform actions, having abandoned attachment and having become equal in success and failure, for equanimity is called yoga." (Chapter 2, Verse 48)
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-5 bg-primary/5 rounded-lg">
                    <h4 className="font-medium mb-2">Transcendent Perspective</h4>
                    <p className="text-foreground/80">
                      Ultimately, the Gita presents a transcendent perspective where the highest ethics come from understanding the eternal nature of the soul and acting in alignment with cosmic dharma. From this highest perspective, the eternal soul is never killed, and the wise person sees action in inaction, and inaction in action.
                    </p>
                    <blockquote className="italic text-foreground/80 border-l-4 border-primary/20 pl-4 mt-3">
                      "He who sees inaction in action, and action in inaction, is wise among men. He is a yogi and has accomplished everything." (Chapter 4, Verse 18)
                    </blockquote>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ConceptCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  chapters: string;
  mainVerse: string;
  translation: string;
}

const ConceptCard = ({ title, description, icon, color, details, chapters, mainVerse, translation }: ConceptCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${color}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{chapters}</p>
          </div>
        </div>
        
        <p className="text-foreground/80 mb-6">{description}</p>
        
        <div className="space-y-4">
          <h4 className="font-medium">Key Points:</h4>
          <ul className="list-disc pl-5 space-y-2 text-foreground/80">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-secondary/30 p-5 border-t border-border">
        <h4 className="font-medium mb-2">Key Verse:</h4>
        <div className="text-sm italic text-primary/90 mb-2">
          {mainVerse}
        </div>
        <p className="text-foreground/80 text-sm">
          "{translation}"
        </p>
      </div>
    </div>
  );
};

export default PhilosophyPage;
