import React from 'react';
import { Droplet } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-[#0A1E3F] font-bold text-2xl">
          <Droplet className="text-[#1a56db]" size={32} />
          <span>AquaPro Plumbing</span>
        </a>
        
        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#home" className="text-[#0A1E3F] hover:text-[#1a56db] transition">Home</a>
          <a href="#about" className="text-[#0A1E3F] hover:text-[#1a56db] transition">About</a>
          <a href="#services" className="text-[#0A1E3F] hover:text-[#1a56db] transition">Services</a>
          <a href="#gallery" className="text-[#0A1E3F] hover:text-[#1a56db] transition">Gallery</a>
          <a href="#contact" className="text-[#0A1E3F] hover:text-[#1a56db] transition">Contact</a>
        </nav>

        {/* Call to Action */}
        <a href="#contact" className="hidden md:block bg-[#1a56db] text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition">
          Get A Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;