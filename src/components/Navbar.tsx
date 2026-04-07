import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0, 245, 255, 0.1)' : '1px solid transparent',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#00f5ff',
          textDecoration: 'none',
          textShadow: '0 0 10px rgba(0, 245, 255, 0.6)',
        }}
      >
        <Terminal size={20} />
        FM
      </a>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: 'rgba(226, 232, 240, 0.7)',
              textDecoration: 'none',
              transition: 'color 0.2s, text-shadow 0.2s',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = '#00f5ff';
              (e.target as HTMLAnchorElement).style.textShadow = '0 0 8px rgba(0, 245, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = 'rgba(226, 232, 240, 0.7)';
              (e.target as HTMLAnchorElement).style.textShadow = 'none';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
