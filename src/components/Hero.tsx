import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, Github, FileText } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
        textAlign: 'center',
      }}
    >
      {/* Animated gradient orbs */}
      <div
        className="orb"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          animation: 'orbFloat 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '100px',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            background: 'rgba(0, 245, 255, 0.05)',
            marginBottom: '2rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#00f5ff',
            letterSpacing: '0.1em',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00f5ff',
              boxShadow: '0 0 8px #00f5ff',
              animation: 'pulse 2s infinite',
            }}
          />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {resumeData.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: '#00f5ff',
            textShadow: '0 0 10px rgba(0, 245, 255, 0.6)',
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
          }}
        >
          <TypeAnimation
            sequence={[
              'Systems Expert',
              2000,
              'Infrastructure Architect',
              2000,
              'AI-Augmented Engineer',
              2000,
              'Blacksmith of Code',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(226, 232, 240, 0.6)',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
          }}
        >
          "{resumeData.tagline}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              color: '#0a0a0f',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(0, 245, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)';
            }}
          >
            <FileText size={16} />
            View Projects
          </a>
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: '1px solid rgba(0, 245, 255, 0.4)',
              background: 'rgba(0, 245, 255, 0.05)',
              color: '#00f5ff',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0, 245, 255, 0.1)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#00f5ff';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0, 245, 255, 0.05)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0, 245, 255, 0.4)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(0, 245, 255, 0.4)',
          animation: 'bounce 2s infinite',
        }}
      >
        <ChevronDown size={24} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
