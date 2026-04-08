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
  <section id="experience" className="dark-section" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Experience</div>
        <h2 style={{ fontSize: 'clamp(2.5rem,5vw,3.2rem)', color: 'var(--warm-white)' }}>
          My Journey <em style={{ color: 'var(--gold)' }}>So Far</em>
        </h2>
      </motion.div>

      <div className="timeline-wrap">
        {experiences.map((exp, i) => (
          <motion.div key={i} className="timeline-item"
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="timeline-dot" style={{ background: 'var(--navy)', borderColor: 'var(--gold)', boxShadow: '0 0 0 4px rgba(194,163,112,0.15)' }} />
            <div className="timeline-year" style={{ background: 'var(--gold-soft)', color: 'var(--gold)', borderColor: 'rgba(194,163,112,0.3)', boxShadow: 'none' }}>{exp.year}</div>
            
            <div className="timeline-card" style={{ background: 'var(--navy-light)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.4rem', color: '#fff', marginBottom: '6px' }}>{exp.role}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{exp.company}</div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.2rem', opacity: 0.85 }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '4px 14px', borderRadius: '100px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)',
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
