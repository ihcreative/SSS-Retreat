import React from 'react';

const NavBar: React.FC = () => {
  // Smooth scroll handler for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-sage-200 z-50" style={{ height: '80px' }}>
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between h-full">
        
        {/* Logo: increased size ~12%, vertically aligned */}
        <a href="/" className="flex items-center" style={{ lineHeight: '1' }}>
          <span className="font-header-script text-[2.25rem] text-[#6A8159] leading-none">
            Second Spring Sisterhood
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {/* Retreat Guide link - medium weight, hover underline, right next to button */}
          <a 
            href="#retreat-guide" 
            onClick={e => handleScroll(e, 'retreat-guide')}
            className="text-sm font-medium text-[#5c5552] hover:underline transition"
          >
            Retreat Guide
          </a>

          {/* CTA Button - pill shape, branded color, larger padding, hover darker */}
          <a 
            href="#save-my-spot" 
            onClick={e => handleScroll(e, 'save-my-spot')}
            className="bg-[#6A8159] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#587047] transition"
            style={{ minWidth: '140px' }}
          >
            Save My Spot
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
