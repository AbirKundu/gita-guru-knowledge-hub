
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/providers/LanguageProvider';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-card border-t border-border py-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-semibold">
              <span className="font-playfair">Gita</span>
              <span className="text-primary font-light">Guru</span>
            </Link>
            <p className="mt-4 text-foreground/70 text-sm">
              {language === 'english' 
                ? 'Exploring the timeless wisdom of the Bhagavad Gita for modern seekers.' 
                : 'আধুনিক সাধকদের জন্য ভগবদ্গীতার চিরন্তন জ্ঞান অন্বেষণ।'}
            </p>
            <p className="mt-2 text-foreground/70 text-sm">
              {language === 'english' 
                ? 'Created by ' 
                : 'নির্মাতা '}<span className="font-medium">Abir Kundu</span>
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">{language === 'english' ? 'Explore' : 'অন্বেষণ'}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Home' : 'হোম'}
              </Link></li>
              <li><Link to="/chapters" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Chapters' : 'অধ্যায়'}
              </Link></li>
              <li><Link to="/philosophy" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Philosophy' : 'দর্শন'}
              </Link></li>
              <li><Link to="/verses" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Key Verses' : 'মূল শ্লোক'}
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">{language === 'english' ? 'Resources' : 'সম্পদ'}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'About' : 'পরিচিতি'}
              </Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Commentaries' : 'ভাষ্য'}
              </a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Sanskrit Text' : 'সংস্কৃত পাঠ'}
              </a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Resources' : 'সম্পদসমূহ'}
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">{language === 'english' ? 'Connect' : 'যোগাযোগ'}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'abircse22@gmail.com' : 'abircse22@gmail.com'}
              </a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Mirpur DOHS' : 'মিরপুর ডিওএইচস'}
              </a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Avenue 2' : 'এভিনিউ ২'}
              </a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                {language === 'english' ? 'Road 12' : 'রোড ১২'}
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
  <p>
    © {new Date().getFullYear()} GitaGuru. {language === 'english' ? 'All rights reserved by' : 'সমস্ত অধিকার সংরক্ষিত'} <span className="text-primary font-semibold">Abir Kundu</span>.
  </p>
  <div className="mt-4 md:mt-0 flex space-x-4">
    <a href="#" className="hover:text-primary transition-colors duration-200">
      {language === 'english' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
    </a>
    <a href="#" className="hover:text-primary transition-colors duration-200">
      {language === 'english' ? 'Terms of Service' : 'পরিষেবার শর্তাবলী'}
    </a>
  </div>
</div>

<p className="mt-4 text-primary font-semibold hover:scale-105 transition-transform duration-1000 text-center text-sm md:text-base">
  {language === 'english' 
    ? 'This is my original creation — not for replication.' 
    : 'এটি আমার নিজস্ব একটি সৃষ্টি —  নকলের জন্য নয়।'}
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
