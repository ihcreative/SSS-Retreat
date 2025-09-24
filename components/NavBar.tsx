import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Second Spring Logo" className="w-8 h-8" />
          <span className="font-header-script text-2xl text-[#6A8159]">
            Second Spring
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-[#5c5552] tracking-wide">
          <li><a href="/" className="hover:text-[#F9A870] transition">Retreat Home</a></li>
          <li><a href="/retreat-guide" className="hover:text-[#F9A870] transition">Retreat Guide</a></li>
          <li>
            <a href="https://melbyrdrocks.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-[#F9A870] transition">
              Melle’s Coaching
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;