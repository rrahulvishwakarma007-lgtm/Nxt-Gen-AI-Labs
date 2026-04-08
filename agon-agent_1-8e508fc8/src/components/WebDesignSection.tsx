import React from 'react';
import { motion } from 'framer-motion';
import { Layout, MonitorSmartphone, Code2, Rocket, Paintbrush, Search } from 'lucide-react';

export default function WebDesignSection() {
  const features = [
    { icon: <MonitorSmartphone />, title: "Fully Responsive", desc: "Flawless experience across desktop, tablet, and mobile devices." },
    { icon: <Rocket />, title: "High Performance", desc: "Lightning-fast load times optimized for Core Web Vitals." },
    { icon: <Paintbrush />, title: "Premium UI/UX", desc: "Modern, aesthetic designs that build trust and convert visitors." },
    { icon: <Search />, title: "SEO Optimized", desc: "Built with best practices to rank higher on Google search results." }
  ];

  return (
    <section id="web-design" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
              <Layout size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Web Development</span>
            </h2>
            <p className="text-xl text-gray-400">
              We don't just build websites; we engineer digital experiences. From corporate portals to full-scale e-commerce stores, we build platforms that scale your business.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Code/Design Visualizer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden border-white/10 shadow-2xl">
              {/* Browser Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 bg-black/50 rounded text-xs text-gray-500 px-3 py-1 flex-1 text-center font-mono">
                  www.yourbusiness.com
                </div>
              </div>
              
              {/* Code Editor Mockup */}
              <div className="p-6 bg-[#0d1117] font-mono text-sm overflow-hidden h-[300px] relative">
                <div className="text-blue-400">import <span className="text-white">{'{'}</span> motion <span className="text-white">{'}'}</span> from <span className="text-green-400">'framer-motion'</span>;</div>
                <div className="text-blue-400 mt-2">export default function <span className="text-yellow-200">Hero</span>() {'{'}</div>
                <div className="text-gray-400 ml-4 mt-2">{'// High converting digital storefront'}</div>
                <div className="text-purple-400 ml-4 mt-1">return (</div>
                <div className="text-gray-300 ml-8 mt-1">{'<motion.div'}</div>
                <div className="text-blue-300 ml-12">initial=<span className="text-yellow-200">{'{'}</span> opacity: <span className="text-orange-400">0</span> <span className="text-yellow-200">{'}'}</span></div>
                <div className="text-blue-300 ml-12">animate=<span className="text-yellow-200">{'{'}</span> opacity: <span className="text-orange-400">1</span> <span className="text-yellow-200">{'}'}</span></div>
                <div className="text-gray-300 ml-12">{'>'}</div>
                <div className="text-white ml-16 mt-1">{'<h1 className="text-6xl font-bold">'}</div>
                <div className="text-white ml-20">Scale Your Business Faster</div>
                <div className="text-white ml-16">{'</h1>'}</div>
                <div className="text-gray-300 ml-8 mt-1">{'</motion.div>'}</div>
                <div className="text-purple-400 ml-4">)</div>
                <div className="text-white">{'}'}</div>

                {/* Overlay gradient to fade out bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl border-blue-500/30 flex items-center gap-3 bg-gray-900/90 hidden md:flex">
              <Code2 className="text-blue-400" />
              <div>
                <div className="text-sm font-bold">Modern Tech Stack</div>
                <div className="text-xs text-gray-400">React • Node.js • Tailwind</div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{feat.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}