'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlueprintGate() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const staticCode = 'SociietyVault2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === staticCode) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Access denied. Invalid passcode.');
    }
  };

  if (!unlocked) {
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
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '2rem' }}>
        Welcome to the SOCIIETY Vault
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Choose your destination below.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', width: '100%', maxWidth: '400px' }}>
        <button onClick={() => router.push('/blueprints/investor')} style={buttonStyle}>
          View Investor Pitch
        </button>
        <button onClick={() => router.push('/hiighsociiety')} style={buttonStyle}>
          Submit Hiigh SOCIIETY Pledge
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#FFD700',
  color: '#000',
  fontWeight: 'bold',
  padding: '1rem',
  borderRadius: '2rem',
  fontSize: '1.1rem',
  border: 'none',
  cursor: 'pointer'
};
