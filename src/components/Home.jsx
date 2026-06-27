import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="bg-[#0A1E3F] text-white pt-24 pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[#1a56db] font-bold tracking-wider mb-4 text-sm uppercase">
            24/7 Plumbing Services inside Kathmandu valley
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Plumbing <span className="text-[#1a56db]">Solutions</span> You Can Trust
          </h1>
          <p className="text-gray-300 mb-10 text-lg">
            Fast, reliable & affordable plumbing services for your home or business in Tusal. From water purification to advanced pipe sectioning.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="bg-[#1a56db] text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition">
              Request A Quote
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#0A1E3F] transition">
              Our Services
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <span className="flex items-center gap-2"><Phone className="text-[#1a56db]" size={20}/> 24/7 Emergency</span>
            <span className="flex items-center gap-2"><CheckCircle className="text-[#1a56db]" size={20}/> 100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;