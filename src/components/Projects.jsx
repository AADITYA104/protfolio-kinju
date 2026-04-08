import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  { title: 'Brand Identity Kit', cat: 'Branding', img: '/projects/project1.jpg', desc: 'Complete branding set — logos, cards, letterheads with cohesive identity.' },
  { title: 'Social Media Campaign', cat: 'Social Media', img: '/projects/project2.jpg', desc: 'High-impact digital poster series for social marketing engagement.' },
  { title: 'Poster Series', cat: 'Print', img: '/projects/project3.jpg', desc: 'Professional promotional posters for corporate events.' },
  { title: 'Product Packaging', cat: 'Packaging', img: '/projects/project4.jpg', desc: 'Premium packaging design bringing heritage to life for Manubhai.' },
  { title: 'Travel Promotion', cat: 'Social Media', img: '/projects/project5.jpg', desc: 'Winter travel creatives designed to elevate booking rates.' },
  { title: 'Brand Legacy Ad', cat: 'Branding', img: '/projects/project6.jpg', desc: 'Campaign highlighting trust & legacy since 1989 for physical retail.' },
  { title: 'Tour Brochure', cat: 'Print', img: '/projects/project7.jpg', desc: 'Immersive travel brochure layout with detailed destination icons.' },
  { title: 'Brand Creative', cat: 'Social Media', img: '/projects/project8.jpg', desc: 'Pop-culture brand marketing crafted for Gossip Guru Media.' },
  { title: 'Medical Awareness', cat: 'Print', img: '/projects/project9.jpg', desc: 'Health awareness poster maintaining strict corporate medical guidelines.' },
];

const FILTERS = ['All', 'Branding', 'Social Media', 'Print', 'Packaging'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <section id="projects" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: '3rem' }}>
          <div className="section-label">Selected Work</div>
          <h2 style={{ fontSize: 'clamp(2.2rem,4.5vw,3rem)', color: 'var(--navy)' }}>
            Design <em style={{ color: 'var(--tangerine)' }}>Projects</em>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="filter-tabs">
          {FILTERS.map(f => (
            <button key={f} className={`filter-tab ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="project-card">
                
                {/* Fallback image style handles image 404 easily */}
                <div style={{ position: 'absolute', inset: 0, background: 'var(--sage-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.5rem', color: 'var(--sage)', opacity: 0.5 }}>{p.cat}</span>
                </div>
                
                <img
                  className="project-card-bg"
                  src={p.img}
                  alt={p.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
                
                <div className="project-card-overlay">
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: '8px' }}>{p.cat}</span>
                  <h3 style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.2rem', lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--tangerine)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ExternalLink size={14} color="#fff" />
                    </div>
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
