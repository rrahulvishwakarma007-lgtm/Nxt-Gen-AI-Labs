import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "40%", label: "Avg ROI Increase" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  const projects = [
    {
      title: "Shekhar Raja Jewellers",
      category: "E-Commerce & Automation",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_2026-02-19-17-01-21-549_com.android.chrome.jpg",
      desc: "Complete digital transformation with an automated e-commerce suite, inventory sync, and AI-driven customer follow-ups.",
      tags: ["Web Design", "E-Commerce", "AI Follow-up"]
    },
    {
      title: "Urban Rituals Store",
      category: "Digital Storefront",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_19-2-2026_163440_urbnritual.store_.jpeg",
      desc: "Modern, high-converting lifestyle brand website with integrated delivery logistics and automated WhatsApp order tracking.",
      tags: ["UI/UX", "Logistics", "WhatsApp API"]
    },
    {
      title: "Confidential Clinic App",
      category: "Healthcare EMR",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_19-2-2026_165550_creatorapp.zoho_.in_.jpeg",
      desc: "Custom Electronic Medical Records (EMR) application streamlining patient data, prescriptions, and appointment scheduling.",
      tags: ["Healthcare", "Mobile App", "Security"]
    },
    {
      title: "Business Automation Setup",
      category: "Workflow AI",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_19-2-2026_165051_creatorapp.zoho_.in_.jpeg",
      desc: "End-to-end business process automation eliminating manual data entry and accelerating client onboarding.",
      tags: ["Automation", "AI", "CRM"]
    },
    {
      title: "Jewellery Collection UI",
      category: "Mobile Commerce",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_2026-02-19-17-01-42-057_com.android.chrome.jpg",
      desc: "Optimized mobile shopping experience for high-end retail, featuring dynamic product filtering and smooth checkout.",
      tags: ["Mobile UI", "Retail", "Conversion"]
    },
    {
      title: "Urban Rituals Catalog",
      category: "Product Showcase",
      image: "https://nxtgenailabs.work/wp-content/uploads/2026/02/Screenshot_19-2-2026_164613_urbnritual.store_.jpeg",
      desc: "Dynamic product catalog with real-time inventory synchronization and automated stock alerts.",
      tags: ["Catalog", "Inventory", "Sync"]
    }
  ];

  const capabilities = [
    "Intelligent Workflow Automation",
    "AI-Driven Process Optimization",
    "Healthcare CRM Automation",
    "AI Banking Workflow Engine",
    "Scalable Backend Architecture"
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-secondary/10">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header & Stats */}
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 text-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-medium tracking-wider uppercase">Our Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Work That Drives <span className="text-gradient">Results</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                We transform traditional businesses into automated powerhouses. Here is a glimpse of the systems we've built.
              </p>
            </motion.div>
          </div>

          <div className="flex gap-6 lg:gap-12 w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex-1 lg:flex-none"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-orbitron">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group overflow-hidden border-white/5 hover:border-accent/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video bg-[#1a1a1a]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full backdrop-blur-md border border-accent/20">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Capabilities Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-accent-purple/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-accent-purple/10 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 font-orbitron">Enterprise Automation Capabilities</h3>
              <p className="text-gray-400 mb-8 max-w-2xl">
                Beyond standard websites, we architect high-performance backend systems designed for scale, speed, and seamless AI integration.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="text-accent-purple shrink-0" size={18} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <a 
                href="https://nxtgenailabs.work/wp-content/uploads/2026/02/NxtGen_AI_Labs_Automation_Capabilities_Brochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-accent-purple text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all glow-effect group"
              >
                Download Brochure
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}