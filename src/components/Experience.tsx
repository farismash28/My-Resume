import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Experience() {
  return (
    <section
      id="experience"
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
        <Briefcase size={20} style={{ color: '#00f5ff' }} />
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
          Experience
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

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(180deg, #00f5ff 0%, #a855f7 100%)',
            opacity: 0.5,
          }}
        />

        {resumeData.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ position: 'relative', marginBottom: '2.5rem' }}
          >
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: '-2rem',
                top: '1.25rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#0a0a0f',
                border: '2px solid #00f5ff',
                boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
                transform: 'translateX(0)',
              }}
            />

            {/* Card */}
            <div
              className="neon-card"
              style={{ borderRadius: '12px', padding: '1.75rem' }}
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
                    {job.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.85rem',
                      color: '#00f5ff',
                    }}
                  >
                    {job.company}
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
                  {job.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(226, 232, 240, 0.7)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {job.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem',
                      color: '#a855f7',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      background: 'rgba(168, 85, 247, 0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
