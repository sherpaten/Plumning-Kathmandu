import React from 'react';
import { Users, Clock, Tag } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#1a56db] font-bold uppercase text-sm mb-2">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-[#0A1E3F] mb-6">Why Homeowners in Nepal Choose AquaPro</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are committed to providing top-quality plumbing services with honesty, integrity, and professionalism. Serving Tusal and the greater Kathmandu valley with expert technicians you can rely on.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
              <Users className="text-[#1a56db]" size={24} />
              <p className="text-[#0A1E3F]"><strong>Expert Technicians:</strong> Highly trained professionals.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
              <Clock className="text-[#1a56db]" size={24} />
              <p className="text-[#0A1E3F]"><strong>Fast Response:</strong> Quick arrival for emergencies.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
              <Tag className="text-[#1a56db]" size={24} />
              <p className="text-[#0A1E3F]"><strong>Upfront Pricing:</strong> No hidden fees, honest quotes.</p>
            </div>
          </div>
        </div>
        
        {/* Placeholder for an image */}
        <div className="bg-slate-200 h-[500px] rounded-xl relative">
          <div className="absolute -bottom-6 -left-6 bg-[#1a56db] text-white p-6 rounded-full border-8 border-white text-center w-40 h-40 flex flex-col justify-center items-center">
            <span className="text-4xl font-bold">15+</span>
            <span className="text-xs uppercase font-semibold">Years Exp.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;