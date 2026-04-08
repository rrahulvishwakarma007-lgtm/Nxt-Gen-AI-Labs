import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Bot, MessageSquare, TrendingUp, ArrowRight, Cpu } from 'lucide-react';

export default function Solution() {
  const steps = [
    { icon: <UserPlus size={32} />, text: "Lead Comes" },
    { icon: <Bot size={32} className="text-accent" />, text: "AI Responds" },
    { icon: <MessageSquare size={32} className="text-accent-purple" />, text: "Follow-Up" },
    { icon: <TrendingUp size={32} className="text-green-400" />, text: "Conversion" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent mb-6">
              <Cpu size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Smart AI Automation <span className="text-gradient">That Works For You</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our intelligent robots work 24/7. They never sleep, never take breaks, and never miss a lead.
            </p>
          </motion.div>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Animated glowing orbs inside the card */}
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"
          ></motion.div>
          <motion.div 
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px]"
          ></motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent transition-all duration-300 shadow-lg group-hover:shadow-accent/20 relative overflow-hidden">
                    {/* Inner rotating glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45 scale-150"></div>
                    <div className="relative z-10">{step.icon}</div>
                  </div>
                  <h4 className="font-bold text-lg">{step.text}</h4>
                </motion.div>
                
                {idx < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.2) + 0.1 }}
                    className="hidden md:block text-gray-600 relative"
                  >
                    {/* Animated laser beam effect between steps */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-y-1/2 overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-full bg-accent shadow-[0_0_10px_#00E5FF]"
                      ></motion.div>
                    </div>
                    <ArrowRight size={32} className="relative z-10 bg-secondary rounded-full" />
                  </motion.div>
                )}
                {idx < steps.length - 1 && (
                  <div className="md:hidden text-gray-600 rotate-90 my-2">
                    <ArrowRight size={32} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}