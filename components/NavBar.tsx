import React from 'react';
import { COLORS } from '../config';

const NavBar: React.FC = () => {
  // Smooth scroll handler for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50" style={{ height: '80px', borderColor: COLORS.warmGray }}>
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between h-full">
        
        {/* Logo */}
        <a href="#" onClick={scrollToTop} className="flex items-center">
          <img src="logo1.png" alt="Second Spring Sisterhood Logo" className="h-[60px] w-auto" />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#welcome" 
            onClick={e => handleScroll(e, 'welcome')}
            className="text-sm font-medium hover:underline transition"
            style={{ color: COLORS.primaryText }}
          >
            About
          </a>
           <a 
            href="#flow" 
            onClick={e => handleScroll(e, 'flow')}
            className="text-sm font-medium hover:underline transition"
            style={{ color: COLORS.primaryText }}
          >
            The Vibe
          </a>
          <a 
            href="#included" 
            onClick={e => handleScroll(e, 'included')}
            className="text-sm font-medium hover:underline transition"
            style={{ color: COLORS.primaryText }}
          >
            What's Included
          </a>
          {/* Retreat Guide link */}
          <a 
            href="#retreat-guide" 
            onClick={e => handleScroll(e, 'retreat-guide')}
            className="text-sm font-medium hover:underline transition"
            style={{ color: COLORS.primaryText }}
          >
            Rhythm of the day
          </a>
          <a 
  href="#Rhythm" 
  onClick={e => handleScroll(e, 'Rhythm of the day')}
  className="text-sm font-medium hover:underline transition"
  style={{ color: COLORS.primaryText }}
> 
          </a>
          {/* CTA Button */}
          <a 
            href="https://forms.gle/utvALEbGc1ihbFiZA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#4d2053] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: COLORS.plum }}
          >
  Save My Spot
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
