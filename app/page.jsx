const WHATSAPP_URL = 'https://wa.me/917678224429?text=Hi%20AmanMedia%20Works%2C%20I%20want%20a%20free%20account%20audit'
const platforms = ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart', 'Nykaa', 'Snapdeal']

const services = [
  { icon: '◈', title: 'Account Management', desc: 'End-to-end seller account handling across all major Indian e-commerce platforms.' },
  { icon: '◇', title: 'PPC & Advertising', desc: 'Data-driven ad campaigns that maximize ROAS and minimize wasted spend.' },
  { icon: '◉', title: 'Catalog & Listings', desc: 'SEO-optimized product listings with compelling copy that rank and convert.' },
  { icon: '◆', title: 'Brand Store Setup', desc: 'Beautiful storefronts and A+ content that turn browsers into buyers.' },
  { icon: '◎', title: 'Account Health', desc: 'Proactive monitoring and rapid resolution of policy issues and suspensions.' },
  { icon: '◐', title: 'Analytics & Reports', desc: 'Monthly performance reports with clear insights and growth strategies.' },
]

const stats = [
  { number: '50+', label: 'Brands Managed' },
  { number: '6+', label: 'Platforms' },
  { number: '3X', label: 'Avg Revenue Growth' },
  { number: '98%', label: 'Client Retention' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 60% 50%, #1a1508 0%, #0A0A0A 65%)',
        padding: '120px 40px 80px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '860px' }}>
          <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 20px', marginBottom: '32px', fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C' }}>
            E-COMMERCE GROWTH PARTNER
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 300, lineHeight: 1.05, marginBottom: '28px' }}>
            Your Brand.<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Every Platform.</em><br />
            Maximum Growth.
          </h1>
          <p style={{ fontSize: '17px', color: '#888882', maxWidth: '560px', margin: '0 auto 44px', lineHeight: 1.8 }}>
            AmanMedia Works manages your seller accounts across Amazon, Flipkart, Meesho, Myntra, Ajio and more — so you can focus on building your brand.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ padding: '16px 36px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 600 }}>
              GET FREE AUDIT
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ padding: '16px 36px', background: '#25D366', color: '#fff', fontSize: '13px', letterSpacing: '0.12em', fontWeight: 600 }}>
              💬 WHATSAPP US
            </a>
            <a href="/services" style={{ padding: '16px 36px', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '13px', letterSpacing: '0.12em' }}>
              OUR SERVICES
            </a>
          </div>
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
            <a href="tel:+917678224429" style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#C9A84C' }}>📞</span> +91 76782 24429
            </a>
            <a href="mailto:info@amanmediaworks.in" style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#C9A84C' }}>✉</span> info@amanmediaworks.in
            </a>
            <span style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#C9A84C' }}>📍</span> Greater Noida, NCR
            </span>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section style={{ borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '20px 40px', background: '#111' }}>
        <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {platforms.map(p => (
            <span key={p} style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#444', fontWeight: 500 }}>{p.toUpperCase()}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
          {stats.map(s => (
            <div key={s.label} style={{ padding: '44px 32px', background: '#111', textAlign: 'center', border: '1px solid rgba(201,168,76,0.08)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#666', marginTop: '12px' }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>WHAT WE DO</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 300 }}>Full-Service Platform Management</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
            {services.map(s => (
              <div key={s.title} style={{ padding: '44px 36px', background: '#0D0D0D' }}>
                <div style={{ fontSize: '24px', color: '#C9A84C', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/services" style={{ fontSize: '13px', color: '#C9A84C', letterSpacing: '0.1em', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '3px' }}>
              VIEW ALL SERVICES →
            </a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '100px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>WHY AMANMEDIA WORKS</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, marginBottom: '24px', lineHeight: 1.2 }}>
              We are not just managers. We are growth partners.
            </h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.9, marginBottom: '20px' }}>
              Based in Greater Noida, our team combines deep platform expertise with in-house technology to deliver results that generic agencies cannot match.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: '#25D366', color: '#fff', fontSize: '13px', letterSpacing: '0.1em', fontWeight: 500 }}>
              💬 Chat on WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {['In-house IT team & custom tools', 'Platform-certified specialists', 'Transparent monthly reporting', 'Dedicated account manager', 'No long-term lock-in contracts', 'NCR-based, IST timezone support'].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: '#111', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '6px', height: '6px', background: '#C9A84C', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: '#C8C8C0' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)', background: '#0D0D0D' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>GET STARTED TODAY</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, marginBottom: '20px' }}>Ready to grow your brand?</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '44px' }}>Get a free account audit from AmanMedia Works — no commitment needed.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ padding: '18px 48px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, display: 'inline-block' }}>
            CLAIM FREE AUDIT
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ padding: '18px 48px', background: '#25D366', color: '#fff', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 600, display: 'inline-block' }}>
            💬 WHATSAPP US
          </a>
        </div>
      </section>
    </main>
  )
}
