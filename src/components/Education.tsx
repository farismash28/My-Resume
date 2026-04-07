import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: '6rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}
      >
        <GraduationCap size={20} style={{ color: '#00f5ff' }} />
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
          Education & Certifications
        </h2>
        <div
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(0, 245, 255, 0.4), transparent)',
            marginLeft: '1rem',
          }}
        />
      </motion.div>

      {/* Education card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="neon-card"
        style={{ borderRadius: '12px', padding: '1.75rem', marginBottom: '2.5rem' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.25rem',
              }}
            >
              {resumeData.education.degree}
            </h3>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: '#00f5ff',
              }}
            >
              {resumeData.education.school}
            </p>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: 'rgba(226, 232, 240, 0.4)',
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              background: 'rgba(168, 85, 247, 0.05)',
            }}
          >
            {resumeData.education.period}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: 'rgba(226, 232, 240, 0.6)',
            }}
          >
            GPA: <span style={{ color: '#00f5ff' }}>{resumeData.education.gpa}</span>
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#a855f7',
            }}
          >
            {resumeData.education.honors}
          </span>
        </div>
      </motion.div>

      {/* Certifications header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}
      >
        <Award size={16} style={{ color: '#a855f7' }} />
        <h3
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            fontWeight: 600,
            color: 'rgba(226, 232, 240, 0.7)',
          }}
        >
          Certifications
        </h3>
      </motion.div>

      {/* Certifications grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {resumeData.certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="neon-card"
            style={{ borderRadius: '10px', padding: '1rem' }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '0.35rem',
              }}
            >
              {cert.name}
            </p>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: cert.status === 'Active' ? '#00f5ff' : '#a855f7',
              }}
            >
              {cert.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
