export default function About() {
  return (
    <div style={{
      backgroundImage: "url('/images/about.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'sans-serif',
      position: 'relative',
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: '6rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        borderRadius: '1rem',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '1.5rem' }}>
          Behind SOCIIETY
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          SOCIIETY was founded by <strong>Adam Jacobs</strong> — a visionary redefining the future of luxury, verification, and cultural identity.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          This isn't just a brand. It&apos;s a silent signal of who belongs. Powered by S-Class verification, creative exclusivity, and a future-forward ethos — SOCIIETY is building a private world you can wear.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem', color: '#FFD700' }}>
          The Vision
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          To merge fashion, encrypted identity, and ultra-private social culture into a verified luxury ecosystem for the next generation of creators.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
          The Mission
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '3rem', lineHeight: '1.6' }}>
          To empower a chosen few with authenticated access to the future — through the things they wear and the stories they share.
        </p>

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
    </div>
  );
}
