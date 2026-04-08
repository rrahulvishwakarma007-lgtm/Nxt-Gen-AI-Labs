import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    "Saves hours of manual work",
    "Reduces missed leads to zero",
    "Works 24/7, even on holidays",
    "Easy to use, no coding required",
    "Built specifically for Indian businesses"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="AI Technology" 
              className="rounded-2xl border border-white/10 glow-effect"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why Choose <span className="text-gradient">Us?</span>
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-accent" size={28} />
                  <span className="text-xl text-gray-300">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}