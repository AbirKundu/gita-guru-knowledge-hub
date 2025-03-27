
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
              Exploring the timeless wisdom of the Bhagavad Gita for modern seekers.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/chapters" className="text-foreground/70 hover:text-primary transition-colors duration-200">Chapters</Link></li>
              <li><Link to="/philosophy" className="text-foreground/70 hover:text-primary transition-colors duration-200">Philosophy</Link></li>
              <li><Link to="/verses" className="text-foreground/70 hover:text-primary transition-colors duration-200">Key Verses</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors duration-200">About</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Commentaries</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Sanskrit Text</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Newsletter</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Events</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} GitaGuru. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
