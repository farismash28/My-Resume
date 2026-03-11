import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Skills() {
  return (
    <section
      id="skills"
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
        <Code2 size={20} style={{ color: '#00f5ff' }} />
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
          Skills
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

      {/* Skills grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1rem',
        }}
      >
        {resumeData.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="neon-card"
            style={{
              borderRadius: '10px',
              padding: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#00f5ff',
                }}
              >
                {skill.level}%
              </span>
            </div>

            {/* Progress bar */}
            <div
              style={{
                width: '100%',
                height: '4px',
                borderRadius: '2px',
                background: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 + 0.2, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  borderRadius: '2px',
                  background: `linear-gradient(90deg, #00f5ff, #a855f7)`,
                  boxShadow: '0 0 8px rgba(0, 245, 255, 0.4)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
