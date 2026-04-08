import React from 'react';
import { motion } from 'framer-motion';
import { Clock, PhoneOff, AlertTriangle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Clock size={40} className="text-red-400" />,
      title: "Slow Response",
      desc: "Minutes matter. Slow replies mean lost customers to competitors."
    },
    {
      icon: <PhoneOff size={40} className="text-orange-400" />,
      title: "Manual Calling",
      desc: "Wastes hours of your day trying to reach unqualified leads."
    },
    {
      icon: <AlertTriangle size={40} className="text-yellow-400" />,
      title: "No Tracking",
      desc: "Leads fall through the cracks without a proper system."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Businesses Don't Lose Leads — <br/>
            <span className="text-red-400">They Lose Follow-Ups</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
              <p className="text-gray-400">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}