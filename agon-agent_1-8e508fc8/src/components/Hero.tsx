import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Activity, Layout } from 'lucide-react';

export default function Hero({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-glow">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent opacity-10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple opacity-10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 text-accent mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-medium tracking-wider uppercase">Next-Gen Automation & Software</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              Transform Your <br className="hidden md:block"/>
              <span className="text-gradient">Clinic & Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              From our flagship <strong className="text-white">EMR App</strong> that puts your entire clinic in your pocket, to high-converting websites and AI lead automation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button onClick={onBookDemo} className="w-full sm:w-auto px-8 py-4 bg-accent text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all glow-effect group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
              </button>
              <a href="#emr-software" className="w-full sm:w-auto px-8 py-4 glass-card rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-accent-purple/30 hover:border-accent-purple">
                <Activity size={20} className="text-accent-purple" />
                Explore EMR
              </a>
            </div>
          </motion.div>

          {/* Robot Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Glowing orb behind robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/40 rounded-full blur-[80px] animate-pulse"></div>
            
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/20 glow-effect bg-black"
            >
              <div 
                className="w-full aspect-video"
                dangerouslySetInnerHTML={{
                  __html: `
                    <video 
                      autoplay 
                      loop 
                      muted 
                      playsinline 
                      webkit-playsinline="true"
                      x5-playsinline="true"
                      class="object-cover w-full h-full pointer-events-none"
                    >
                     <source src="/designarena_video_faxh1akt.mp4" type="video/mp4" />
                    </video>
                  `
                }}
              />
            </motion.div>

            {/* Floating UI elements around robot */}
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 glass-card p-4 rounded-xl border-accent/30 shadow-xl z-20 hidden md:flex items-center gap-3 backdrop-blur-md"
            >
              <Activity className="text-accent" />
              <div>
                <div className="text-sm font-bold">System Active</div>
                <div className="text-xs text-accent">100% Optimized</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-1/4 glass-card p-4 rounded-xl border-accent-purple/30 shadow-xl z-20 hidden md:flex items-center gap-3 backdrop-blur-md"
            >
              <Layout className="text-accent-purple" />
              <div>
                <div className="text-sm font-bold">AI Processing</div>
                <div className="text-xs text-accent-purple">Analyzing Data...</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Floating tech badges */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Activity className="text-accent-purple" />, text: "EMR Software" },
            { icon: <Layout className="text-blue-400" />, text: "Web Design" },
            { icon: <Play className="text-accent" />, text: "AI Automation" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card py-4 px-6 flex items-center justify-center gap-3 border-white/5 hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <span className="font-semibold text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
