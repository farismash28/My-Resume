import { motion } from 'framer-motion';
import { Layers, Github, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1100px',
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
        <Layers size={20} style={{ color: '#00f5ff' }} />
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
          Projects
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

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="neon-card"
            style={{
              borderRadius: '14px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              cursor: 'default',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#00f5ff',
                  textShadow: '0 0 8px rgba(0, 245, 255, 0.4)',
                }}
              >
                {project.name}
              </h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(226, 232, 240, 0.5)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(226, 232, 240, 0.5)')}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(226, 232, 240, 0.5)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(226, 232, 240, 0.5)')}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(226, 232, 240, 0.65)',
                lineHeight: 1.65,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#00f5ff',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 245, 255, 0.25)',
                    background: 'rgba(0, 245, 255, 0.05)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
