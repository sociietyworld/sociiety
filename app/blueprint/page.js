'use client';
import { useState } from 'react';

export default function Blueprint() {
  const [input, setInput] = useState('');
  const [access, setAccess] = useState(false);
  const [error, setError] = useState('');
  const staticCode = 'Society-Vault-2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === staticCode) {
      setAccess(true);
    } else {
      setError('Access denied. Invalid passcode.');
    }
  };

  if (!access) {
    return (
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>SOCIIETY VAULT ACCESS</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter access code"
            style={{ padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#111', color: '#fff', border: '1px solid #444' }}
          />
          <button type="submit" style={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            padding: '1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}>
            Enter Vault
          </button>
        </form>
        {error && <p style={{ color: '#f44', marginTop: '1rem' }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{
      backgroundImage: "url('/images/investor-agreement.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'sans-serif',
      color: '#fff',
      padding: '4rem 2rem',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '3rem 2rem',
        borderRadius: '1rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#FFD700', textAlign: 'center', marginBottom: '2rem' }}>
          SOCIIETY: Internal Investor Blueprint
        </h1>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>Vision</h2>
          <p style={paragraph}>To redefine luxury through privacy, precision, and proof. SOCIIETY is not a brand — it's a future infrastructure of identity, access, and encrypted cultural capital.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>5-Phase Roadmap</h2>
          <ul style={list}>
            <li>Phase 1: Capsule system + verification tech (complete)</li>
            <li>Phase 2: Wearables – Ring, Bracelet, Glasses</li>
            <li>Phase 3: SOCIIETY App – resale vault, encrypted wallet</li>
            <li>Phase 4: S-Class Coin + closed-loop economy</li>
            <li>Phase 5: Biometric Utopia — physical creative sanctuaries</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>Technology Stack</h2>
          <ul style={list}>
            <li>🔗 S-Class Tag – secure embedded garment identity</li>
            <li>💍 SOCIIETY Wearables – identity, access & authentication</li>
            <li>📲 SOCIIETY App – encrypted peer community</li>
            <li>🪙 SOCIIETY Coin – closed ecosystem reputation currency</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>Capsule Strategy</h2>
          <ul style={list}>
            <li>🧥 Timeless Tailoring – refined couture meets future codes</li>
            <li>🎓 Rooted in Legacy – elite collegiate design language</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>Membership Tiers</h2>
          <ul style={list}>
            <li>• S-Basic – biometric intake scan ($500+)</li>
            <li>• S-Bio – biometric scan + fingerprint & avatar</li>
            <li>• S-Class – capsule + wearable authentication</li>
            <li>• Hiigh SOCIIETY – pledge-based, unlimited tier</li>
            <li>• Utopia Architect – founding legacy investors</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={title}>Lottery System Breakdown</h2>
          <ul style={list}>
            <li>✅ Verified biometric profile (scan, DNA)</li>
            <li>✅ Offering strength (pledge, narrative, vision)</li>
            <li>✅ Social capital review (reputation, network)</li>
            <li>✅ Wearable pairing & legacy invite system</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/hiigh/submit" style={{
            backgroundColor: '#FFD700',
            color: '#000',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Enter Hiigh SOCIIETY Lottery Pledge
          </a>
        </div>
      </div>
    </div>
  );
}

const title = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#FFD700',
  marginBottom: '1rem'
};

const paragraph = {
  fontSize: '1.15rem',
  lineHeight: '1.6',
  marginBottom: '1rem'
};

const list = {
  fontSize: '1.05rem',
  lineHeight: '1.8',
  paddingLeft: '1rem',
  marginBottom: '1rem'
};