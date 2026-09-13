import { useState, useEffect, useRef } from 'react';

// ─── Design tokens ──────────────────────────────────────────────────────────
// Navy #050E1F base · Electric blue #2563EB accent · Slate #8B9EC7 muted
// Inter throughout — weight is the type system

// ─── Sub-components (inlined so this is a single-file drop-in) ──────────────

function NavBar({ onBookDemo }: { onBookDemo: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(5,14,31,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,158,199,0.12)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, background: '#2563EB', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3.5" fill="white" />
              <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.41 1.41M12.37 12.37l1.41 1.41M12.37 5.63l-1.41 1.41M5.63 12.37l-1.41 1.41" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em', color: '#F8FAFF' }}>NxtGen AI Labs</span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Services', 'Portfolio', 'Case studies', 'About'].map(label => (
            <a key={label} href={`#${label.toLowerCase().replace(' ', '-')}`}
              style={{ fontSize: 14, fontWeight: 450, color: '#8B9EC7', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8B9EC7')}
            >{label}</a>
          ))}
        </nav>

        <button onClick={onBookDemo}
          style={{ background: '#2563EB', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
          onMouseLeave={e => (e.currentTarget.style.background = '#2563EB')}
        >Book a demo</button>
      </div>
    </header>
  );
}

// Floating badge — reusable chip shown over the video
function FloatingBadge({ style, icon, label, sub, subColor }: {
  style: React.CSSProperties;
  icon: React.ReactNode;
  label: string;
  sub: string;
  subColor: string;
}) {
  return (
    <div style={{
      position: 'absolute', zIndex: 20,
      background: 'rgba(5,14,31,0.82)', backdropFilter: 'blur(14px)',
      border: '1px solid rgba(139,158,199,0.18)', borderRadius: 12,
      padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      ...style,
    }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#F8FAFF', lineHeight: 1 }}>{label}</div>
        <div style={{ fontSize: 11, color: subColor, marginTop: 3, fontWeight: 500 }}>{sub}</div>
      </div>
    </div>
  );
}

function HeroSection({ onBookDemo }: { onBookDemo: () => void }) {
  // Subtle float keyframes injected once
  const floatStyle = `
    @keyframes floatA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
    @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(12px)} }
    @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.6} }
    @keyframes ping   { 0%{transform:scale(1);opacity:1} 75%,100%{transform:scale(2);opacity:0} }
  `;

  const techBadges = [
    { icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ), text: 'EMR Software' },
    { icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      ), text: 'Web Design' },
    { icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      ), text: 'AI Automation' },
  ];

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem', paddingTop: 68, position: 'relative', overflow: 'hidden' }}>
      <style>{floatStyle}</style>

      {/* Background glow orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 480, height: 480, background: 'rgba(37,99,235,0.09)', borderRadius: '50%', filter: 'blur(100px)', animation: 'pulse 4s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: 400, height: 400, background: 'rgba(124,106,245,0.08)', borderRadius: '50%', filter: 'blur(100px)', animation: 'pulse 4s ease-in-out infinite 2s', pointerEvents: 'none' }} />
      {/* Subtle grid overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%,#000 60%,transparent 100%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* ── Left: text content ── */}
          <div>
            {/* Pill badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 100, padding: '7px 16px', marginBottom: 32 }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: 10, height: 10 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#34D399', animation: 'ping 1.4s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.75 }} />
                <span style={{ position: 'relative', width: 10, height: 10, borderRadius: '50%', background: '#34D399', display: 'inline-flex' }} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#60A5FA', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next-gen automation & software</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 4.2vw, 58px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 24px' }}>
              Transform Your<br />
              <span style={{ color: '#2563EB' }}>Clinic & Business</span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.75, color: '#8B9EC7', margin: '0 0 40px', maxWidth: 480 }}>
              From our flagship <strong style={{ color: '#F8FAFF', fontWeight: 600 }}>EMR app</strong> that puts your entire clinic in your pocket, to high-converting websites, mobile apps, and AI-powered automation.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={onBookDemo}
                style={{ background: '#2563EB', color: '#fff', border: 'none', borderRadius: 100, padding: '14px 30px', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2563EB')}
              >
                Book a free demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a href="#emr-software"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(139,158,199,0.08)', border: '1px solid rgba(139,158,199,0.18)', borderRadius: 100, padding: '14px 28px', color: '#A78BFA', textDecoration: 'none', fontSize: 15, fontWeight: 600, transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(139,158,199,0.18)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Explore EMR
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(139,158,199,0.1)' }}>
              {[['15+', 'projects shipped'], ['3', 'industries served'], ['100%', 'client retention']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: '#F8FAFF', letterSpacing: '-0.02em' }}>{n}</div>
                  <div style={{ fontSize: 13, color: '#8B9EC7', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: video with floating badges ── */}
          <div style={{ position: 'relative' }}>
            {/* Glow behind video */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 260, height: 260, background: 'rgba(37,99,235,0.3)', borderRadius: '50%', filter: 'blur(72px)', animation: 'pulse 4s ease-in-out infinite', pointerEvents: 'none' }} />

            {/* Video card — floats gently */}
            <div style={{ position: 'relative', zIndex: 10, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.15)', animation: 'floatA 6s ease-in-out infinite', background: '#000' }}>
              <video
                autoPlay loop muted playsInline
                style={{ display: 'block', width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              >
                <source src="/designarena_video_faxh1akt.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Floating badge — top-left */}
            <FloatingBadge
              style={{ top: '18%', left: '-48px', animation: 'floatA 4s ease-in-out infinite' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              }
              label="System Active"
              sub="100% Optimized"
              subColor="#34D399"
            />

            {/* Floating badge — bottom-right */}
            <FloatingBadge
              style={{ bottom: '22%', right: '-48px', animation: 'floatB 5s ease-in-out infinite 1s' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
              }
              label="AI Processing"
              sub="Analyzing Data..."
              subColor="#A78BFA"
            />
          </div>
        </div>

        {/* Tech badges row */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 720, marginInline: 'auto' }}>
          {techBadges.map((b, i) => (
            <div key={i}
              style={{ background: 'rgba(13,27,53,0.5)', border: '1px solid rgba(139,158,199,0.1)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'border-color 0.2s, background 0.2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; e.currentTarget.style.background = 'rgba(37,99,235,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,158,199,0.1)'; e.currentTarget.style.background = 'rgba(13,27,53,0.5)'; }}
            >
              {b.icon}
              <span style={{ fontSize: 14, fontWeight: 600, color: '#CBD5E1' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ALL_SERVICES = [
  // ── Development
  {
    cat: 'Development',
    icon: '◈',
    title: 'Mobile app development',
    desc: 'Custom Android and iOS apps for businesses, clinics, startups, and enterprises. UI design, backend, API integration, and Play Store / App Store deployment — all included.',
    tags: ['React Native', 'Android', 'Kotlin', 'iOS'],
    highlight: false,
  },
  {
    cat: 'Development',
    icon: '⬡',
    title: 'Custom application development',
    desc: 'Fully coded web and business applications built to your exact requirements — with AI support where it adds value. No templates, no shortcuts.',
    tags: ['React', 'TypeScript', 'AI integration'],
    highlight: false,
  },
  {
    cat: 'Development',
    icon: '◧',
    title: 'Software development',
    desc: 'End-to-end software design and development for any business domain. Scalable architecture, clean code, and ongoing support after launch.',
    tags: ['Full stack', 'Scalable', 'Affordable'],
    highlight: false,
  },
  {
    cat: 'Development',
    icon: '⬟',
    title: 'Website design',
    desc: 'Fully coded, functional websites starting from ₹1,500. Not AI-generated templates — hand-built pages with real performance, SEO structure, and conversion focus.',
    tags: ['Web design', 'Coded', 'SEO'],
    highlight: false,
  },
  // ── Healthcare
  {
    cat: 'Healthcare',
    icon: '✦',
    title: 'EMR software for clinics',
    desc: 'Complete Electronic Medical Records system for private clinics, nursing homes, hospitals, and diagnostic labs. Patient history, digital prescriptions, appointment scheduling, SMS reminders, and billing — all in one platform.',
    tags: ['EMR', 'Clinics', 'Paperless', 'India'],
    highlight: true,
  },
  // ── E-commerce & Delivery
  {
    cat: 'E-commerce',
    icon: '◫',
    title: 'Online store & e-commerce',
    desc: 'Full e-commerce website for retail shops, fashion brands, grocery stores, and product businesses. Product catalogue, payment gateway, order management, and customer dashboard.',
    tags: ['E-commerce', 'Razorpay', 'Order management'],
    highlight: false,
  },
  {
    cat: 'E-commerce',
    icon: '◬',
    title: 'Online delivery management',
    desc: 'End-to-end delivery system for restaurants, grocery stores, pharmacies, and retail. Order tracking, delivery partner management, real-time status, and customer notifications.',
    tags: ['Delivery', 'Tracking', 'Automation'],
    highlight: false,
  },
  // ── Automation & AI
  {
    cat: 'Automation & AI',
    icon: '⚙',
    title: 'Full-stack custom automation',
    desc: 'Automate repetitive tasks, workflows, data entry, reporting, inventory, and HR processes using AI and custom software. Reduce operating costs by up to 60%.',
    tags: ['AI', 'Workflow', 'Cost reduction'],
    highlight: false,
  },
  {
    cat: 'Automation & AI',
    icon: '◉',
    title: 'WhatsApp & chatbot automation',
    desc: 'AI chatbot and WhatsApp Business automation for customer support, lead qualification, appointment booking, and order updates. Available 24/7, integrates with your CRM and website.',
    tags: ['WhatsApp', 'AI chatbot', '24/7'],
    highlight: false,
  },
  {
    cat: 'Automation & AI',
    icon: '◌',
    title: 'One-tap review system',
    desc: 'Get more Google reviews with a single tap — no app download needed. Boost your Google Maps presence and local search ranking automatically.',
    tags: ['Google Reviews', 'Local SEO'],
    highlight: false,
    price: '₹499',
  },
  {
    cat: 'Automation & AI',
    icon: '◍',
    title: 'Augmented reality menus',
    desc: 'Interactive 3D AR food menus that let customers visualise dishes on their table before ordering. Boost engagement and upselling for restaurants and cafés.',
    tags: ['AR', 'Restaurant', '3D menus'],
    highlight: false,
  },
  // ── Business tools
  {
    cat: 'Business tools',
    icon: '◑',
    title: 'CRM system development',
    desc: 'Custom CRM built for your team\'s workflow — track leads, manage client interactions, automate follow-ups, monitor the sales pipeline, and generate performance reports.',
    tags: ['CRM', 'Sales pipeline', 'Reporting'],
    highlight: false,
  },
  {
    cat: 'Business tools',
    icon: '◐',
    title: 'Business intelligence & reporting',
    desc: 'Custom dashboards and automated reporting for real-time insights on sales, operations, leads, and revenue. Integrates data from multiple sources into one intelligent platform.',
    tags: ['Dashboards', 'Analytics', 'BI'],
    highlight: false,
  },
  {
    cat: 'Business tools',
    icon: '◒',
    title: 'API & third-party integration',
    desc: 'Seamless integration of payment gateways, logistics platforms, ERP systems, CRMs, social media, and third-party tools. Razorpay, Shiprocket, Zoho, Tally, and custom APIs.',
    tags: ['API', 'Razorpay', 'Shiprocket', 'Zoho'],
    highlight: false,
  },
];

const SERVICE_CATS = ['All', 'Development', 'Healthcare', 'E-commerce', 'Automation & AI', 'Business tools'] as const;

function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const visible = activeTab === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.cat === activeTab);

  return (
    <section id="services" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 16px' }}>What we build</h2>
          <p style={{ fontSize: 17, color: '#8B9EC7', maxWidth: 560, lineHeight: 1.7 }}>14 services across web, mobile, healthcare, e-commerce, and AI automation — all built in-house. No hand-offs, no outsourcing.</p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {SERVICE_CATS.map(cat => (
            <button key={cat} onClick={() => setActiveTab(cat)}
              style={{
                background: activeTab === cat ? '#2563EB' : 'rgba(13,27,53,0.6)',
                color: activeTab === cat ? '#fff' : '#8B9EC7',
                border: activeTab === cat ? '1px solid #2563EB' : '1px solid rgba(139,158,199,0.15)',
                borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.18s',
              }}
              onMouseEnter={e => { if (activeTab !== cat) { e.currentTarget.style.color = '#F8FAFF'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)'; } }}
              onMouseLeave={e => { if (activeTab !== cat) { e.currentTarget.style.color = '#8B9EC7'; e.currentTarget.style.borderColor = 'rgba(139,158,199,0.15)'; } }}
            >{cat}</button>
          ))}
        </div>

        {/* Service cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {visible.map(s => (
            <div key={s.title}
              style={{
                background: s.highlight ? 'rgba(37,99,235,0.08)' : 'rgba(13,27,53,0.6)',
                border: s.highlight ? '1px solid rgba(37,99,235,0.35)' : '1px solid rgba(139,158,199,0.1)',
                borderRadius: 12, padding: '28px', transition: 'border-color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = s.highlight ? 'rgba(37,99,235,0.6)' : 'rgba(37,99,235,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = s.highlight ? 'rgba(37,99,235,0.35)' : 'rgba(139,158,199,0.1)')}
            >
              {s.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#2563EB', borderRadius: '12px 12px 0 0' }} />
              )}
              {(s as any).price && (
                <div style={{ position: 'absolute', top: 16, right: 16, background: '#2563EB', color: '#fff', fontSize: 11, fontWeight: 700, borderRadius: 6, padding: '3px 9px' }}>{(s as any).price}</div>
              )}
              <div style={{ fontSize: 22, marginBottom: 14, color: s.highlight ? '#60A5FA' : '#8B9EC7' }}>{s.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#8B9EC7', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 8 }}>{s.cat}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#F8FAFF', margin: '0 0 10px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: '#8B9EC7', lineHeight: 1.75, margin: '0 0 18px' }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, fontWeight: 500, color: '#60A5FA', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 100, padding: '2px 9px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: 40, padding: '20px 28px', background: 'rgba(13,27,53,0.4)', borderRadius: 10, border: '1px solid rgba(139,158,199,0.08)', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', flexShrink: 0 }} />
          <p style={{ fontSize: 14, color: '#8B9EC7', margin: 0, lineHeight: 1.6 }}>
            Serving businesses in <strong style={{ color: '#F8FAFF', fontWeight: 600 }}>Jabalpur, Madhya Pradesh</strong> and worldwide. Affordable rates — call <strong style={{ color: '#60A5FA', fontWeight: 600 }}>+91 90987 79146</strong> or book a demo to get started.
          </p>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const projects = [
    {
      name: 'Shekhar Raja Jewellers',
      type: 'Web + React Native',
      desc: 'Cross-platform product catalogue and client portal for a heritage jeweller — realtime inventory, inquiry flow, and branded POS interface.',
      color: '#C89B3C',
      bg: 'rgba(200,155,60,0.08)',
    },
    {
      name: 'Hotel SR',
      type: 'Hospitality platform',
      desc: 'Luxury hotel website with booking integration, room showcase, and admin dashboard — built to convert browse into stay.',
      color: '#7C6AF5',
      bg: 'rgba(124,106,245,0.08)',
    },
    {
      name: 'Maa Nunhai Hallmarking',
      type: 'Business web app',
      desc: 'React/Vite site with certificate lookup, service tracking, and digital presence for a BIS-certified hallmarking centre.',
      color: '#34D399',
      bg: 'rgba(52,211,153,0.08)',
    },
    {
      name: 'Clinic Dashboard',
      type: 'Healthcare mobile app',
      desc: 'Doctor-facing mobile tool for appointment management, patient records, and on-call handoff — built for the phone they already carry.',
      color: '#60A5FA',
      bg: 'rgba(96,165,250,0.08)',
    },
    {
      name: '24×7 Feed Your Soul',
      type: 'Review automation',
      desc: 'AI-driven Google Maps review system that collects feedback, flags issues, and publishes responses — freeing staff from manual monitoring.',
      color: '#F87171',
      bg: 'rgba(248,113,113,0.08)',
    },
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 2rem', background: 'rgba(13,27,53,0.3)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 16px' }}>Work we're proud of</h2>
          <p style={{ fontSize: 17, color: '#8B9EC7', maxWidth: 520, lineHeight: 1.7 }}>Real projects, real clients in Jabalpur and beyond. Each one built from scratch with a product mindset.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {projects.map((p, i) => (
            <div key={p.name}
              style={{
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                background: p.bg, border: `1px solid ${p.color}22`,
                borderRadius: 12, padding: 32, position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: p.color, opacity: 0.6 }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: p.color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>{p.type}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#F8FAFF', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: '#8B9EC7', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { label: 'Discovery', desc: 'We spend time understanding your business, users, and constraints — before writing a line of code.' },
    { label: 'Design', desc: 'Wireframes and component design that stakeholders can react to, not a PDF deck no one opens.' },
    { label: 'Build', desc: 'Incremental delivery with weekly check-ins. You see working software every sprint.' },
    { label: 'Launch & support', desc: 'We deploy, monitor, and stay on call — because shipping is not the end of the job.' },
  ];

  return (
    <section id="how-it-works" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 16px' }}>How we work</h2>
          <p style={{ fontSize: 17, color: '#8B9EC7', maxWidth: 480, lineHeight: 1.7 }}>A process built around your schedule, not ours.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'rgba(37,99,235,0.25)' }} />
          {steps.map((s, i) => (
            <div key={s.label} style={{ padding: '0 24px 0 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: '#2563EB' }}>{i + 1}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#F8FAFF', margin: '0 0 10px' }}>{s.label}</h3>
              <p style={{ fontSize: 14, color: '#8B9EC7', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const points = [
    { title: 'We\'re small on purpose', body: 'You work directly with the engineers building your product — no project managers in the middle, no outsourced code.' },
    { title: 'Deep domain familiarity', body: 'We\'ve built for healthcare, hospitality, and retail. We know the edge cases before you describe them.' },
    { title: 'Jabalpur-rooted, not Jabalpur-limited', body: 'Cost structures that work for local businesses, quality standards that work anywhere.' },
    { title: 'AI native', body: 'We don\'t bolt on AI as a feature. We design systems where machine and human judgment reinforce each other.' },
  ];

  return (
    <section style={{ padding: '100px 2rem', background: 'rgba(13,27,53,0.3)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 24px' }}>Why teams come back</h2>
          <p style={{ fontSize: 17, color: '#8B9EC7', lineHeight: 1.7, margin: '0 0 40px' }}>
            We're not a vendor. We're the technical co-founder most startups and growing businesses can't afford to hire full-time.
          </p>
          <div style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 12, padding: 28 }}>
            <div style={{ fontSize: 15, fontStyle: 'italic', color: '#CBD5E1', lineHeight: 1.8, marginBottom: 16 }}>
              "NxtGen AI Labs understood our clinic's workflow better than our in-house team did. The dashboard they built cut our admin load by half."
            </div>
            <div style={{ fontSize: 13, color: '#8B9EC7', fontWeight: 500 }}>— Client, healthcare sector, Jabalpur</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {points.map(p => (
            <div key={p.title} style={{ display: 'flex', gap: 16 }}>
              <div style={{ width: 4, minWidth: 4, borderRadius: 2, background: '#2563EB', marginTop: 4 }} />
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#F8FAFF', margin: '0 0 6px' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#8B9EC7', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.05) 100%)', border: '1px solid rgba(37,99,235,0.25)', borderRadius: 16, padding: '72px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F8FAFF', margin: '0 0 16px' }}>Ready to build something?</h2>
            <p style={{ fontSize: 16, color: '#8B9EC7', lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
              Tell us about your project. We'll respond within 24 hours with a short plan — no commitment required.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}>
            <button onClick={onBookDemo}
              style={{ background: '#2563EB', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
              onMouseLeave={e => (e.currentTarget.style.background = '#2563EB')}
            >Book a free demo</button>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', color: '#8B9EC7', fontSize: 14, textDecoration: 'none', padding: '8px 0', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8B9EC7')}
            >Or message on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer style={{ padding: '40px 2rem 32px', borderTop: '1px solid rgba(139,158,199,0.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: '#2563EB', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3.5" fill="white" />
              <path d="M9 2v2M9 14v2M2 9h2M14 9h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#8B9EC7' }}>NxtGen AI Labs</span>
        </div>
        <div style={{ fontSize: 13, color: '#8B9EC7' }}>
          <a href="https://nxtgenailabs.work" target="_blank" rel="noopener noreferrer" style={{ color: '#8B9EC7', textDecoration: 'none' }}>nxtgenailabs.work</a>
          {' · '}Jabalpur, India
        </div>
        <div style={{ fontSize: 13, color: 'rgba(139,158,199,0.5)' }}>© {new Date().getFullYear()} NxtGen AI Labs</div>
      </div>
    </footer>
  );
}

// ─── DemoModal stub (keep your existing DemoModal component) ─────────────────
function SimpleDemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#0D1B35', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 16, padding: '40px', maxWidth: 480, width: '100%' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#F8FAFF', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Book a free demo</h2>
        <p style={{ fontSize: 15, color: '#8B9EC7', margin: '0 0 32px', lineHeight: 1.6 }}>We'll walk you through what we can build for you. No pitch deck, just a real conversation.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[['Your name', 'text'], ['Email', 'email'], ['Tell us about your project', 'text']].map(([label, type]) => (
            <div key={label}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#8B9EC7', marginBottom: 6 }}>{label}</label>
              <input type={type} placeholder="" style={{ width: '100%', background: 'rgba(139,158,199,0.08)', border: '1px solid rgba(139,158,199,0.15)', borderRadius: 8, padding: '10px 14px', color: '#F8FAFF', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          ))}
          <button style={{ background: '#2563EB', color: '#fff', border: 'none', borderRadius: 8, padding: '13px', fontSize: 15, fontWeight: 600, cursor: 'pointer', marginTop: 8 }}>Send request</button>
        </div>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: '#8B9EC7', fontSize: 20, cursor: 'pointer' }}>✕</button>
      </div>
    </div>
  );
}

// ─── Main Home export ────────────────────────────────────────────────────────
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#050E1F', color: '#F8FAFF', fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      <NavBar onBookDemo={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onBookDemo={() => setIsModalOpen(true)} />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <WhyUsSection />
        <CTASection onBookDemo={() => setIsModalOpen(true)} />
      </main>
      <FooterSection />

      {/* Replace SimpleDemoModal below with your existing <DemoModal> component */}
      <SimpleDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Your existing WhatsAppButton and AutoPopup components plug in here unchanged */}
    </div>
  );
}
