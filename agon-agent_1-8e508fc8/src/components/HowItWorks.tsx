import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { title: "Lead Comes In", desc: "From your website, ads, or social media." },
    { title: "System Captures Data", desc: "Instantly logs details into your CRM." },
    { title: "AI Calls Instantly", desc: "Within seconds, an AI voice engages the prospect." },
    { title: "WhatsApp Follow-up", desc: "Automated personalized messages sent." },
    { title: "Conversion", desc: "Lead is qualified and ready to close." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          How It <span className="text-gradient">Works</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 mb-8 relative"
            >
              {/* Timeline line */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-[-2rem] w-px bg-accent/30"></div>
              )}
              
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-bold shrink-0 z-10">
                {idx + 1}
              </div>
              
              <div className="glass-card p-6 flex-1 hover:border-accent/30 transition-colors">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}