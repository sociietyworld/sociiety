'use client';
import { useState } from 'react';

export default function JoinWaitlist() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    social: '',
    address: '',
    size: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist submission:', form);
    alert('You’ve been added to the SOCIIETY waitlist. Watch your inbox.');
  };

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      backgroundImage: "url('/images/blueprint-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '4rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '3rem 2rem',
        borderRadius: '1rem',
        maxWidth: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#FFD700', textAlign: 'center' }}>
          Join the SOCIIETY Waitlist
        </h1>

        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required style={inputStyle} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required style={inputStyle} />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" style={inputStyle} />
        <input name="city" value={form.city} onChange={handleChange} placeholder="City" required style={inputStyle} />
        <input name="country" value={form.country} onChange={handleChange} placeholder="Country" required style={inputStyle} />
        <input name="social" value={form.social} onChange={handleChange} placeholder="Social Profile (Instagram, Twitter, etc.)" required style={inputStyle} />
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Shipping Address (for care packages)" rows={3} required style={inputStyle} />
        <input name="size" value={form.size} onChange={handleChange} placeholder="Apparel Size (S, M, L, etc.)" required style={inputStyle} />

        <button type="submit" style={{
          backgroundColor: '#FFD700',
          color: '#000',
          fontWeight: 'bold',
          padding: '1rem',
          borderRadius: '2rem',
          fontSize: '1rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Join the Waitlist
        </button>
      </form>
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
