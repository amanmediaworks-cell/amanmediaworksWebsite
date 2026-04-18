export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at 30% 50%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>OUR STORY</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '28px' }}>
            Built by Sellers,{' '}
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>For Brands</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.9, maxWidth: '600px', margin: '0 auto' }}>
            AmanMedia Works was founded in Greater Noida with one mission — help Indian brands sell more on every major e-commerce platform, without the headaches.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, marginBottom: '20px' }}>Why we exist</h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.9 }}>
              Most brands struggle on e-commerce not because their products are bad — but because managing multiple platform accounts is a full-time job. AmanMedia Works handles everything so brand owners can focus on what they do best: building great products.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, marginBottom: '20px' }}>Our edge</h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.9 }}>
              Unlike other agencies, AmanMedia Works has an in-house IT and software development team. We build custom tools — dashboards, automation scripts, reporting systems — that give our clients a real competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px' }}>
          {[
            { number: '50+', label: 'Brands Managed' },
            { number: '6+', label: 'Platforms' },
            { number: '3X', label: 'Avg Revenue Growth' },
            { number: '98%', label: 'Client Retention' },
          ].map(s => (
            <div key={s.label} style={{ padding: '44px 32px', background: '#111', textAlign: 'center', border: '1px solid rgba(201,168,76,0.08)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#666', marginTop: '12px' }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>Let us grow together</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '32px' }}>AmanMedia Works — Greater Noida, NCR</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ display: 'inline-block', padding: '16px 40px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 700 }}>
            CONTACT US
          </a>
          <a href="https://wa.me/917678224429" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '16px 40px', background: '#25D366', color: '#fff', fontSize: '13px', letterSpacing: '0.12em', fontWeight: 600 }}>
            💬 WHATSAPP
          </a>
        </div>
      </section>
    </main>
  )
}
