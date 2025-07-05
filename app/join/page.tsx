'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PledgePage() {
  const [form, setForm] = useState({
    name: '',
    instagram: '',
    address: '',
    email: '',
    phone: '',
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzZieNLs-DPx-eDgngCg9qnAKZMXmtnLgesh2iTUf-H-m3my7m-lmSquoC7V9lbSngT/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      setStatus('success')
      setForm({ name: '', instagram: '', address: '', email: '', phone: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative min-h-screen w-full text-[#FFD700]">
      <Image
        src="/images/contact.png"
        alt="SOCIIETY Background"
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
      />

      <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex justify-center px-6 py-28 overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-black/80 border border-white/30 p-14 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.1)] flex flex-col gap-10"
        >
          <h1 className="text-5xl font-black text-center uppercase tracking-widest text-[#FFD700] drop-shadow-lg mb-4">
            Your Legacy Starts Here
          </h1>

          {[
            { name: 'name', placeholder: 'Full Name' },
            { name: 'instagram', placeholder: 'Instagram Handle' },
            { name: 'address', placeholder: 'Shipping Address' },
            { name: 'email', placeholder: 'Email Address', type: 'email' },
            { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
          ].map(({ name, placeholder, type = 'text' }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full text-2xl px-8 py-5 bg-transparent border border-white/40 rounded-xl placeholder-white placeholder-opacity-70 text-[#FFD700] focus:outline-none focus:ring-4 focus:ring-[#FFD700] drop-shadow"
            />
          ))}

          <button
            type="submit"
            className="bg-[#FFD700] text-black text-2xl font-bold py-5 rounded-xl hover:bg-yellow-400 transition-all shadow-lg"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Apply to SOCIIETY'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center text-lg font-medium drop-shadow">
              Application submitted!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-lg font-medium drop-shadow">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
