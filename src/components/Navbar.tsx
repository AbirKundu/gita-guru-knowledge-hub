
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'english' | 'bengali'>('english');

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
        isScrolled ? 'glass py-4' : 'bg-transparent'
      )}
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
              <Languages size={18} className="text-foreground/70" />
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background glass pt-24 px-6 z-40 transition-transform duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <NavLinks language={language} mobile onClose={() => setIsMenuOpen(false)} />
          
          <div className="flex items-center space-x-2 pt-4 border-t border-border">
            <Languages size={18} className="text-foreground/70" />
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
      </div>
    </header>
  );
};

const NavLinks = ({ 
  mobile = false, 
  onClose,
  language 
}: { 
  mobile?: boolean; 
  onClose?: () => void;
  language: 'english' | 'bengali';
}) => {
  const handleClick = () => {
    if (mobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      <Link 
        to="/" 
        className="text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={handleClick}
      >
        {language === 'english' ? 'Home' : 'হোম'}
      </Link>
      <Link 
        to="/chapters" 
        className="text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={handleClick}
      >
        {language === 'english' ? 'Chapters' : 'অধ্যায়'}
      </Link>
      <Link 
        to="/philosophy" 
        className="text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={handleClick}
      >
        {language === 'english' ? 'Philosophy' : 'দর্শন'}
      </Link>
      <Link 
        to="/verses" 
        className="text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={handleClick}
      >
        {language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}
      </Link>
      <Link 
        to="/about" 
        className="text-foreground/80 hover:text-primary transition-colors duration-200"
        onClick={handleClick}
      >
        {language === 'english' ? 'About' : 'পরিচিতি'}
      </Link>
    </>
  );
};

export default Navbar;
