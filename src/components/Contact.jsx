import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // This demo form just simulates a send
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s work together</h2>
          <p className="mt-3 text-white/80">Share a link to your images and a brief about the desired look.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl bg-white/5 p-6 shadow ring-1 ring-white/10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input type="text" required className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input type="email" required className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/80">Image Link / Brief</label>
              <textarea rows={4} required className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Share URLs and the style you’re after" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 font-medium text-gray-900 hover:bg-gray-100 transition">
              <Mail className="h-4 w-4" /> Send Inquiry
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
