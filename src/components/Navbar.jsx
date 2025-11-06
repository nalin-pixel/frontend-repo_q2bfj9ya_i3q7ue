import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-wide">EditCraft</a>
        <nav className="hidden gap-6 sm:flex">
          <a href="#gallery" className="text-sm text-white/80 hover:text-white">Gallery</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
