import Link from 'next/link';

export default function Home() {
  return (
    <section
      style={{
        height: '100vh',
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Welcome to SOCIIETY</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Where Fashion Meets the Future.</p>

        <Link href="/about" style={{
          backgroundColor: '#FFD700',
          color: '#000',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          borderRadius: '2rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block',
          cursor: 'pointer'
        }}>
          Join the SOCIIETY
        </Link>
      </div>
    </section>
  );
}
