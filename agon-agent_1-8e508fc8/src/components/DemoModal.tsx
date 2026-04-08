import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', company: '' });
      }, 3000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] p-6"
          >
            <div className="glass-card p-8 relative bg-[#121212]">
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-2">Book a Demo</h3>
              <p className="text-gray-400 mb-6">Enter your details and we'll connect with you shortly.</p>
              
              {status === 'success' ? (
                <div className="text-center py-8 text-green-400">
                  <div className="text-5xl mb-4">✨</div>
                  <h4 className="text-xl font-bold">Request Received!</h4>
                  <p className="text-sm mt-2">We will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input required type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <input required type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <input type="text" placeholder="Company Name (Optional)" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  
                  {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
                  
                  <button type="submit" disabled={status === 'loading'} className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-white transition-colors flex justify-center items-center h-12">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}