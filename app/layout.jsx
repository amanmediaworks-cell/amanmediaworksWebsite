import Image from "next/image";
import Link from "next/link";
import './globals.css'

export const metadata = {
  title: 'AmanMedia Works — E-Commerce Account Management Agency',
  description: 'AmanMedia Works manages your seller accounts across Amazon, Flipkart, Meesho, Myntra, Ajio and more. Based in Greater Noida, NCR.',
}

const WHATSAPP_URL = 'https://wa.me/917678224429?text=Hi%20AmanMedia%20Works%2C%20I%20want%20a%20free%20account%20audit'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '18px 40px',
      background: 'rgba(10,10,10,0.96)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
<Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
  
  {/* LOGO */}
  <Image 
    src="/logo.png" 
    alt="logo" 
    width={60} 
    height={45} 
    style={{
      borderRadius: "50%",
      objectFit: "cover"
    }}
  />

  {/* TEXT */}
  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
    
    <span style={{ 
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "22px",
      fontWeight: "600",
      color: "#C9A84C"
    }}>
      AmanMedia
    </span>

    <span style={{ 
      fontSize: "10px",
      letterSpacing: "0.35em",
      color: "#aaa"
    }}>
      WORKS
    </span>

  </div>

</Link>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([href, label]) => (
          <a key={href} href={href} style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#C8C8C0', fontWeight: 400 }}>
            {label.toUpperCase()}
          </a>
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
          padding: '9px 22px', background: '#25D366', color: '#fff',
          fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          💬 WHATSAPP
        </a>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '60px 40px 30px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.04em' }}>AmanMedia</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#666', marginBottom: '16px' }}>WORKS</div>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8 }}>Your brand. Every platform. Maximum growth.</p>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '16px', fontWeight: 500 }}>SERVICES</div>
            {['Account Management', 'PPC & Advertising', 'Catalog Listing', 'Brand Store Setup', 'Account Health'].map(s => (
              <a key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px' }}>{s}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '16px', fontWeight: 500 }}>PLATFORMS</div>
            {['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart & More'].map(p => (
              <div key={p} style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>{p}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '16px', fontWeight: 500 }}>CONTACT</div>
            <div style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>📍 Greater Noida, NCR, India</div>
            <a href="tel:+917678224429" style={{ display: 'block', fontSize: '13px', color: '#C9A84C', marginBottom: '10px' }}>📞 +91 76782 24429</a>
            <a href="mailto:info@amanmediaworks.in" style={{ display: 'block', fontSize: '13px', color: '#C9A84C', marginBottom: '16px' }}>✉ info@amanmediaworks.in</a>
            <a href="https://wa.me/917678224429" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', background: '#25D366', color: '#fff', padding: '8px 16px', letterSpacing: '0.1em' }}>
              💬 WHATSAPP US
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', fontSize: '12px', color: '#333', textAlign: 'center' }}>
          © 2025 AmanMedia Works. All rights reserved. | Greater Noida, India
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/917678224429?text=Hi%20AmanMedia%20Works%2C%20I%20want%20a%20free%20account%20audit" target="_blank" rel="noreferrer" style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
      width: '60px', height: '60px', borderRadius: '50%',
      background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
    }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.849L.057 23.547a.75.75 0 00.921.921l5.699-1.469A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.498-5.2-1.37l-.374-.215-3.878.999 1.018-3.786-.235-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  )
}
