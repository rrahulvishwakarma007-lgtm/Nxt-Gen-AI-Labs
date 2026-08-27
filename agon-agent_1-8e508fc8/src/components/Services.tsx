import { motion } from 'framer-motion';
import { 
  Smartphone, Code2, Globe, Stethoscope, ShoppingCart, 
  Truck, AppWindow, Zap, Users, MessageSquare, 
  BarChart3, Link2, Star
} from 'lucide-react';

const services = [
  {
    icon: <AppWindow size={24} />,
    title: "Application Development",
    price: "Custom Quote",
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/10",
    glowClass: "group-hover:shadow-accent/20",
    description:
      "Custom app designing & development for your business with high-tech AI support — built to your exact requirements at very affordable rates. Serving Jabalpur & worldwide.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Software Development",
    price: "Custom Quote",
    color: "purple",
    colorClass: "text-accent-purple border-accent-purple/30 bg-accent-purple/10",
    glowClass: "group-hover:shadow-accent-purple/20",
    description:
      "End-to-end software design & development tailored to your business and workflow requirements at very affordable rates — Jabalpur & worldwide.",
  },
  {
    icon: <Globe size={24} />,
    title: "Website Designing",
    price: "From ₹1,500",
    color: "blue",
    colorClass: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    glowClass: "group-hover:shadow-blue-400/20",
    description:
      "Full-coded, functional websites — not AI-generated templates. Real hand-crafted code with full potential, at the most affordable rates in Madhya Pradesh.",
    badge: "Most Popular",
  },
  {
    icon: <Stethoscope size={24} />,
    title: "EMR Software for Clinics",
    price: "From ₹2,000",
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/10",
    glowClass: "group-hover:shadow-accent/20",
    description:
      "Complete Electronic Medical Records system for clinics, nursing homes & diagnostic labs. Patient history, digital prescriptions, appointments, SMS reminders & billing — all in one.",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "Online Store & E-Commerce",
    price: "From ₹1,000",
    color: "purple",
    colorClass: "text-accent-purple border-accent-purple/30 bg-accent-purple/10",
    glowClass: "group-hover:shadow-accent-purple/20",
    description:
      "Full e-commerce websites for retail shops, fashion brands & grocery stores. Includes product catalogue, payment gateway, order management & customer dashboard.",
  },
  {
    icon: <Truck size={24} />,
    title: "Online Delivery Handling System",
    price: "From ₹2,300",
    color: "blue",
    colorClass: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    glowClass: "group-hover:shadow-blue-400/20",
    description:
      "End-to-end delivery management for restaurants, pharmacies & retail. Order tracking, delivery partner management, real-time status & customer notifications — fully automated.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    price: "From ₹5,000",
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/10",
    glowClass: "group-hover:shadow-accent/20",
    description:
      "Custom Android & iOS apps for businesses, clinics & startups. UI design, backend, API integration & Play Store/App Store deployment — scalable and high-performance.",
  },
  {
    icon: <Zap size={24} />,
    title: "Full Stack Custom Automation",
    price: "From ₹2,500",
    color: "purple",
    colorClass: "text-accent-purple border-accent-purple/30 bg-accent-purple/10",
    glowClass: "group-hover:shadow-accent-purple/20",
    description:
      "AI-powered business process automation. Automate repetitive tasks, workflows, data entry & operations. Reduce costs by up to 60% and boost team productivity.",
  },
  {
    icon: <Users size={24} />,
    title: "CRM System Development",
    price: "From ₹2,500",
    color: "blue",
    colorClass: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    glowClass: "group-hover:shadow-blue-400/20",
    description:
      "Custom CRM to track leads, manage client interactions, automate follow-ups & monitor sales pipeline. Replace spreadsheets with a powerful tool built for your workflow.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "WhatsApp & Chatbot Automation",
    price: "From ₹600",
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/10",
    glowClass: "group-hover:shadow-accent/20",
    description:
      "Automated WhatsApp Business messaging & AI chatbots for support, lead qualification, appointments & order updates. Available 24/7, integrates with your website & CRM.",
    badge: "Best Value",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Business Intelligence & Reporting",
    price: "From ₹1,500",
    color: "purple",
    colorClass: "text-accent-purple border-accent-purple/30 bg-accent-purple/10",
    glowClass: "group-hover:shadow-accent-purple/20",
    description:
      "Custom dashboards, analytics & automated reporting for data-driven decisions. Real-time insights on sales, operations, leads & revenue — from multiple sources in one platform.",
  },
  {
    icon: <Link2 size={24} />,
    title: "API & Third-Party Integration",
    price: "From ₹2,500",
    color: "blue",
    colorClass: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    glowClass: "group-hover:shadow-blue-400/20",
    description:
      "Seamlessly connect payment gateways, logistics, ERP, CRM & social media into one unified system. Razorpay, Shiprocket, Zoho, Tally & custom API development available.",
  },
  {
    icon: <Star size={24} />,
    title: "One Tap Review System",
    price: "₹499",
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/10",
    glowClass: "group-hover:shadow-accent/20",
    description:
      "Boost your Google Maps ranking with a one-tap review system for your business. Get more 5-star Google reviews effortlessly and dominate local search results.",
    badge: "₹499 Flat",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent opacity-5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-purple opacity-5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 text-accent mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium tracking-wider uppercase">What We Build</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            From ₹499 smart tools to full-stack custom platforms — everything your business needs to go digital, grow local, and scale global.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer shadow-xl ${service.glowClass} hover:shadow-2xl flex flex-col`}
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${service.colorClass}`}>
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.colorClass} transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug pr-12">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className={`text-sm font-bold ${service.colorClass.split(' ')[0]}`}>
                  {service.price}
                </span>
                <button
                  onClick={onBookDemo}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${service.colorClass} hover:opacity-90`}
                >
                  Get Started →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-3xl px-8 py-12 border border-accent/20 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-purple/5 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-3">📍 Jabalpur, Madhya Pradesh</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Not sure which service<br />
                <span className="text-gradient">fits your business?</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Book a free 15-minute consultation — we'll understand your business and recommend exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onBookDemo}
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-black rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white transition-all glow-effect group relative overflow-hidden"
                >
                  <span className="relative z-10">Book a Free Demo</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </button>
                <a
                  href="https://wa.me/919098779146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 glass-card rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-green-500/30 hover:border-green-500 text-green-400"
                >
                  💬 WhatsApp Us
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-6">📞 9098779146 · nxtgenailabs.work · Building Digital India, One Business at a Time.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
