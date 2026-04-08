import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Activity, Layout, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PhoneCall size={32} className="text-accent" />,
      title: "AI Lead Follow-Up Automation",
      desc: "Instantly engage leads with automated human-like calls and WhatsApp replies. Never let a prospect go cold.",
      colSpan: "md:col-span-2"
    },
    {
      icon: <Activity size={32} className="text-accent-purple" />,
      title: "EMR Software",
      desc: "Electronic Medical Records. Your entire clinic in your pocket, streamlined and secure.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Layout size={32} className="text-blue-400" />,
      title: "Website Design & Dev",
      desc: "Modern, responsive, and high-converting business websites tailored to your brand.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <ShoppingCart size={32} className="text-green-400" />,
      title: "Online Store Development",
      desc: "Full-scale e-commerce solutions with integrated delivery handling and payment gateways.",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Our <span className="text-gradient">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 hover:-translate-y-2 transition-transform duration-300 ${srv.colSpan}`}
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
              <p className="text-gray-400 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}