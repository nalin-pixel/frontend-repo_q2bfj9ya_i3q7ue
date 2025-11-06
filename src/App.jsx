import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EditCraft — Image Editing Portfolio
      </footer>
    </div>
  );
}

export default App;
