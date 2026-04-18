export default function ContactPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 30%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>GET IN TOUCH</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 68px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
          Get Your Free{' '}
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Account Audit</em>
        </h1>
        <p style={{ fontSize: '16px', color: '#666', maxWidth: '440px', margin: '0 auto' }}>
          Fill out the form and AmanMedia Works will get back to you within 24 hours.
        </p>
      </section>

      <section style={{ padding: '40px 40px 100px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '60px' }}>

          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300, marginBottom: '32px' }}>Contact Info</h2>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '8px' }}>PHONE / WHATSAPP</div>
              <a href="tel:+917678224429" style={{ fontSize: '16px', color: '#FAFAF8', fontWeight: 400 }}>+91 76782 24429</a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '8px' }}>EMAIL</div>
              <a href="mailto:info@amanmediaworks.in" style={{ fontSize: '15px', color: '#FAFAF8' }}>info@amanmediaworks.in</a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '8px' }}>LOCATION</div>
              <div style={{ fontSize: '14px', color: '#C8C8C0' }}>Greater Noida, Uttar Pradesh, India</div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '8px' }}>WORKING HOURS</div>
              <div style={{ fontSize: '14px', color: '#C8C8C0' }}>Mon–Sat, 10am–7pm IST</div>
            </div>

            <a href="https://wa.me/917678224429?text=Hi%20AmanMedia%20Works%2C%20I%20want%20a%20free%20account%20audit" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', background: '#25D366', color: '#fff',
              fontSize: '13px', letterSpacing: '0.1em', fontWeight: 600,
            }}>
              💬 Chat on WhatsApp
            </a>
          </div>

          <div>
            <form action="https://formsubmit.co/info@amanmediaworks.in" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="hidden" name="_subject" value="New Lead — AmanMedia Works Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://amanmediaworks.in/contact" />

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666', display: 'block', marginBottom: '8px' }}>YOUR NAME *</label>
                <input name="name" required placeholder="Rahul Sharma" style={{ width: '100%', padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666', display: 'block', marginBottom: '8px' }}>EMAIL *</label>
                <input type="email" name="email" required placeholder="rahul@yourbrand.com" style={{ width: '100%', padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666', display: 'block', marginBottom: '8px' }}>PHONE / WHATSAPP</label>
                <input name="phone" placeholder="+91 98765 43210" style={{ width: '100%', padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666', display: 'block', marginBottom: '8px' }}>PLATFORMS YOU SELL ON</label>
                <input name="platforms" placeholder="Amazon, Flipkart, Meesho..." style={{ width: '100%', padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
                <textarea name="message" rows="4" placeholder="Tell us about your brand and current challenges..." style={{ width: '100%', padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>

              <button type="submit" style={{ padding: '16px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: '8px' }}>
                SEND & GET FREE AUDIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
