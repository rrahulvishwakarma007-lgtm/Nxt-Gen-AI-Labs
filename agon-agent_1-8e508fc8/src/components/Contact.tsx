import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contact({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to automate your business? Visit our office or give us a call to start your free consultation.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info Cards */}
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-accent/20 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Office</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Shanti Nagar, Damoh Naka Street 15,<br/>
                    Jabalpur, Madhya Pradesh
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/vyn38sJMNWekFzZ26" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                  >
                    View on Maps <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <a href="tel:+919098779146" className="text-gray-400 hover:text-accent transition-colors">
                  +91 9098779146
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold mb-1">Working Hours</h3>
                <p className="text-gray-400">Mon - Sat: 10 AM - 7 PM</p>
              </motion.div>
            </div>
          </div>

          {/* Action Card / Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="glass-card p-8 md:p-12 h-full flex flex-col justify-center items-center text-center border-accent-purple/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-purple/10"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/10">
                  <Mail size={32} className="text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 font-orbitron">Ready to Scale?</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Let's discuss how AI and automation can completely transform your business operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={onBookDemo}
                    className="px-8 py-4 bg-accent text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-all glow-effect"
                  >
                    Start Free Consultation
                  </button>
                  <a 
                    href="tel:+919098779146"
                    className="px-8 py-4 glass-card rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/20"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}