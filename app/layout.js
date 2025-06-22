import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: "SOCIIETY – Verified Luxury Ecosystem",
  description: "The encrypted future of fashion, access, and identity.",
  openGraph: {
    title: "SOCIIETY",
    description: "Don’t miss the next great invention since the internet.",
    images: ["/images/about.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #222' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="SOCIIETY Logo" style={{ height: '40px', marginRight: '0.75rem' }} />
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>SOCIIETY</span>
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/about" style={{ color: '#FFD700', textDecoration: 'none' }}>About</Link>
            <Link href="/contact" style={{ color: '#FFD700', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
