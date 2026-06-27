import React from 'react';
import { Droplet, Search, Settings, Wrench } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#1a56db] font-bold uppercase text-sm mb-2">Our Services</p>
          <h2 className="text-4xl font-bold text-[#0A1E3F]">Complete Plumbing Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-transparent hover:border-[#1a56db] text-center">
            <Droplet className="mx-auto text-[#1a56db] mb-6" size={48} />
            <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">Water Treatment</h3>
            <p className="text-gray-600 text-sm">Comprehensive water testing and treatment solutions for safe drinking water.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-transparent hover:border-[#1a56db] text-center">
            <Settings className="mx-auto text-[#1a56db] mb-6" size={48} />
            <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">Toilet Installation</h3>
            <p className="text-gray-600 text-sm">Professional installation and repair for residential and commercial bathrooms.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-transparent hover:border-[#1a56db] text-center">
            <Search className="mx-auto text-[#1a56db] mb-6" size={48} />
            <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">Water Purification</h3>
            <p className="text-gray-600 text-sm">Advanced RO and UV filtration systems to remove impurities and protect your health.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-transparent hover:border-[#1a56db] text-center">
            <Wrench className="mx-auto text-[#1a56db] mb-6" size={48} />
            <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">Pipe Sectioning</h3>
            <p className="text-gray-600 text-sm">Expert pipe repair, rerouting, and C-sectioning for damaged plumbing systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;