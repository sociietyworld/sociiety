export default function About() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      color: '#fff'
    }}>
      {/* Background Layer with Blur and Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/about.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(4px) brightness(0.4)',
        zIndex: 0
      }} />

      {/* Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '6rem 2rem',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '1.5rem' }}>
          Behind SOCIIETY
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Founded by <strong>Adam Jacobs</strong>, SOCIIETY was born out of the need for authenticity, exclusivity, and encrypted creative belonging. This isn't fashion — it’s a system.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          SOCIIETY is the first luxury ecosystem built on identity, access, and status — with wearables that verify the wearer.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>
          The Vision
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          To reshape luxury through verifiable expression. Fashion is the interface, verification is the backend. Together: power, elegance, and privacy.
        </p>

        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          The Mission
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '3rem', lineHeight: '1.6' }}>
          To build a creative haven for the chosen. Verified. Protected. Global. SOCIIETY is where the future quietly gathers.
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
          marginTop: '1rem',
          transition: 'all 0.3s ease'
        }}>
          Request Access — If You’re Ready
        </a>
      </div>
    </div>
  );
}
