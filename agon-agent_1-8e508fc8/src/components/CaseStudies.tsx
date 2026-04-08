import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Landmark, HeartPulse, ShoppingBag, ArrowRight, CheckCircle2, AlertCircle, TrendingUp, Zap } from 'lucide-react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      id: "real-estate",
      icon: <Building2 />,
      title: "Real Estate Lead & Workflow Automation",
      industry: "Real Estate / Property Management",
      challenges: [
        "Manual lead follow-ups",
        "Inconsistent client communication",
        "Fragmented sales tracking",
        "Delayed deal closures"
      ],
      architecture: [
        "Automated lead qualification system",
        "Intelligent follow-up triggers",
        "CRM workflow synchronization",
        "Centralized reporting dashboard"
      ],
      results: [
        { value: "40%", label: "Faster Lead Conversion" },
        { value: "30%", label: "Reduction in Response Time" },
        { value: "100%", label: "Improved Sales Visibility" }
      ],
      impact: "Streamlined property sales workflow with automation-driven lead management infrastructure."
    },
    {
      id: "fintech",
      icon: <Landmark />,
      title: "Financial Workflow Automation",
      industry: "FinTech / Banking Operations",
      challenges: [
        "Manual KYC processing",
        "Delayed onboarding approvals",
        "Compliance documentation errors",
        "Fragmented workflow systems"
      ],
      architecture: [
        "Rule-based validation engine",
        "Event-driven approval workflows",
        "Compliance orchestration framework",
        "Centralized audit log system"
      ],
      results: [
        { value: "60%", label: "Reduction in Onboarding Time" },
        { value: "45%", label: "Decrease in Documentation Errors" },
        { value: "100%", label: "Workflow Traceability" }
      ],
      impact: "Secured and accelerated financial operations, ensuring rapid compliance and seamless customer onboarding."
    },
    {
      id: "healthcare",
      icon: <HeartPulse />,
      title: "Healthcare Operations Automation",
      industry: "Healthcare Network",
      challenges: [
        "Manual appointment coordination",
        "Paper-based reporting",
        "Billing delays",
        "High administrative workload"
      ],
      architecture: [
        "Centralized patient workflow engine",
        "Automated scheduling triggers",
        "Billing synchronization layer",
        "Real-time reporting dashboard"
      ],
      results: [
        { value: "50%", label: "Reduction in Admin Workload" },
        { value: "35%", label: "Faster Billing Cycle" },
        { value: "24/7", label: "Improved Patient Coordination" }
      ],
      impact: "Enhanced operational visibility and reduced dependency on manual administrative processes."
    },
    {
      id: "ecommerce",
      icon: <ShoppingBag />,
      title: "Urban Rituals Enterprise Automation",
      industry: "E-Commerce / D2C Streetwear",
      summary: "Scaling a premium D2C streetwear brand through intelligent automation architecture. Required operational restructuring to manage inventory scaling, limited-edition drops, and backend inefficiencies.",
      challenges: [
        "Manual multi-variant inventory coordination",
        "Order processing delays during peak drop cycles",
        "High inbound inquiry dependency",
        "Fragmented backend workflow structure"
      ],
      architecture: [
        "Centralized inventory orchestration layer",
        "Event-driven order workflow automation",
        "Backend process synchronization engine",
        "Conversion-optimized commerce framework",
        "Integrated customer communication triggers"
      ],
      comparison: [
        { metric: "Manual Workload", before: "3 hrs/day", after: "1.8 hrs/day" },
        { metric: "Order Processing", before: "Standard Speed", after: "30% Faster" },
        { metric: "Inventory Errors", before: "Frequent", after: "0 Errors" }
      ],
      results: [
        { value: "40%", label: "Workload Reduction" },
        { value: "30%", label: "Processing Speed Increase" },
        { value: "Zero", label: "Inventory Discrepancies" }
      ],
      impact: "The deployed automation ecosystem repositioned Urban Rituals with scalable infrastructure, operational control, and measurable efficiency gains. Transitioned from manual-dependent to a structured, scalable framework designed for sustained growth."
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent-purple/30 text-accent-purple mb-6">
              <TrendingUp size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">Enterprise Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real-world examples of how our automation architecture transforms operational bottlenecks into scalable growth engines.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {cases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeTab === idx 
                    ? 'bg-white/10 border-accent shadow-[0_0_20px_rgba(0,229,255,0.15)]' 
                    : 'glass-card border-transparent hover:border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeTab === idx ? 'bg-accent text-black' : 'bg-white/5 text-gray-400'}`}>
                  {item.icon}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeTab === idx ? 'text-accent' : 'text-gray-500'}`}>
                    {item.industry.split('/')[0]}
                  </div>
                  <div className={`font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>
                    {item.title.replace(' Case Study', '')}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-10 border-white/10 h-full flex flex-col"
              >
                <div className="mb-8">
                  <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block border border-white/10">
                    {cases[activeTab].industry}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{cases[activeTab].title}</h3>
                  {cases[activeTab].summary && (
                    <p className="text-gray-400 leading-relaxed border-l-2 border-accent pl-4 italic">
                      {cases[activeTab].summary}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Challenges */}
                  <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/10">
                    <h4 className="flex items-center gap-2 text-red-400 font-bold mb-4">
                      <AlertCircle size={18} /> Operational Challenges
                    </h4>
                    <ul className="space-y-3">
                      {cases[activeTab].challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-red-400 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                    <h4 className="flex items-center gap-2 text-accent font-bold mb-4">
                      <Zap size={18} /> Automation Deployed
                    </h4>
                    <ul className="space-y-3">
                      {cases[activeTab].architecture.map((arch, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          {arch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Optional Comparison Table (For Urban Rituals) */}
                {cases[activeTab].comparison && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-white/5 text-gray-300 font-bold">
                        <tr>
                          <th className="px-6 py-3 border-b border-white/10">Performance Metric</th>
                          <th className="px-6 py-3 border-b border-white/10 text-red-300">Before</th>
                          <th className="px-6 py-3 border-b border-white/10 text-accent">After Automation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cases[activeTab].comparison.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 bg-black/20">
                            <td className="px-6 py-3 font-medium text-white">{row.metric}</td>
                            <td className="px-6 py-3 text-gray-400">{row.before}</td>
                            <td className="px-6 py-3 font-bold text-accent">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Results Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cases[activeTab].results.map((res, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-orbitron">{res.value}</div>
                      <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider leading-tight">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Business Impact */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Business Impact</h4>
                  <p className="text-lg text-white font-medium leading-relaxed">
                    {cases[activeTab].impact}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}