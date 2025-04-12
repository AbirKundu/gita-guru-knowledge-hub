import React, { useEffect, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';

const AboutPage = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = language === 'english' ? 'About | GitaGuru' : 'পরিচিতি | গীতাগুরু';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'english' ? (
              <span>About <span className={theme === 'light' ? "text-primary" : "text-white"}>Gita</span><span className="text-orange-500">Guru</span></span>
            ) : (
              <span><span className={theme === 'light' ? "text-primary" : "text-white"}>গীতা</span><span className="text-orange-500">গুরু</span> সম্পর্কে</span>
            )}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-12 hover:text-lg hover:scale-105 transition-transform duration-[1500ms] ease-in-out">
            {language === 'english' 
              ? 'GitaGuru was created by ' 
              : 'গীতাগুরু তৈরি করেছেন '} 
            <span className="font-semibold">"Abir Kundu"</span> 
            {language === 'english' 
              ? ' with a heartfelt mission—to bring the timeless wisdom of the Bhagavad Gita to the world in a way that is both modern and deeply spiritual. This sacred scripture, filled with divine knowledge and eternal truths, has guided humanity for centuries, and GitaGuru strives to make it accessible to all.'
              : 'একটি আন্তরিক লক্ষ্য নিয়ে—ভগবদ্গীতার চিরন্তন জ্ঞানকে এমনভাবে বিশ্বের সামনে তুলে ধরা, যা আধুনিক এবং গভীরভাবে আধ্যাত্মিক উভয়ই। এই পবিত্র গ্রন্থটি, যা ঐশ্বরিক জ্ঞান এবং চিরন্তন সত্যে পূর্ণ, শতাব্দীর পর শতাব্দী ধরে মানবজাতিকে পথ দেখিয়ে এসেছে, এবং গীতাগুরু এই জ্ঞানকে সবার কাছে সহজলভ্য করার জন্য প্রচেষ্টা চালিয়ে যাচ্ছে।'}
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">
                {language === 'english' ? "Creator's Note" : 'নির্মাতার নোট'}
              </h2>
              <p className="text-foreground/80 mb-4 hover:text-lg hover:scale-105 transition-transform duration-[1500ms] ease-in-out">
                {language === 'english' 
                  ? 'This project is more than just a website—it is a journey of enlightenment. The Bhagavad Gita is not just a book; it is a compass for life, guiding us through challenges, self-doubt, and moral dilemmas. It teaches us the art of righteous living, the power of devotion, and the strength of unwavering faith.'
                  : 'এই প্রকল্পটি কেবল একটি ওয়েবসাইট নয়—এটি এক আলোকিত যাত্রা। ভগবদ্গীতা শুধুমাত্র একটি গ্রন্থ নয়; এটি জীবনের একটি দিকনির্দেশক, যা আমাদের চ্যালেঞ্জ, আত্মসন্দেহ এবং নৈতিক সমস্যার মধ্য দিয়ে পথ দেখায়। এটি আমাদের ন্যায়সঙ্গত জীবনযাত্রার কৌশল, ভক্তির শক্তি এবং অবিচল বিশ্বাসের শক্তি শেখায়।'}
              </p>
              <p className="text-foreground/80 mb-4 hover:text-lg hover:scale-105 transition-transform duration-[1500ms] ease-in-out">
                {language === 'english' 
                  ? 'At GitaGuru, we believe that the wisdom of the Gita is not bound by time, religion, or background—it is a universal message for every soul seeking purpose, clarity, and inner peace. Whether you are facing struggles, searching for truth, or simply wish to elevate your understanding of life, the Gita will illuminate your path like a divine lamp in the darkness.'
                  : 'গীতাগুরুর বিশ্বাস, গীতার জ্ঞান সময়, ধর্ম বা পটভূমির দ্বারা সীমাবদ্ধ নয়—এটি প্রতিটি আত্মার জন্য একটি সর্বজনীন বার্তা, যারা জীবনের উদ্দেশ্য, স্পষ্টতা এবং আভ্যন্তরীণ শান্তি খুঁজছে। আপনি যদি সংগ্রাম করছেন, সত্য খুঁজছেন, অথবা শুধু জীবনের বোঝাপড়া বাড়াতে চান, গীতা আপনাকে অন্ধকারের মধ্যে একটি ঐশ্বরিক প্রদীপের মতো আলোকিত করবে।'}
              </p>
              <p className="text-foreground/80 font-semibold text-center text-lg hover:text-xl hover:scale-105 transition-transform duration-[1500ms] ease-in-out">
                {language === 'english' 
                  ? 'Let us embrace this treasure of knowledge, apply its teachings to our daily lives, and embark on a journey towards self-realization, wisdom, and ultimate bliss. May the words of Krishna awaken the divinity within us all. 🙏'
                  : 'আসুন এই জ্ঞানের রত্নকে গ্রহণ করি, এর শিক্ষাগুলোকে আমাদের দৈনন্দিন জীবনে প্রয়োগ করি, এবং আত্ম-উপলব্ধি, জ্ঞান এবং চূড়ান্ত আনন্দের পথে যাত্রা শুরু করি। কৃষ্ণের বাণী আমাদের সকলের মধ্যে দিভ্যত্ব জাগিয়ে তুলুক। 🙏'}
              </p>
              <p className="text-center text-xl font-bold mt-6 text-primary hover:text-2xl hover:scale-105 transition-transform duration-[1500ms] ease-in-out">
                {language === 'english' 
                  ? '📖 Read. ✨ Reflect. 🦋 Transform. 🙏🏻 Hare Krishna! ' 
                  : '📖 পড়ুন। ✨ মনোযোগ দিন। 🦋 পরিবর্তিত হন। 🙏🏻হরে কৃষ্ণ! ✨'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
