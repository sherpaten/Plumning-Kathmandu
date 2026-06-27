import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  // These are professional placeholder images. 
  // Later, you can put your own images in the "public" folder and replace these URLs with your filenames (e.g., "/my-photo.jpg")
  const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80", title: "Water Filtration System" },
    { id: 2, url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80", title: "Pipe Installation & C-Sectioning" },
    { id: 3, url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80", title: "Commercial Plumbing Fixes" },
    { id: 4, url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80", title: "Bathroom & Toilet Setup" },
    { id: 6, url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80", title: "Water Tank Maintenance" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1a56db] font-bold uppercase text-sm mb-2">Our Work Portfolio</p>
          <h2 className="text-4xl font-bold text-[#0A1E3F] flex items-center justify-center gap-2">
            <Camera className="text-[#1a56db]" size={32} />
            Recent Projects in Kathmandu
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Take a look at some of our recent plumbing installations, repairs, and water purification setups completed by our expert team.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-md h-72 bg-gray-100 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              
              {/* Hover Dark Overlay and Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/90 via-[#0A1E3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div>
                  <span className="text-[#1a56db] text-xs font-bold uppercase tracking-wider block mb-1">
                    AquaPro Job
                  </span>
                  <h4 className="text-white text-lg font-bold">
                    {image.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;