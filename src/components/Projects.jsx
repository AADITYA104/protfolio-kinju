import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  { title: 'Brand Identity Kit', cat: 'Branding', img: '/projects/project1.jpg', grad: 'linear-gradient(135deg,#F97316,#D97706)', desc: 'Complete branding set — logos, cards, letterheads.' },
  { title: 'Social Media Campaign', cat: 'Social Media', img: '/projects/project2.jpg', grad: 'linear-gradient(135deg,#7C3AED,#DB2777)', desc: 'High-impact digital poster series for social marketing.' },
  { title: 'Poster Series', cat: 'Print', img: '/projects/project3.jpg', grad: 'linear-gradient(135deg,#0891B2,#0D9488)', desc: 'Professional promotional posters for corporate events.' },
  { title: 'Product Packaging', cat: 'Packaging', img: '/projects/project4.jpg', grad: 'linear-gradient(135deg,#059669,#0D9488)', desc: 'Premium packaging for Manubhai Gathiyawala.' },
  { title: 'Travel Promotion', cat: 'Social Media', img: '/projects/project5.jpg', grad: 'linear-gradient(135deg,#4F46E5,#7C3AED)', desc: 'Winter travel creatives for Shimla & Manali packages.' },
  { title: 'Brand Legacy Ad', cat: 'Branding', img: '/projects/project6.jpg', grad: 'linear-gradient(135deg,#DC2626,#F97316)', desc: 'Campaign highlighting trust & legacy since 1989.' },
  { title: 'Tour Brochure', cat: 'Print', img: '/projects/project7.jpg', grad: 'linear-gradient(135deg,#0891B2,#4F46E5)', desc: 'Travel brochure with destinations, transport & amenities.' },
  { title: 'Brand Creative', cat: 'Social Media', img: '/projects/project8.jpg', grad: 'linear-gradient(135deg,#F97316,#EF4444)', desc: 'Pop-culture brand marketing for Gossip Guru Media.' },
  { title: 'Medical Awareness', cat: 'Print', img: '/projects/project9.jpg', grad: 'linear-gradient(135deg,#059669,#22D3EE)', desc: 'Health awareness poster for CoreLife Hospital.' },
];

const FILTERS = ['All', 'Branding', 'Social Media', 'Print', 'Packaging'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <section id="projects" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <div className="section-badge">Selected Work</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
            Design <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {FILTERS.map(f => (
            <button key={f} className={`filter-tab ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="project-card">
                {/* Try real image, fallback gradient */}
                <img
                  className="project-card-bg"
                  src={p.img}
                  alt={p.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                />
                <div className="project-gradient-bg" style={{ display: 'none', background: p.grad, position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Syne', fontSize: '1.3rem', fontWeight: 800, color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '1rem' }}>{p.cat}</span>
                </div>
                <div className="project-card-overlay">
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#F97316', marginBottom: '6px' }}>{p.cat}</span>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '1rem', lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F97316', fontSize: '0.8rem', fontWeight: 600 }}>
                    <ExternalLink size={14} /> View Project
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
