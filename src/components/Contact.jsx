import React, { useState } from 'react';
import { MapPin, Phone, Mail, Droplet } from 'lucide-react';

const Contact = () => {
  // Your WhatsApp number (without the plus)
  const whatsappNumber = "9779849288255"; 

  // 1. Setup state to remember what the user types
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // 2. Update state when they type
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. What happens when they click "Send Message"
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Format the message nicely for WhatsApp
    const whatsappText = `Hello AquaPro Plumbing!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Issue:* ${formData.message}`;
    
    // Create the final link
    const finalLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
    
    // Open WhatsApp in a new tab
    window.open(finalLink, '_blank');
  };

  return (
    <footer id="contact" className="bg-[#0A1E3F] text-white pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        
        {/* Info Side */}
        <div>
          <div className="flex items-center gap-2 font-bold text-3xl mb-6">
            <Droplet className="text-[#1a56db]" size={36} />
            <span>AquaPro</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md">
            Providing reliable, professional, and affordable plumbing services for homes and businesses across Kathmandu.
          </p>
          
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-4">
              <MapPin className="text-[#1a56db]" size={20} />
              <span>Tusal, Kathmandu, Bagmati Province, Nepal</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="text-[#1a56db]" size={20} />
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#25D366] transition cursor-pointer"
              >
                +977 984-928-8255
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="text-[#1a56db]" size={20} />
              <a href="mailto:info@aquapro.com.np" className="hover:text-[#1a56db] transition">
                info@aquapro.com.np
              </a>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-[#112852] p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Need Plumbing Help?</h3>
          <p className="text-[#1a56db] font-semibold mb-6">We're Just A Call Away!</p>
          
          {/* Form updated with onSubmit handler */}
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4 flex flex-col">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="bg-[#0A1E3F] border border-[#1e3a75] p-3 rounded text-white focus:outline-none focus:border-[#1a56db]"
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number" 
              required
              className="bg-[#0A1E3F] border border-[#1e3a75] p-3 rounded text-white focus:outline-none focus:border-[#1a56db]"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?" 
              rows="4" 
              required
              className="bg-[#0A1E3F] border border-[#1e3a75] p-3 rounded text-white focus:outline-none focus:border-[#1a56db]"
            ></textarea>
            
            <div className="flex flex-col gap-3 mt-2">
              <button 
                type="submit" 
                className="bg-[#1a56db] text-white font-bold py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2026 AquaPro Plumbing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;