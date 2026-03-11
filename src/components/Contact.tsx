import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { resumeData } from '../data/resume';

const socials = [
  {
    label: 'GitHub',
    href: resumeData.contact.github,
    icon: Github,
    color: '#e2e8f0',
  },
  {
    label: 'LinkedIn',
    href: resumeData.contact.linkedin,
    icon: Linkedin,
    color: '#0077b5',
  },
  {
    label: 'Email',
    href: `mailto:${resumeData.contact.email}`,
    icon: Mail,
    color: '#00f5ff',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2rem 8rem',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <Send size={20} style={{ color: '#00f5ff' }} />
          <h2
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.8rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get In Touch
          </h2>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(226, 232, 240, 0.65)',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of something great. Whether you have a question or just want to say hi — my inbox is
          open.
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {socials.map(({ label, href, icon: Icon, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1.5rem 2rem',
                borderRadius: '14px',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                minWidth: '120px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0, 245, 255, 0.5)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0, 245, 255, 0.2)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              <Icon size={28} style={{ color }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  color: 'rgba(226, 232, 240, 0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: '5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: 'rgba(226, 232, 240, 0.25)',
            letterSpacing: '0.05em',
          }}
        >
          Built by Faris Mashaleh · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
