import React from 'react';

const images = [
  {
    before: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2066&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?q=80&w=2132&auto=format&fit=crop',
    title: 'City Portrait Glow',
    desc: 'Skin retouching, tonal balance, cinematic color grade.'
  },
  {
    before: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2134&auto=format&fit=crop',
    title: 'Moody Landscape',
    desc: 'Atmospheric haze, contrast shaping, cool/warm split.'
  },
  {
    before: 'https://images.unsplash.com/photo-1516573988859-6ffdfb58af5c?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=2070&auto=format&fit=crop',
    title: 'Product Polish',
    desc: 'Dust cleanup, reflections, punchy highlights.'
  },
  {
    before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    title: 'Lifestyle Warmth',
    desc: 'Skin tones, warmth, and subtle film texture.'
  }
];

const BeforeAfterCard = ({ before, after, title, desc }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="aspect-[4/3] w-full">
        <div className="relative h-full w-full">
          <img
            src={before}
            alt={`${title} before`}
            className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-500 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={after}
            alt={`${title} after`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">Before → After</span>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Edits</h2>
          <p className="mt-3 text-gray-600">Hover over each image to reveal the transformation.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <BeforeAfterCard key={idx} {...img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
