import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function Demo({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-16 border-accent/20 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-accent/5"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">See It In Action</h2>
            <p className="text-xl text-gray-300 mb-10">
              Watch how our AI system captures, engages, and converts leads on autopilot while you sleep.
            </p>
            
            <div className="aspect-video bg-black/50 rounded-2xl border border-white/10 flex items-center justify-center mb-10 cursor-pointer group hover:border-accent/50 transition-colors">
              <PlayCircle size={80} className="text-accent/50 group-hover:text-accent transition-colors" />
            </div>
            
            <button onClick={onBookDemo} className="px-8 py-4 bg-accent text-black rounded-full font-bold text-lg hover:bg-white transition-all glow-effect">
              Watch Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}