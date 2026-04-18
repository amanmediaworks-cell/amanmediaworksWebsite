const services = [
  { icon: '◈', title: 'Seller Account Management', desc: 'Complete management of your seller accounts across Amazon, Flipkart, Meesho, Myntra, Ajio and more.', points: ['Account setup & verification', 'Dashboard monitoring', 'Policy compliance', 'Suspension appeals'] },
  { icon: '◇', title: 'PPC & Advertising', desc: 'Data-driven paid campaigns that deliver maximum return on every rupee you spend.', points: ['Sponsored Products & Brands', 'Keyword research & bidding', 'ACoS/ROAS optimization', 'Weekly performance reports'] },
  { icon: '◉', title: 'Catalog & Listing Optimization', desc: 'SEO-optimized product listings that rank higher and convert better than competition.', points: ['Keyword-rich titles & bullets', 'Backend search terms', 'A+ Content pages', 'Bulk catalog uploads'] },
  { icon: '◆', title: 'Brand Store Setup', desc: 'Beautiful brand storefronts that tell your story and drive repeat buyers.', points: ['Amazon Brand Registry', 'Storefront design', 'A+ content creation', 'Brand analytics setup'] },
  { icon: '◎', title: 'Account Health Management', desc: 'Proactive monitoring and rapid resolution before small issues become big problems.', points: ['ODR monitoring', 'Policy violation fixes', 'Negative review management', 'Suspension prevention'] },
  { icon: '◐', title: 'Analytics & Reporting', desc: 'Clear monthly reports with actionable insights — not just numbers, but what to do next.', points: ['Sales performance analysis', 'Keyword rank tracking', 'Competitor benchmarking', 'Growth recommendations'] },
]

const platforms = ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart', 'Nykaa', 'Snapdeal', 'Tata Cliq']

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at 70% 50%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>WHAT WE OFFER</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
          Every service your brand{' '}
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>needs to win</em>
        </h1>
        <p style={{ fontSize: '17px', color: '#666', maxWidth: '480px', margin: '0 auto' }}>
          AmanMedia Works handles everything — from account setup to scaling.
        </p>
      </section>

      <section style={{ padding: '60px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
          {services.map(s => (
            <div key={s.title} style={{ padding: '48px 36px', background: '#0D0D0D' }}>
              <div style={{ fontSize: '28px', color: '#C9A84C', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400, marginBottom: '14px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>{s.desc}</p>
              {s.points.map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#C9A84C', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#888' }}>{p}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>PLATFORMS WE MANAGE</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, marginBottom: '36px' }}>One agency. Every platform.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {platforms.map(p => (
              <div key={p} style={{ padding: '10px 24px', border: '1px solid rgba(201,168,76,0.2)', fontSize: '13px', color: '#C8C8C0', letterSpacing: '0.06em' }}>
                {p}
              </div>
            ))}
            <div style={{ padding: '10px 24px', border: '1px solid rgba(201,168,76,0.4)', fontSize: '13px', color: '#C9A84C' }}>+ More</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>Ready to get started?</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '32px' }}>Get a free account audit from AmanMedia Works — no commitment needed.</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ display: 'inline-block', padding: '16px 44px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 700 }}>
            GET FREE AUDIT
          </a>
          <a href="https://wa.me/917678224429" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '16px 44px', background: '#25D366', color: '#fff', fontSize: '13px', letterSpacing: '0.12em', fontWeight: 600 }}>
            💬 WHATSAPP US
          </a>
        </div>
      </section>
    </main>
  )
}
