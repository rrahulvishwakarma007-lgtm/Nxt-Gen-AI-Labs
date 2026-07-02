import { useState, useEffect, useRef } from "react";

const WA_NUMBER = "919098779146";

const makeWALink = (name: string, phone: string, city: string) => {
  const msg = encodeURIComponent(
    `Hi NxtGen AI Labs! 👋\n\nName: ${name}\nPhone: ${phone}\nCity: ${city || "Not provided"}\n\nI just completed the website survey and I'm interested in the ₹799 Digital Launch offer!\n\nPlease guide me with next steps. 🙏`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};

const STEPS = [
  {
    id: 1, tag: "Step 1 of 4", cols: 3,
    question: "What best describes your business?",
    options: [
      { icon: "🏪", label: "Local Shop / Retail" },
      { icon: "🍽️", label: "Restaurant / Café" },
      { icon: "💼", label: "Service Provider" },
      { icon: "🏭", label: "Manufacturer / Trader" },
      { icon: "🎓", label: "Education / Coaching" },
      { icon: "💅", label: "Salon / Beauty" },
    ],
  },
  {
    id: 2, tag: "Step 2 of 4", cols: 2,
    question: "Do you currently have a website?",
    options: [
      { icon: "❌", label: "No website at all" },
      { icon: "😞", label: "Old / outdated website" },
      { icon: "📱", label: "Only social media pages" },
      { icon: "✅", label: "Yes, need improvements" },
    ],
  },
  {
    id: 3, tag: "Step 3 of 4", cols: 2,
    question: "What's your biggest challenge right now?",
    options: [
      { icon: "📣", label: "Getting more customers" },
      { icon: "🤝", label: "Building trust online" },
      { icon: "📦", label: "Showcasing products" },
      { icon: "💬", label: "Customer inquiries" },
    ],
  },
  {
    id: 4, tag: "Step 4 of 4", cols: 2,
    question: "What's your monthly revenue range?",
    options: [
      { icon: "🌱", label: "Just starting out" },
      { icon: "💰", label: "₹10k – ₹50k / mo" },
      { icon: "📈", label: "₹50k – ₹2L / mo" },
      { icon: "🚀", label: "₹2L+ per month" },
    ],
  },
];

const FEATURES = [
  { icon: "🖥️", label: "6-Page Professional Website" },
  { icon: "📱", label: "Mobile Responsive" },
  { icon: "💬", label: "WhatsApp Integration" },
  { icon: "📦", label: "Catalogue / Product Section" },
  { icon: "☁️", label: "3 Months Free Hosting" },
  { icon: "⚡", label: "Fast Delivery" },
];

type Screen = "intro" | "survey" | "offer" | "success";

export default function SurveyPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [stepIdx, setStepIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [error, setError] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  const progress =
    screen === "intro" ? 0
    : screen === "survey" ? Math.round((stepIdx / STEPS.length) * 100)
    : 100;

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [screen, stepIdx]);

  const selectOption = (label: string) => {
    setSelected(label);
    setTimeout(() => {
      setSelected(null);
      if (stepIdx < STEPS.length - 1) {
        setAnimKey(k => k + 1);
        setStepIdx(i => i + 1);
      } else {
        setAnimKey(k => k + 1);
        setScreen("offer");
      }
    }, 380);
  };

  const handleClaim = () => {
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) { setError("Enter a valid 10-digit WhatsApp number."); return; }
    setError("");
    window.open(makeWALink(form.name, form.phone, form.city), "_blank");
    setScreen("success");
  };

  const currentStep = STEPS[stepIdx];

  return (
    <div ref={topRef} style={{
      fontFamily: "'DM Sans','Segoe UI',sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(160deg,#050D1F 0%,#091222 45%,#0A0E1A 100%)",
      color: "#F0F4FF",
      position: "relative",
      overflowX: "hidden",
    }}>

      {/* Ambient background effects */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -120, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,114,255,0.13) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, right: -100, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,0.09) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,198,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,198,255,0.025) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid rgba(0,198,255,0.09)", backdropFilter: "blur(12px)", background: "rgba(5,13,31,0.75)" }}>
        <a href="https://nxtgenailabs.work" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 9, background: "linear-gradient(135deg,#0072FF,#00C6FF)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20, color: "#fff", boxShadow: "0 0 16px rgba(0,198,255,0.3)", fontFamily: "Rajdhani,sans-serif" }}>N</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: "#F0F4FF", letterSpacing: 0.3, lineHeight: 1.1 }}>NxtGen AI Labs</div>
            <div style={{ fontSize: 10, color: "#8899BB", letterSpacing: 1.6, textTransform: "uppercase" }}>Innovate · Automate · Elevate</div>
          </div>
        </a>
        <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: "#00C6FF", textDecoration: "none", display: "flex", alignItems: "center", gap: 5, background: "rgba(0,198,255,0.07)", border: "1px solid rgba(0,198,255,0.18)", borderRadius: 8, padding: "6px 12px", fontWeight: 600 }}>
          💬 WhatsApp
        </a>
      </nav>

      {/* ── PROGRESS BAR ── */}
      {screen !== "intro" && (
        <div style={{ position: "relative", zIndex: 10, padding: "10px 24px 0" }}>
          <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0072FF,#00C6FF)", borderRadius: 99, transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5, fontSize: 11, color: "#8899BB" }}>
            <span>{screen === "survey" ? `Question ${stepIdx + 1} of ${STEPS.length}` : screen === "offer" ? "Almost done!" : "Completed ✓"}</span>
            <span style={{ color: "#00C6FF" }}>{progress}%</span>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main style={{ position: "relative", zIndex: 10, maxWidth: 560, margin: "0 auto", padding: "28px 18px 70px" }}>

        {/* ════ INTRO SCREEN ════ */}
        {screen === "intro" && (
          <div style={{ animation: "fadeUp 0.55s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(0,198,255,0.07)", border: "1px solid rgba(0,198,255,0.18)", borderRadius: 99, padding: "6px 18px", fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: "#00C6FF", textTransform: "uppercase" }}>
                🇮🇳 Digital Launch India 2026
              </span>
            </div>

            <div style={{ textAlign: "center", marginBottom: 26 }}>
              <h1 style={{ fontFamily: "'Rajdhani','Segoe UI',sans-serif", fontSize: "clamp(30px,8vw,50px)", fontWeight: 700, lineHeight: 1.08, margin: "0 0 14px" }}>
                <span style={{ color: "#F0F4FF" }}>Is Your Business<br /></span>
                <span style={{ background: "linear-gradient(90deg,#00C6FF,#0072FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ready to </span>
                <span style={{ background: "linear-gradient(90deg,#FF6B00,#FF9A3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Go Online?</span>
              </h1>
              <p style={{ color: "#8899BB", fontSize: 15, lineHeight: 1.65, maxWidth: 420, margin: "0 auto" }}>
                Answer <strong style={{ color: "#F0F4FF" }}>4 quick questions</strong> and unlock our exclusive{" "}
                <strong style={{ color: "#FF6B00" }}>₹799 complete website offer</strong> — built for local Indian businesses.
              </p>
            </div>

            {/* Price highlight card */}
            <div style={{ background: "linear-gradient(135deg,rgba(15,30,53,0.9),rgba(10,22,40,0.95))", border: "1.5px solid rgba(255,107,0,0.28)", borderRadius: 18, padding: "22px 20px", marginBottom: 18, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,0.11),transparent)", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#8899BB", marginBottom: 5, fontWeight: 600, letterSpacing: 0.5 }}>FULL PROFESSIONAL WEBSITE</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 14, color: "#8899BB", textDecoration: "line-through" }}>₹4,999</span>
                    <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 56, fontWeight: 700, color: "#FF6B00", lineHeight: 1 }}>₹799</span>
                    <span style={{ fontSize: 13, color: "#00E676", fontWeight: 700 }}>ONLY</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#FC8181", fontWeight: 700, marginTop: 3 }}>🔥 Limited campaign — slots filling fast</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {["6 Full Pages", "Mobile Ready", "WhatsApp Integration", "Fast Delivery"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#C8D8F0" }}>
                      <span style={{ color: "#00C6FF", fontSize: 14, lineHeight: 1 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 24 }}>
              {FEATURES.map(f => (
                <div key={f.label} style={{ background: "rgba(0,198,255,0.04)", border: "1px solid rgba(0,198,255,0.09)", borderRadius: 12, padding: "13px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontSize: 11, color: "#C8D8F0", fontWeight: 600, lineHeight: 1.3 }}>{f.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => { setScreen("survey"); setStepIdx(0); setAnimKey(k => k + 1); }}
              style={{ width: "100%", padding: "16px", borderRadius: 13, border: "none", background: "linear-gradient(135deg,#FF6B00,#FF9A3C)", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 19, cursor: "pointer", letterSpacing: 0.5, boxShadow: "0 6px 32px rgba(255,107,0,0.38)", transition: "transform 0.15s,box-shadow 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(255,107,0,0.52)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(255,107,0,0.38)"; }}
            >
              Start Free Survey — Only 60 Seconds →
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#8899BB", marginTop: 10 }}>No payment · No commitment · 100% free to check eligibility</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 18, flexWrap: "wrap" }}>
              {["✅ Trusted in Jabalpur", "🏆 Made in Jabalpur, For India", "⚡ Fast Delivery"].map(t => (
                <span key={t} style={{ fontSize: 11, color: "#8899BB" }}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* ════ SURVEY STEPS ════ */}
        {screen === "survey" && (
          <div key={animKey} style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg,#0072FF,#00C6FF)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontFamily: "Rajdhani,sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", boxShadow: "0 0 22px rgba(0,198,255,0.35)" }}>
                {currentStep.id}
              </div>
              <div style={{ fontSize: 11, color: "#00C6FF", fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", marginBottom: 8 }}>{currentStep.tag}</div>
              <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(20px,5.5vw,28px)", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>{currentStep.question}</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: `repeat(${currentStep.cols},1fr)`, gap: 12, marginBottom: 20 }}>
              {currentStep.options.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => selectOption(opt.label)}
                  style={{
                    background: selected === opt.label ? "linear-gradient(135deg,rgba(255,107,0,0.2),rgba(255,154,60,0.1))" : "rgba(9,18,34,0.8)",
                    border: `1.5px solid ${selected === opt.label ? "#FF6B00" : "rgba(0,198,255,0.14)"}`,
                    borderRadius: 14,
                    padding: "18px 10px",
                    color: "#F0F4FF",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                    transform: selected === opt.label ? "scale(0.96)" : "scale(1)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => { if (selected !== opt.label) { e.currentTarget.style.borderColor = "rgba(255,107,0,0.4)"; e.currentTarget.style.background = "rgba(255,107,0,0.07)"; } }}
                  onMouseLeave={e => { if (selected !== opt.label) { e.currentTarget.style.borderColor = "rgba(0,198,255,0.14)"; e.currentTarget.style.background = "rgba(9,18,34,0.8)"; } }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{opt.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>{opt.label}</div>
                </button>
              ))}
            </div>

            {stepIdx > 0 && (
              <button onClick={() => { setAnimKey(k => k + 1); setStepIdx(i => i - 1); }}
                style={{ width: "100%", background: "none", border: "none", color: "#8899BB", cursor: "pointer", fontSize: 13, padding: "8px", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F0F4FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8899BB")}>
                ← Back
              </button>
            )}
          </div>
        )}

        {/* ════ OFFER SCREEN ════ */}
        {screen === "offer" && (
          <div key="offer" style={{ animation: "fadeUp 0.5s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 60, marginBottom: 14 }}>🎉</div>
              <div style={{ fontSize: 11, color: "#00E676", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Congratulations!</div>
              <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(22px,6vw,34px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 10px" }}>
                You're Eligible for Our<br />
                <span style={{ background: "linear-gradient(90deg,#FF6B00,#FF9A3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>₹799 Website Offer!</span>
              </h2>
              <p style={{ color: "#8899BB", fontSize: 14, lineHeight: 1.65, maxWidth: 420, margin: "0 auto" }}>
                Based on your answers, we'll build your business a complete professional website. <strong style={{ color: "#F0F4FF" }}>Claim your spot now — limited slots available!</strong>
              </p>
            </div>

            {/* Features checklist */}
            <div style={{ background: "rgba(9,18,34,0.8)", border: "1px solid rgba(0,198,255,0.11)", borderRadius: 16, padding: "18px", marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#00C6FF", fontWeight: 700, letterSpacing: 1.5, marginBottom: 14, textTransform: "uppercase" }}>What's included at ₹799:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                {FEATURES.map(f => (
                  <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{f.icon}</span>
                    <span style={{ fontSize: 12, color: "#C8D8F0", flex: 1 }}>{f.label}</span>
                    <span style={{ color: "#00E676", fontSize: 14 }}>✓</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Claim form */}
            <div style={{ background: "linear-gradient(135deg,rgba(15,30,53,0.97),rgba(10,22,40,0.99))", border: "1.5px solid rgba(255,107,0,0.22)", borderRadius: 16, padding: "20px" }}>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 16, fontWeight: 700, textAlign: "center", marginBottom: 4 }}>📋 Claim Your Spot</div>
              <div style={{ fontSize: 12, color: "#8899BB", textAlign: "center", marginBottom: 18 }}>Fill in your details below — our team will WhatsApp you within 24 hours</div>

              {(["name", "phone", "city"] as const).map(field => (
                <div key={field} style={{ marginBottom: 12 }}>
                  <input
                    type={field === "phone" ? "tel" : "text"}
                    placeholder={
                      field === "name" ? "Your Full Name *"
                      : field === "phone" ? "WhatsApp Number * (10 digits)"
                      : "Your City  (e.g. Jabalpur)"
                    }
                    value={form[field]}
                    maxLength={field === "phone" ? 10 : undefined}
                    onChange={e => { setForm(p => ({ ...p, [field]: e.target.value })); setError(""); }}
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid rgba(0,198,255,0.15)", background: "rgba(5,13,31,0.75)", color: "#F0F4FF", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" as const, transition: "border-color 0.2s" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(0,198,255,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(0,198,255,0.15)")}
                  />
                </div>
              ))}

              {error && <p style={{ color: "#FC8181", fontSize: 12, marginBottom: 12, textAlign: "center" }}>{error}</p>}

              <button
                onClick={handleClaim}
                style={{ width: "100%", padding: "15px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 18, cursor: "pointer", boxShadow: "0 6px 28px rgba(37,211,102,0.28)", transition: "transform 0.15s,box-shadow 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(37,211,102,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.28)"; }}
              >
                <span style={{ fontSize: 20 }}>💬</span> Send on WhatsApp & Claim Offer
              </button>
              <p style={{ fontSize: 11, color: "#8899BB", textAlign: "center", marginTop: 10 }}>Clicking opens WhatsApp with your details pre-filled · Contact: 9098779146</p>
            </div>
          </div>
        )}

        {/* ════ SUCCESS SCREEN ════ */}
        {screen === "success" && (
          <div style={{ animation: "fadeUp 0.55s ease both", textAlign: "center" }}>
            <div style={{ fontSize: 74, marginBottom: 16 }}>🚀</div>
            <div style={{ fontSize: 11, color: "#00E676", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Message Sent!</div>
            <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(22px,6vw,32px)", fontWeight: 700, marginBottom: 10 }}>
              <span style={{ background: "linear-gradient(90deg,#00C6FF,#0072FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Booking Confirmed!</span>
            </h2>
            <p style={{ color: "#8899BB", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Hey <strong style={{ color: "#F0F4FF" }}>{form.name || "there"}</strong>! 🙌<br />
              Your WhatsApp was opened with your details. Founder <strong style={{ color: "#FF6B00" }}>Rahul Vishwakarma</strong> will reply within 24 hours.
            </p>

            <div style={{ background: "rgba(0,198,255,0.04)", border: "1px solid rgba(0,198,255,0.11)", borderRadius: 16, padding: "20px", marginBottom: 22, textAlign: "left" }}>
              <div style={{ fontSize: 11, color: "#00C6FF", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, textAlign: "center" }}>What Happens Next?</div>
              {[
                "Our team reviews your survey answers",
                "Rahul WhatsApps you with a tailored plan",
                "You confirm & we start building your website",
                "Your site goes live — fast delivery!",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#0072FF,#00C6FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <span style={{ fontSize: 14, color: "#C8D8F0", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>

            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "14px", borderRadius: 12, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 17, boxShadow: "0 6px 28px rgba(37,211,102,0.28)", marginBottom: 16, transition: "transform 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <span style={{ fontSize: 20 }}>💬</span> Open WhatsApp Chat
            </a>

            <div style={{ fontSize: 13, color: "#8899BB", lineHeight: 2 }}>
              📞 <a href="tel:9098779146" style={{ color: "#00C6FF", textDecoration: "none" }}>9098779146</a> &nbsp;·&nbsp;
              🌐 <a href="https://nxtgenailabs.work" target="_blank" rel="noopener noreferrer" style={{ color: "#00C6FF", textDecoration: "none" }}>nxtgenailabs.work</a><br />
              📍 Shanti Nagar, Jabalpur, Madhya Pradesh
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "16px 24px", borderTop: "1px solid rgba(0,198,255,0.07)", background: "rgba(5,13,31,0.6)", backdropFilter: "blur(8px)" }}>
        <div style={{ fontSize: 11, color: "#3A4E6A", letterSpacing: 1.2 }}>★ MADE IN BHOPAL · FOR BHOPAL · FOR INDIA ★</div>
        <div style={{ fontSize: 11, color: "#3A4E6A", marginTop: 4 }}>© 2026 NxtGen AI Labs · Innovate. Automate. Elevate.</div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        input::placeholder { color: #8899BB !important; }
      `}</style>
    </div>
  );
}
