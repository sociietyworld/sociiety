'use client';
import { useState } from 'react';

export default function Blueprint() {
  const [input, setInput] = useState('');
  const [access, setAccess] = useState(false);
  const [error, setError] = useState('');
  const staticCode = 'SociietyVault2025';

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
      backgroundImage: "url('/images/connectivity-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'sans-serif',
      color: '#fff'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '6rem 2rem',
        minHeight: '100vh'
      }}>
        <Section title="THE CAPSULE">
          <p>SOCIIETY isn’t just fashion — it’s encoded identity. Our capsules are rare cultural moments. You don’t wear them. You unlock them.</p>
        </Section>

        <Section title="THE S-CLASS TAG">
          <p>Each garment includes an encrypted S-Class Tag: scannable, non-fakeable, and forever tied to your verified identity. Fashion becomes infrastructure.</p>
          <img src="/images/s-class-tag.png" alt="S-Class Tag" style={imageStyle} />
        </Section>

        <Section title="THE APP">
          <p>The SOCIIETY App is not social media. It’s encrypted connection, resale access, tokenized ownership, and identity wrapped into one private portal.</p>
          <img src="/images/app-preview.png" alt="App Preview" style={imageStyle} />
        </Section>

        <Section title="THE WEARABLES">
          <p>The SOCIIETY Ring, Bracelet, and Glasses are your passport to the vault. Your wallet, your signature, your verification.</p>
          <div style={row}>
            <img src="/images/ring.png" alt="Ring" style={thumb} />
            <img src="/images/bracelet.png" alt="Bracelet" style={thumb} />
            <img src="/images/glasses.png" alt="Glasses" style={thumb} />
          </div>
        </Section>

        <Section title="S COIN">
          <p>S Coin is value reimagined: proof-of-access, resale tracking, vault authority, and community governance all built into a tokenized internal currency.</p>
          <img src="/images/s-coin.png" alt="S Coin" style={thumb} />
        </Section>

        <Section title="THE UTOPIA">
          <p>SOCIIETY’s long vision is a physical utopia for digital creatives: biometric access, wearable verification, off-the-record luxury built by those who create culture — not consume it.</p>
        </Section>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/contact" style={{
            backgroundColor: '#FFD700',
            color: '#000',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Request Access to Invest
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '4rem', maxWidth: '800px', marginInline: 'auto' }}>
      <h2 style={{ fontSize: '2rem', color: '#FFD700', marginBottom: '1rem' }}>{title}</h2>
      <div style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>{children}</div>
    </section>
  );
}

const row = {
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '1.5rem'
};

const imageStyle = {
  width: '100%',
  maxWidth: '600px',
  borderRadius: '1rem',
  marginTop: '1rem'
};

const thumb = {
  height: '180px',
  borderRadius: '1rem'
};
