import { useState, useEffect } from 'react';
import { X, Loader2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', businessType: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('nxtgen_popup_seen');
    
    if (!hasSeenPopup && !hasTriggered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('nxtgen_popup_seen', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // 1. Save to database
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          company: formData.businessType,
          email: 'auto-popup@consultation.com' // Placeholder since email isn't required here
        })
      });
      
      if (!res.ok) throw new Error('Failed to save lead');
      
      setStatus('success');
      
      // 2. Redirect to WhatsApp after 1.5 seconds
      setTimeout(() => {
        const text = `Hi, I would like a free consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness Type: ${formData.businessType}`;
        const whatsappUrl = `https://wa.me/919098779146?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
      }, 1500);
      
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] p-6"
          >
            <div className="glass-card p-8 relative bg-[#121212] overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/20 rounded-full blur-[50px]"></div>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <X size={24} />
              </button>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  Get Free Consultation <span className="text-2xl">🚀</span>
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Let's discuss how we can automate your business. Enter your details to chat with us directly on WhatsApp.
                </p>
                
                {status === 'success' ? (
                  <div className="text-center py-8 text-[#25D366]">
                    <MessageCircle size={48} className="mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold">Redirecting to WhatsApp...</h4>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        required 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#25D366] text-white transition-colors" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                      />
                    </div>
                    <div>
                      <input 
                        required 
                        type="tel" 
                        placeholder="Phone Number (WhatsApp)" 
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#25D366] text-white transition-colors" 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                      />
                    </div>
                    <div>
                      <input 
                        required 
                        type="text" 
                        placeholder="Business Type / Industry" 
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#25D366] text-white transition-colors" 
                        value={formData.businessType} 
                        onChange={e => setFormData({...formData, businessType: e.target.value})} 
                      />
                    </div>
                    
                    {status === 'error' && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                    )}
                    
                    <button 
                      type="submit" 
                      disabled={status === 'loading'} 
                      className="w-full bg-[#25D366] text-black font-bold py-3 rounded-lg hover:bg-[#20bd5a] transition-colors flex justify-center items-center h-12 gap-2 mt-2"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          <MessageCircle size={20} />
                          Chat on WhatsApp
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}