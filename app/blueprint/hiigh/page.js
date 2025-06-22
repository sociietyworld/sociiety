'use client';

export default function HiighVault() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '6rem 2rem',
      textAlign: 'center',
      backgroundImage: "url('/images/blueprint-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '4rem 2rem',
        borderRadius: '1rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ fontSize: '2.75rem', color: '#FFD700', marginBottom: '2rem' }}>
          Hiigh SOCIIETY Lottery Pledge
        </h1>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Some give $100,000. Others offer something priceless.  
          This is where the truth is measured. This is the Hiigh Pledge.
        </p>

        <blockquote style={{
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: '#FFD700',
          marginBottom: '2.5rem'
        }}>
          “You don’t join SOCIIETY. You offer your proof.”
        </blockquote>

        <a href="/hiigh/submit" style={{
          backgroundColor: '#FFD700',
          color: '#000',
          padding: '1rem 2rem',
          borderRadius: '2rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          Begin Your Pledge
        </a>
      </div>
    </div>
  );
}
