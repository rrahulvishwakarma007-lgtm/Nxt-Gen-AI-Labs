import supabase from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { name, phone, email, company } = req.body;
      const { data, error } = await supabase
        .from('leads')
        .insert({ name, phone, email, company })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }
    
    if (req.method === 'GET') {
      // Secure the GET route - require valid auth token
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ error: 'Unauthorized' });

      const { data: { user }, error: authError } = await supabase.auth.getUser(token);
      if (authError || !user) return res.status(401).json({ error: 'Invalid token' });

      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('id', { ascending: false });
      if (error) throw error;
      return res.status(200).json(data);
    }
    
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}