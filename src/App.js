import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery'; // 1. Import your new Gallery component
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery /> {/* 2. This inserts the gallery pictures right here! */}
      <Contact />
    </div>
  );
}

export default App;