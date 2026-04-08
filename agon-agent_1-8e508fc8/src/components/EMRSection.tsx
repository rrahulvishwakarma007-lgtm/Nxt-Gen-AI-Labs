import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Smartphone, Shield, Zap, Users, Database } from 'lucide-react';

export default function EMRSection() {
  const features = [
    { icon: <Smartphone />, title: "Clinic in Your Pocket", desc: "Access patient records, appointments, and prescriptions from your mobile device anywhere, anytime." },
    { icon: <Zap />, title: "Lightning Fast", desc: "Write prescriptions in seconds with smart templates and AI-assisted autocomplete." },
    { icon: <Shield />, title: "Bank-Grade Security", desc: "Patient data is encrypted and securely stored following strict healthcare compliance standards." },
    { icon: <Users />, title: "Patient Portal", desc: "Patients can book appointments, view reports, and consult online through a dedicated portal." },
    { icon: <Database />, title: "Cloud Backup", desc: "Never lose a single record. Everything is automatically synced and backed up to the cloud." },
    { icon: <Activity />, title: "Analytics Dashboard", desc: "Track clinic revenue, patient footfall, and operational metrics in real-time." }
  ];

  return (
    <section id="emr-software" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-accent-purple/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent-purple/30 text-accent-purple mb-6">
                <Activity size={16} />
                <span className="text-sm font-medium tracking-wider uppercase">Flagship Product</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Entire Clinic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent">In Your Pocket</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Our next-generation Electronic Medical Records (EMR) software is designed specifically for modern doctors. Streamline your practice, reduce paperwork, and focus on what matters most — patient care.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feat.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-[400px]"
            >
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19] glow-effect">
                {/* Dynamic App UI Mockup */}
                <div className="absolute inset-0 bg-[#0A0A0A] p-6 flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-400">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 bg-white/50 rounded-sm"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center">
                      <Activity className="text-accent-purple" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Good Morning</div>
                      <div className="font-bold">Dr. Sharma</div>
                    </div>
                  </div>

                  <div className="glass-card bg-white/5 p-4 rounded-2xl mb-6 border-accent/20">
                    <div className="text-sm text-gray-400 mb-1">Today's Appointments</div>
                    <div className="text-3xl font-bold text-accent">24</div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="text-sm font-bold text-gray-400 mb-3">Next Patients</div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="glass-card p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                          <div>
                            <div className="font-bold text-sm">Patient Name</div>
                            <div className="text-xs text-gray-500">10:{i}0 AM</div>
                          </div>
                        </div>
                        <div className="text-accent text-xs">View</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Nav */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between px-2">
                    <div className="w-6 h-6 rounded bg-accent-purple"></div>
                    <div className="w-6 h-6 rounded bg-gray-800"></div>
                    <div className="w-6 h-6 rounded bg-gray-800"></div>
                    <div className="w-6 h-6 rounded bg-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements over phone */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 glass-card p-4 rounded-xl border-accent/30 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                  <div>
                    <div className="text-sm font-bold">Prescription Sent</div>
                    <div className="text-xs text-gray-400">via WhatsApp</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 bottom-32 glass-card p-4 rounded-xl border-accent-purple/30 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple"><Activity size={16}/></div>
                  <div>
                    <div className="text-sm font-bold">Records Synced</div>
                    <div className="text-xs text-gray-400">Cloud Backup Active</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}