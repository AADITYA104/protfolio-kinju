import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 – Present',
    role: 'Freelance Graphic Designer',
    company: 'Self-Employed',
    desc: 'Providing end-to-end design solutions — brand identity, social media campaigns, print collateral, and packaging for clients across industries.',
    tags: ['Branding', 'Social Media', 'Print'],
  },
  {
    year: '2022 – Present',
    role: 'B.Tech Information Technology',
    company: 'University, Gujarat',
    desc: 'Pursuing a degree in Information Technology, merging technical knowledge with creative design thinking to build innovative digital solutions.',
    tags: ['IT', 'Web Dev', 'Design Thinking'],
  },
  {
    year: '2022 – 2023',
    role: 'Graphic Design Intern',
    company: 'Design Studio',
    desc: 'Worked on real-world branding projects, social media creatives, and promotional materials. Developed strong skills in visual communication and client management.',
    tags: ['Internship', 'Branding', 'Canva'],
  },
  {
    year: '2021 – 2022',
    role: 'Social Media Designer',
    company: 'Gossip Guru Media',
    desc: 'Created engaging social media content, designed promotional graphics, and helped establish a consistent brand voice across digital platforms.',
    tags: ['Social Media', 'Content', 'Digital'],
  },
];

const Experience = () => (
  <section id="experience" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3.5rem' }}>
        <div className="section-badge">Experience</div>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          My Journey <span className="gradient-text">So Far</span>
        </h2>
      </motion.div>

      <div className="timeline-wrap">
        {experiences.map((exp, i) => (
          <motion.div key={i} className="timeline-item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <div className="timeline-dot" />
            <div className="timeline-year">{exp.year}</div>
            <div style={{
              padding: '24px 28px',
              background: '#0f0f0f',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <h3 style={{ fontFamily: 'Syne', fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>{exp.role}</h3>
              <div style={{ fontSize: '0.82rem', color: '#F97316', fontWeight: 600, marginBottom: '0.8rem' }}>{exp.company}</div>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 12px', borderRadius: '100px',
                    background: 'rgba(249,115,22,0.08)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    fontSize: '0.72rem', fontWeight: 600, color: '#F97316',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
