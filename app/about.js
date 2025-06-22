export default function Contact() {
  return (
    <div style={{
      backgroundImage: "url('/images/contact.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
      fontFamily: 'sans-serif',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
    }}>
      {/* Overlay for contrast */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: '4rem 2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        maxWidth: '700px',
        zIndex: 2,
      }}>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#FFD700' }}>
          The future is now.
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Don’t miss out on the greatest invention since the internet.  
          This isn’t just fashion — it’s infrastructure for a new identity era.  
          SOCIIETY is your gateway to the next world. If you’re ready.
        </p>

        <a href="mailto:shuiisociietyproductions@gmail.com" style={{
          backgroundColor: '#FFD700',
          color: '#000',
          padding: '1rem 2.5rem',
          borderRadius: '2rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }}>
          Request Access
        </a>
      </div>
    </div>
  );
}
