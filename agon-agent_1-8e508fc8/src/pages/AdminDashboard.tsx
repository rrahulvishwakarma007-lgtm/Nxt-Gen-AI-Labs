import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Users, LogOut, Lock, Mail, Phone, Building, Calendar, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [leads, setLeads] = useState<any[]>([]);
  const [fetchingLeads, setFetchingLeads] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchLeads(session.access_token);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchLeads(session.access_token);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchLeads = async (token: string) => {
    setFetchingLeads(true);
    try {
      const res = await fetch('/api/leads', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error('Failed to fetch leads');
      const data = await res.json();
      setLeads(data);
    } catch (err) {
      console.error(err);
    } finally {
      setFetchingLeads(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLeads([]);
  };

  if (loading) {
    return <div className="min-h-screen bg-primary flex items-center justify-center text-accent">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 w-full max-w-md border-accent/20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2 font-orbitron">Admin Access</h2>
          <p className="text-gray-400 text-center mb-8">Sign in to view your leads dashboard.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
            <button type="submit" className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-white transition-colors mt-4">
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Admin Header */}
      <header className="border-b border-white/10 bg-[#121212] py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="text-accent" />
            <h1 className="text-xl font-bold font-orbitron">NxtGen<span className="text-accent">AI</span> Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:block">{session.user.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Lead Management</h2>
            <p className="text-gray-400 text-sm">View and manage all demo requests.</p>
          </div>
          
          <div className="glass-card px-6 py-3 flex items-center gap-4 border-accent/20">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Total Leads</p>
              <p className="text-2xl font-bold">{leads.length}</p>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-card overflow-hidden border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-sm font-medium text-gray-300">
                  <th className="p-4 whitespace-nowrap"><Calendar size={16} className="inline mr-2 text-gray-500" />Date</th>
                  <th className="p-4 whitespace-nowrap"><Users size={16} className="inline mr-2 text-gray-500" />Name</th>
                  <th className="p-4 whitespace-nowrap"><Phone size={16} className="inline mr-2 text-gray-500" />Phone</th>
                  <th className="p-4 whitespace-nowrap"><Mail size={16} className="inline mr-2 text-gray-500" />Email</th>
                  <th className="p-4 whitespace-nowrap"><Building size={16} className="inline mr-2 text-gray-500" />Company</th>
                </tr>
              </thead>
              <tbody>
                {fetchingLeads ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-400">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-400">No demo requests yet.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="p-4 font-medium text-white whitespace-nowrap">{lead.name}</td>
                      <td className="p-4 text-gray-300 whitespace-nowrap">
                        <a href={`tel:${lead.phone}`} className="hover:text-accent transition-colors">{lead.phone}</a>
                      </td>
                      <td className="p-4 text-gray-300 whitespace-nowrap">
                        <a href={`mailto:${lead.email}`} className="hover:text-accent transition-colors">{lead.email}</a>
                      </td>
                      <td className="p-4 text-gray-400 whitespace-nowrap">{lead.company || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}