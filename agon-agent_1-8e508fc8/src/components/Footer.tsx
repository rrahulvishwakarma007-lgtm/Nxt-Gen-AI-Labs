import React from 'react';
import { Cpu, Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-2xl font-orbitron font-bold mb-4">
              <Cpu className="text-accent" size={28} />
              <span>NxtGen<span className="text-accent">AI</span> Labs</span>
            </a>
            <p className="text-gray-400 text-lg mb-6 max-w-sm">
              Where AI Meets Business. Automate your operations and scale faster with next-generation technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-accent" />
                <a href="tel:+919098779146" className="hover:text-white transition-colors">+91 9098779146</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} className="text-accent" />
                <a href="https://www.nxtgenailabs.work" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.nxtgenailabs.work</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                <span>info@nxtgenailabs.work</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NxtGenAI Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}