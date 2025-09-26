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
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="font-header-script text-2xl text-[#6A8159]">
            Second Spring Sisterhood
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-[#5c5552] tracking-wide">
          <li>
            <a 
              href="#retreat-home" 
              onClick={e => handleScroll(e, 'retreat-home')}
              className="hover:text-[#F9A870] transition"
            >
              Retreat Home
            </a>
          </li>
          <li>
            <a 
              href="#retreat-guide" 
              onClick={e => handleScroll(e, 'retreat-guide')}
              className="hover:text-[#F9A870] transition"
            >
              Retreat Guide
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a 
          href="#save-my-spot" 
          onClick={e => handleScroll(e, 'save-my-spot')}
          className="hidden md:inline-block bg-[#F9A870] text-white px-4 py-2 rounded shadow hover:bg-[#e0894a] transition font-semibold"
        >
          Save My Spot
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
