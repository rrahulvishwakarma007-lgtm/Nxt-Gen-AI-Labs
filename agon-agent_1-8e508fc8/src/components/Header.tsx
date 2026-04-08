import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ onBookDemo }: { onBookDemo: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b-0 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-orbitron font-bold">
          <Cpu className="text-accent" size={28} />
          <span>NxtGen<span className="text-accent">AI</span> Labs</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={onBookDemo} className="bg-accent text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors glow-effect">
            Book Demo
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-card mt-2 p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium p-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }} className="bg-accent text-black px-6 py-3 rounded-full font-semibold mt-2">
            Book Demo
          </button>
        </motion.div>
      )}
    </header>
  );
}