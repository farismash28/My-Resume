import { motion } from 'framer-motion';
import { User, Zap } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <Zap size={20} style={{ color: '#00f5ff' }} />
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
            About Me
          </h2>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0, 245, 255, 0.4), transparent)',
              marginLeft: '1rem',
            }}
          />
        </div>

        {/* Bio card */}
        <div
          className="neon-card"
          style={{
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
          }}
        >
          {/* Avatar placeholder */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(168, 85, 247, 0.2))',
                border: '2px solid rgba(0, 245, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.15)',
              }}
            >
              <User size={36} style={{ color: '#00f5ff' }} />
            </div>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              {resumeData.name}
            </h3>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: '#00f5ff',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
              }}
            >
              {resumeData.title}
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(226, 232, 240, 0.75)',
                lineHeight: 1.8,
              }}
            >
              {resumeData.bio}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
