
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { LanguageContext } from '@/providers/LanguageProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-6',
        isScrolled ? 'glass py-4' : 'bg-transparent custom-blur'
      )}
      style={{ 
        transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out, background-color 0.3s ease-in-out, padding 0.3s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-semibold">
            <span className="font-playfair">Gita</span>
            <span className="text-primary font-light">Guru</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLinks language={language} />
            
            <div className="flex items-center space-x-2 border-l border-border pl-6">
              <Globe size={18} className="text-foreground/70" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'english' | 'bengali')}
                className="bg-transparent text-sm cursor-pointer outline-none"
              >
                <option value="english">English</option>
                <option value="bengali">বাংলা</option>
              </select>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation using Sheet from shadcn */}
          {isMobile ? (
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <button 
                    className="p-2 focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    <Menu size={24} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] pt-14">
                  <nav className="flex flex-col space-y-6 mt-8 text-lg">
                    <NavLinks language={language} mobile />
                    
                    <div className="flex items-center space-x-2 pt-4 border-t border-border">
                      <Globe size={18} className="text-foreground/70" />
                      <select 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as 'english' | 'bengali')}
                        className="bg-transparent text-sm cursor-pointer outline-none"
                      >
                        <option value="english">English</option>
                        <option value="bengali">বাংলা</option>
                      </select>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button 
                className="p-2"
                onClick={() => {}} // This isn't used anymore with Sheet component
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ 
  mobile = false, 
  language 
}: { 
  mobile?: boolean; 
  onClose?: () => void;
  language: 'english' | 'bengali';
}) => {
  return (
    <>
      <Link 
        to="/" 
        className={cn(
          "text-foreground/80 hover:text-primary transition-all duration-200",
          mobile ? "text-lg py-2" : "hover:shadow-lg hover:scale-105"
        )}
      >
        {language === 'english' ? 'Home' : 'হোম'}
      </Link>
      <Link 
        to="/chapters" 
        className={cn(
          "text-foreground/80 hover:text-primary transition-all duration-200",
          mobile ? "text-lg py-2" : "hover:shadow-lg hover:scale-105"
        )}
      >
        {language === 'english' ? 'Chapters' : 'অধ্যায়'}
      </Link>
      <Link 
        to="/philosophy" 
        className={cn(
          "text-foreground/80 hover:text-primary transition-all duration-200",
          mobile ? "text-lg py-2" : "hover:shadow-lg hover:scale-105"
        )}
      >
        {language === 'english' ? 'Philosophy' : 'দর্শন'}
      </Link>
      <Link 
        to="/verses" 
        className={cn(
          "text-foreground/80 hover:text-primary transition-all duration-200",
          mobile ? "text-lg py-2" : "hover:shadow-lg hover:scale-105"
        )}
      >
        {language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}
      </Link>
      <Link 
        to="/about" 
        className={cn(
          "text-foreground/80 hover:text-primary transition-all duration-200",
          mobile ? "text-lg py-2" : "hover:shadow-lg hover:scale-105"
        )}
      >
        {language === 'english' ? 'About' : 'পরিচিতি'}
      </Link>
    </>
  );
};

export default Navbar;
