import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

export default function CTA({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Start Automating Your <br/> Business <span className="text-gradient">Today</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button onClick={onBookDemo} className="px-8 py-4 bg-accent text-black rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white transition-all glow-effect w-full sm:w-auto justify-center">
              <Calendar size={24} />
              Book Demo
            </button>
            <a href="https://wa.me/919098779146" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-black rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#20bd5a] transition-all w-full sm:w-auto justify-center">
              <MessageCircle size={24} />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}