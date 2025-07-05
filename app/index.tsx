import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#f3f2e9] font-serif text-[#1a1a1a]">
      <header className="bg-[#013220] text-gold flex items-center justify-between px-10 py-6">
        <h1 className="text-xl font-bold tracking-wide">SOCIIETY</h1>
        <nav className="space-x-6 text-gold font-sans font-semibold">
          <a href="#mission">Mission</a>
          <a href="#vision">Vision</a>
          <a href="#tiers">Tiers</a>
          <a href="#capsules">Capsules</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#sclass">S-Class Tag</a>
          <a href="#app">App</a>
          <Link href="/pledge" className="underline hover:text-yellow-400">Join</Link>
        </nav>
      </header>

      <section id="mission" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Our Mission</h2>
        <p className="text-lg font-sans leading-relaxed">
          At SOCIIETY, we believe in honoring the past while shaping the future.
          What began as a response to isolation has become a private network of creators and legacy-builders.
        </p>
      </section>

      <section id="vision" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Our Vision</h2>
        <p className="text-lg font-sans leading-relaxed">
          SOCIIETY merges legacy and innovation — capsules, wearable identity, encrypted social access.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Image src="/images/rooted-in-legacy.png" alt="Legacy" width={600} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/people.png" alt="Members" width={600} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="tiers" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Membership Tiers</h2>
        <Image src="/images/tiers.png" alt="Tiers" width={800} height={500} className="rounded-xl shadow-xl mt-6" />
      </section>

      <section id="capsules" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Capsule Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <Image src="/images/ring.png" alt="Ring" width={400} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/bracelet.png" alt="Bracelet" width={400} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/glasses.png" alt="Glasses" width={400} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="roadmap" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Roadmap to Utopia</h2>
        <p className="text-lg font-sans leading-relaxed">
          Phase I – Authenticated wearables<br />
          Phase II – SOCIIETY App<br />
          Phase III – Biometric access<br />
          Phase IV – SOCIIETY UTOPIA hubs
        </p>
      </section>

      <section id="sclass" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">The S-Class Tag</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Image src="/images/sclass-tag.png" alt="Tag" width={500} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/emblem.png" alt="Emblem" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="app" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">The SOCIIETY App</h2>
        <p className="text-lg font-sans leading-relaxed">
          Encrypted. Anonymous. Creative. Private. Your membership comes alive here.
        </p>
      </section>

      <section className="bg-[#4b0082] text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Become a Founding Investor</h2>
        <p className="text-lg font-sans max-w-3xl mx-auto">
          We are building a billion-dollar private network. If you’re ready to step into the future, this is your invitation.
        </p>
        <Link href="/pledge" className="inline-block mt-6 px-8 py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-300">
          Join the SOCIIETY
        </Link>
      </section>

      <footer className="bg-black text-gray-400 text-center py-10 text-sm">
        © SOCIIETY 2025 — Designed for Legacy | founders@sociietyworld.com
      </footer>
    </div>
  )
}
