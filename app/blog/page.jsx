const posts = [
  { title: 'How to Rank on Amazon India in 2025', excerpt: 'A complete guide to Amazon SEO — keywords, listings, reviews and algorithm changes you need to know.', category: 'Amazon', date: 'Dec 2024', readTime: '8 min' },
  { title: 'Flipkart vs Amazon: Which Platform to Prioritise?', excerpt: 'A data-driven comparison of fees, traffic, and conversion rates to help you decide where to focus.', category: 'Strategy', date: 'Nov 2024', readTime: '6 min' },
  { title: 'Meesho for D2C Brands: Is It Worth It?', excerpt: "Meesho's zero commission model sounds too good to be true. Here is the reality for D2C brands.", category: 'Meesho', date: 'Nov 2024', readTime: '5 min' },
  { title: 'How to Fix a Suspended Amazon Seller Account', excerpt: 'Step-by-step guide to writing a successful Plan of Action and getting your account reinstated fast.', category: 'Account Health', date: 'Oct 2024', readTime: '10 min' },
  { title: 'PPC for Beginners: Amazon Sponsored Products', excerpt: 'Everything you need to know about Amazon Sponsored Products — from campaign structure to bidding.', category: 'Advertising', date: 'Oct 2024', readTime: '7 min' },
  { title: 'A+ Content That Actually Converts', excerpt: 'Real before/after examples of A+ content that increased conversion rates by 20-40% for our clients.', category: 'Listings', date: 'Sep 2024', readTime: '6 min' },
]

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 40%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>KNOWLEDGE BASE</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 68px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
          E-Commerce{' '}
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Insights & Guides</em>
        </h1>
        <p style={{ fontSize: '16px', color: '#666', maxWidth: '420px', margin: '0 auto' }}>
          Platform updates, seller strategies, and growth tips from AmanMedia Works team.
        </p>
      </section>

      <section style={{ padding: '60px 40px 100px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
          {posts.map(post => (
            <article key={post.title} style={{ padding: '44px 36px', background: '#0A0A0A' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '3px 10px' }}>{post.category.toUpperCase()}</span>
                <span style={{ fontSize: '12px', color: '#444' }}>{post.date} · {post.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>{post.excerpt}</p>
              <span style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '0.1em', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '2px' }}>READ MORE →</span>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)', background: '#0D0D0D' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>STAY UPDATED</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, marginBottom: '12px' }}>Get platform updates in your inbox</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '28px' }}>Weekly insights on Amazon, Flipkart, Meesho policy changes from AmanMedia Works.</p>
        <div style={{ display: 'flex', maxWidth: '400px', margin: '0 auto' }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '14px 16px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', borderRight: 'none', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
          <button style={{ padding: '14px 24px', background: '#C9A84C', color: '#0A0A0A', fontSize: '12px', letterSpacing: '0.15em', fontWeight: 700, border: 'none', cursor: 'pointer' }}>JOIN</button>
        </div>
      </section>
    </main>
  )
}
