export default function About() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '4rem 2rem'
    }}>
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', color: '#FFD700' }}>
          Behind SOCIIETY
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          In a world obsessed with access and authenticity, <strong>Adam Jacobs</strong> quietly began building the future. SOCIIETY isn’t just a brand — it&apos;s a movement.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          SOCIIETY exists at the intersection of fashion, technology, and secrecy. It&apos;s more than garments — it&apos;s proof of belonging. Through biometric identity, digital verification, and luxury authentication, SOCIIETY is creating the first ecosystem of trust, status, and creativity.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>
          Our Vision
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
          To lead a discreet global shift that merges exclusivity, creativity, and digital identity — one capsule at a time.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '3rem' }}>
          To empower a connected, creative elite through a secure luxury ecosystem. SOCIIETY is where the future lives — for those ready to shape it.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <a href="/contact" style={{
            backgroundColor: '#FFD700',
            color: '#000',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}>
            Request Access — If You’re Ready
          </a>
        </div>
      </section>
    </div>
  );
}
