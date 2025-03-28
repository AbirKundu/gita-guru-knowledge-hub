
import React, { useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { LanguageContext } from "@/providers/LanguageProvider";

const NotFound = () => {
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = language === 'english' 
      ? '404 - Page Not Found | GitaGuru'
      : '৪০৪ - পৃষ্ঠা পাওয়া যায়নি | গীতাগুরু';
  }, [location.pathname, language]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-foreground/80 mb-8">
            {language === 'english' 
              ? 'The page you\'re looking for has vanished like an illusion.'
              : 'আপনি যে পৃষ্ঠাটি খুঁজছেন তা একটি ভ্রান্তির মতো অদৃশ্য হয়ে গেছে।'}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 gap-2"
          >
            <ArrowLeft size={16} />
            {language === 'english' ? 'Return to Home' : 'হোমে ফিরে যান'}
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
