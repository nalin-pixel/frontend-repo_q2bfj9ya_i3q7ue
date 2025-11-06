import React from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-lg ring-1 ring-white/10">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">About My Process</h2>
              <p className="mt-3 text-white/80">
                Every image is a story. I focus on clean, natural results—prioritizing skin fidelity, accurate color, and mood. My toolkit spans Lightroom, Photoshop, and advanced masking
                workflows. I collaborate closely with photographers and brands to achieve consistent visual identities across campaigns.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
                <li className="rounded-md bg-white/5 px-4 py-2">Non-destructive workflow</li>
                <li className="rounded-md bg-white/5 px-4 py-2">Precise color management</li>
                <li className="rounded-md bg-white/5 px-4 py-2">High-end skin retouching</li>
                <li className="rounded-md bg-white/5 px-4 py-2">Composite & cleanup artistry</li>
                <li className="rounded-md bg-white/5 px-4 py-2">Consistent brand look</li>
                <li className="rounded-md bg-white/5 px-4 py-2">Export-ready deliverables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
