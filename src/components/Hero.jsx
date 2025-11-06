import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Camera className="h-4 w-4" />
            <span className="text-xs tracking-wide">Retouching • Color Grading • Compositing</span>
          </div>
          <h1 className="font-manrope text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Visual stories, meticulously edited
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            I craft clean, modern edits that highlight mood, texture, and narrative. Explore my favorite image transformations below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#gallery" className="rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow hover:bg-gray-100 transition">
              View Gallery
            </a>
            <a href="#contact" className="rounded-md border border-white/30 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
