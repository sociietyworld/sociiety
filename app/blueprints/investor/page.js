
'use client';

import { useState } from 'react';

export default function HiighSociietyPage() {
  const [form, setForm] = useState({
    name: '',
    social: '',
    statement: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting application...');

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxviAypM6ZphAaiQliBx6hivJ-0LiRrr6iPFs-7WhRWHRMdLPBn8ZhIuqdXJ-0feGsL/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("✅ Application received. Proceeding to payment...");
        setTimeout(() => handleStripe(), 2000);
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Submission failed.");
    }
  };

  const handleStripe = async () => {
    const stripe = window.Stripe("pk_live_51RcvEiANtZ7X2PRGWJExwPCCgE3QC17PqwJwFuXPmtseIxHTP47dYp18WE4xTNStXTtJ8INiDxu0ZO8alw59xWxx00It9oNHBh");
    const response = await fetch("/api/create-checkout-session", { method: "POST" });
    const session = await response.json();

    if (session.id) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      setStatus("❌ Stripe session failed.");
    }
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '4rem 2rem',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '3rem 2rem',
        borderRadius: '1rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#FFD700', textAlign: 'center', marginBottom: '2rem' }}>
          Hiigh SOCIIETY Application
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Submit your application below. If accepted, you'll be asked to complete your $50,000 offering.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="social"
            value={form.social}
            onChange={handleChange}
            placeholder="Social Profile (optional)"
            style={inputStyle}
          />
          <textarea
            name="statement"
            value={form.statement}
            onChange={handleChange}
            placeholder="Why do you feel you should be accepted?"
            rows="5"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Submit Application & Pay $50,000
          </button>
        </form>
        {status && <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>{status}</p>}
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