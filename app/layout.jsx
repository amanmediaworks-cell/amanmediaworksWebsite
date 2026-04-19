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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '18px 40px',
      background: 'rgba(10,10,10,0.96)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
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
          <a key={href} href={href} style={{
            fontSize: '12px',
            letterSpacing: '0.12em',
            color: '#C8C8C0',
            fontWeight: 400
          }}>
            {label.toUpperCase()}
          </a>
        ))}

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
          padding: '9px 22px',
          background: '#25D366',
          color: '#fff',
          fontSize: '12px',
          letterSpacing: '0.1em',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
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
      background: '#0A0A0A',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '60px 40px 30px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px',
              color: '#C9A84C',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}>
              AmanMedia
            </div>
            <div style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: '#666',
              marginBottom: '16px'
            }}>
              WORKS
            </div>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8 }}>
              Your brand. Every platform. Maximum growth.
            </p>
          </div>

          <div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#C9A84C',
              marginBottom: '16px'
            }}>
              SERVICES
            </div>
            {['Account Management', 'PPC & Advertising', 'Catalog Listing', 'Brand Store Setup', 'Account Health'].map(s => (
              <a key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px' }}>
                {s}
              </a>
            ))}
          </div>

          <div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#C9A84C',
              marginBottom: '16px'
            }}>
              PLATFORMS
            </div>
            {['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart & More'].map(p => (
              <div key={p} style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>
                {p}
              </div>
            ))}
          </div>

          <div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#C9A84C',
              marginBottom: '16px'
            }}>
              CONTACT
            </div>
            <div style={{ fontSize: '13px', color: '#555' }}>📍 Greater Noida, NCR</div>
            <a href="tel:+917678224429" style={{ display: 'block', color: '#C9A84C' }}>
              📞 +91 76782 24429
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      💬
    </a>
  )
}