'use client';
import { useState } from 'react';

export default function HiighSubmit() {
  const [form, setForm] = useState({
    belief: '',
    tribute: '',
    videoLink: '',
    social1: '',
    social2: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Your pledge has been received. Our SOCIIETY curators will review your offering.');
  };

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      color: '#fff'
    }}>
      {/* Background */}
      <div style={{
        backgroundImage: "url('/images/hiighsociiety.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'brightness(0.65)'
      }}></div>

      {/* Foreground Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        maxWidth: '700px',
        margin: '0 auto',
        height: '100%',
        overflowY: 'auto',
        backdropFilter: 'blur(3px)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '2rem', textAlign: 'center' }}>
          Hiigh SOCIIETY | Submit Your Pledge
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <div>
            <label>Belief Statement</label><br />
            <textarea
              name="belief"
              value={form.belief}
              onChange={handleChange}
              placeholder="Why do you believe SOCIIETY is the future — and what do you bring to it?"
              style={inputStyle}
              rows={6}
            />
          </div>

          <div>
            <label>Monetary Tribute (USD)</label><br />
            <input
              type="text"
              name="tribute"
              value={form.tribute}
              onChange={handleChange}
              placeholder="$500 | $5,000 | $100,000 | etc."
              style={inputStyle}
            />
          </div>

          <div>
            <label>Video Upload Link</label><br />
            <input
              type="url"
              name="videoLink"
              value={form.videoLink}
              onChange={handleChange}
              placeholder="https://..."
              style={inputStyle}
            />
          </div>

          <div>
            <label>Social Profile 1 (required)</label><br />
            <input
              type="url"
              name="social1"
              value={form.social1}
              onChange={handleChange}
              placeholder="https://instagram.com/you"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label>Social Profile 2 (required)</label><br />
            <input
              type="url"
              name="social2"
              value={form.social2}
              onChange={handleChange}
              placeholder="https://twitter.com/you"
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" style={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontSize: '1.1rem',
            border: 'none',
            cursor: 'pointer'
          }}>
            Submit My Pledge
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '1rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#111',
  color: '#fff',
  border: '1px solid #444'
};
