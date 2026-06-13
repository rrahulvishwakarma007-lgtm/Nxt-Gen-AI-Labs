import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — NXT Gen AI Labs</title>
        <meta name="description" content="Privacy Policy for NXT Gen AI Labs — WhatsApp Automation, AI Chatbots, and Software Development services." />
      </Head>

      <div className="min-h-screen bg-primary text-white font-sans">

        {/* Header */}
        <header className="border-b border-white/10 px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-black font-bold text-lg">N</div>
            <span className="font-bold text-lg tracking-tight">NXT Gen AI Labs</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </header>

        {/* Content */}
        <main className="max-w-3xl mx-auto px-6 py-16">

          {/* Title */}
          <div className="mb-12">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/50 text-sm">
              Last updated: June 14, 2026 &nbsp;·&nbsp; Effective: June 14, 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-white/80 leading-relaxed">
            NXT Gen AI Labs ("we", "us", or "our") operates WhatsApp automation services, AI chatbots, and software products. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using our services — including our WhatsApp bot — you agree to the practices described here.
          </div>

          <div className="space-y-10 text-white/75 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">1</span>
                Information We Collect
              </h2>
              <div className="space-y-3 pl-10">
                <p><span className="text-white font-medium">WhatsApp Messages:</span> When you message our WhatsApp bot, we receive your WhatsApp phone number, display name, and message content. This is necessary to send you automated replies.</p>
                <p><span className="text-white font-medium">Contact Form Data:</span> If you fill out a contact or demo request form on our website, we collect your name, email address, phone number, and any details you provide.</p>
                <p><span className="text-white font-medium">Usage Data:</span> We may collect basic analytics such as pages visited, time spent, and device type to improve our services. This data is anonymised and not linked to individuals.</p>
                <p><span className="text-white font-medium">Cookies:</span> Our website may use essential cookies to function correctly. We do not use advertising or tracking cookies.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">2</span>
                How We Use Your Information
              </h2>
              <ul className="pl-10 space-y-2 list-disc list-inside marker:text-accent">
                <li>To respond to your WhatsApp messages via our automated bot</li>
                <li>To provide the services you requested (software development, AI chatbots, automation)</li>
                <li>To follow up on demo requests or enquiries you submitted</li>
                <li>To improve our products and services</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="pl-10 mt-3">We do <span className="text-white font-medium">not</span> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">3</span>
                WhatsApp & Meta Platform
              </h2>
              <div className="pl-10 space-y-3">
                <p>Our WhatsApp automation service is built on the <span className="text-white font-medium">official Meta WhatsApp Business API</span>. By messaging our WhatsApp number, your interaction is also subject to Meta's Privacy Policy at <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">whatsapp.com/legal/privacy-policy</a>.</p>
                <p>We store message logs on secure servers to monitor bot performance and improve response quality. Logs are retained for a maximum of 90 days and then automatically deleted.</p>
                <p>We only send messages in response to messages initiated by you. We do not send unsolicited promotional messages.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">4</span>
                Data Storage & Security
              </h2>
              <div className="pl-10 space-y-3">
                <p>Your data is stored on secure cloud servers (Railway / Render infrastructure) located in the United States. We implement industry-standard security measures including HTTPS encryption for all data in transit.</p>
                <p>Access to stored data is restricted to authorised NXT Gen AI Labs personnel only. We do not store payment information — all payments are handled by third-party processors.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">5</span>
                Your Rights
              </h2>
              <p className="pl-10 mb-3">You have the right to:</p>
              <ul className="pl-10 space-y-2 list-disc list-inside marker:text-accent">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time by contacting us</li>
                <li>Opt out of WhatsApp messages by simply not messaging us</li>
              </ul>
              <p className="pl-10 mt-3">To exercise any of these rights, contact us at the details below.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">6</span>
                Third-Party Services
              </h2>
              <div className="pl-10 space-y-2">
                <p>We use the following third-party services that may process your data:</p>
                <ul className="space-y-2 list-disc list-inside marker:text-accent mt-2">
                  <li><span className="text-white font-medium">Meta (WhatsApp API)</span> — message delivery</li>
                  <li><span className="text-white font-medium">Railway / Render</span> — server hosting</li>
                  <li><span className="text-white font-medium">Vercel</span> — website hosting</li>
                  <li><span className="text-white font-medium">Anthropic (Claude API)</span> — AI-powered responses (where enabled)</li>
                </ul>
                <p className="mt-3">Each service has its own privacy policy and we encourage you to review them.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">7</span>
                Children's Privacy
              </h2>
              <p className="pl-10">Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">8</span>
                Changes to This Policy
              </h2>
              <p className="pl-10">We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">9</span>
                Contact Us
              </h2>
              <div className="pl-10 space-y-2">
                <p>For any privacy-related questions or requests, contact us at:</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-3 space-y-2">
                  <p className="text-white font-semibold">NXT Gen AI Labs</p>
                  <p>📍 Jabalpur, Madhya Pradesh, India</p>
                  <p>📞 WhatsApp: <a href="https://wa.me/919098779146" className="text-accent">+91 83779 11745</a></p>
                  <p>🌐 Website: <a href="https://nxtgenailabs.work" className="text-accent">nxtgenailabs.work</a></p>
                </div>
              </div>
            </section>

          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-white/10 text-white/30 text-sm text-center">
            © {new Date().getFullYear()} NXT Gen AI Labs. All rights reserved.
          </div>
        </main>
      </div>
    </>
  );
        }
      
