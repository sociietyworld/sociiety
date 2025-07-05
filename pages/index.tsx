import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
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
          At SOCIIETY, we believe in honoring the past while shaping the future. What began as a response to isolation has become a new order — a private network of creators, visionaries, and legacy-builders united under one shield.
        </p>
      </section>

      <section id="vision" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Our Vision</h2>
        <p className="text-lg font-sans leading-relaxed">
          SOCIIETY is the future of identity, connection, and creativity. From S-Class Tags to capsule drops to biometric rings, SOCIIETY merges legacy with innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Image src="/images/rooted-in-legacy.png" alt="Rooted in Legacy" width={600} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/people.png" alt="Members" width={600} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="tiers" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Membership Tiers</h2>
        <p className="text-lg font-sans leading-relaxed">Every tier unlocks privileges — from early access to secret releases to Utopia-level experiences.</p>
        <Image src="/images/tiers.png" alt="Tiers" width={800} height={500} className="rounded-xl shadow-xl mt-6" />
      </section>

      <section id="capsules" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Capsule Releases</h2>
        <p className="text-lg font-sans leading-relaxed">Timeless silhouettes embedded with S-Class Tags. Guaranteed rarity and identity.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <Image src="/images/ring.png" alt="Ring" width={400} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/bracelet.png" alt="Bracelet" width={400} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/glasses.png" alt="Glasses" width={400} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="roadmap" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">Roadmap to Utopia</h2>
        <p className="text-lg font-sans leading-relaxed">
          Phase I – Drop authenticated luxury wearables<br />
          Phase II – Launch The SOCIIETY App<br />
          Phase III – Enable biometric S-Class access<br />
          Phase IV – Establish physical SOCIIETY UTOPIA hubs
        </p>
      </section>

      <section id="sclass" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">The S-Class Tag System</h2>
        <p className="text-lg font-sans leading-relaxed">
          The S-Class Tag is your seal of authenticity. Drop history, tier, and identity — all encrypted.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Image src="/images/sclass-tag.png" alt="S-Class Tag" width={500} height={400} className="rounded-xl shadow-lg" />
          <Image src="/images/emblem.png" alt="Emblem" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="app" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl text-[#4b0082] font-bold mb-4">The SOCIIETY App</h2>
        <p className="text-lg font-sans leading-relaxed">
          An encrypted headquarters for SOCIIETY members. Exclusive feeds, biometric security, creative tools, and capsule alerts.
        </p>
      </section>

      <section className="bg-[#4b0082] text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Become a Founding Investor</h2>
        <p className="text-lg font-sans max-w-3xl mx-auto">
          We are building a billion-dollar private network. If you’re ready to step into the future, this is your invitation.
        </p>
        <Link href="/pledge" className="inline-block mt-6 px-8 py-4 bg-gold text-[#013220] text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-400">
          Join the SOCIIETY
        </Link>
      </section>

      <footer className="bg-black text-gray-400 text-center py-10 text-sm">
        © SOCIIETY 2025 — Designed for Legacy | founders@sociietyworld.com
      </footer>
    </div>
  )
}
