import { motion } from 'framer-motion';
import { ChevronRight, Target, Zap, Globe } from 'lucide-react';

export default function About({ onBookDemo }: { onBookDemo?: () => void }) {
  const offerings = [
    "Clinic EMR Software & Mobile App",
    "Website Design for Clinics & Businesses",
    "Full Business Automation Systems",
    "AI Calling & Follow-up Automation",
    "Online Store + Delivery Systems"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20 border-y border-white/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-accent-purple/20 rounded-3xl blur-xl"></div>
              <div className="glass-card p-2 rounded-3xl relative">
                <img 
                  src="/IMG_20260101_154942.jpg" 
                  alt="Rahul Vishwakarma - Founder & CEO" 
                  className="rounded-[1.25rem] object-cover aspect-[4/5] w-full hover:scale-[1.02] transition-transform duration-500 bg-black/20"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl border-white/10 backdrop-blur-md bg-black/80">
                  <h3 className="text-2xl font-bold font-orbitron mb-1">Rahul Vishwakarma</h3>
                  <p className="text-accent text-sm font-medium uppercase tracking-wider">Founder & CEO, Nxt Gen AI Labs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 text-accent mb-6">
              <Target size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">Founder Story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Driven by <span className="text-gradient">Impact</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg font-light leading-relaxed mb-8">
              <p>
                At just 25, <strong className="text-white font-medium">Rahul Vishwakarma</strong> is on a mission to eliminate manual work that slows down clinics and small businesses across India.
              </p>
              <p>
                Based in Jabalpur, Madhya Pradesh, he founded Nxt Gen AI Labs with one clear goal — reduce paperwork, save time, and let businesses focus on real impact.
              </p>
              <p>
                Growing up around local clinics, Rahul saw doctors struggle daily — searching patient files, missing follow-ups, and dealing with chaotic records. Instead of accepting it, he decided to fix it. He learned coding, automation, and AI in his early twenties — not to get a job, but to build solutions.
              </p>
              <p>
                That vision turned into Nxt Gen AI Labs, where he launched EMR software that digitizes patient records, prescriptions, and workflows — making clinics faster, cleaner, and more efficient.
              </p>
              <div className="p-5 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-white my-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-purple"></div>
                <p className="italic relative z-10">
                  "In 2025, one clinic detected a critical patient risk using our EMR system — something their paper records missed. That moment proved my belief: automation doesn’t just save time — <strong className="text-accent-purple">it can save lives.</strong>"
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xl font-bold mb-4">What Nxt Gen AI Labs Offers:</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {offerings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <ChevronRight className="text-accent shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onBookDemo} 
                className="px-8 py-4 bg-accent text-black rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all glow-effect"
              >
                <Zap size={20} />
                Start Automation
              </button>
              <a 
                href="https://www.nxtgenailabs.work" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 glass-card rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10"
              >
                <Globe size={20} />
                Visit Website
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
