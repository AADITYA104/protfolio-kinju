import { motion } from 'framer-motion';
import { Palette, Layout, Monitor, PenTool, Film, Package } from 'lucide-react';

const tools = ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'Adobe Premiere Pro', 'Adobe InDesign', 'Lightroom', 'CorelDraw', 'Adobe XD', 'After Effects', 'Procreate', 'Blender'];

const skills = [
  { icon: <Palette size={22} />, title: 'Brand Identity', desc: 'Logos, color systems, typography, and complete brand guidelines that tell your story.' },
  { icon: <Layout size={22} />, title: 'Print Design', desc: 'Brochures, posters, packaging, and professional print layouts with shelf impact.' },
  { icon: <Monitor size={22} />, title: 'Digital & UI', desc: 'Social media creatives, web banners, and digital marketing assets that convert.' },
  { icon: <PenTool size={22} />, title: 'Illustration', desc: 'Custom illustrations, icons, and hand-crafted visual elements with character.' },
  { icon: <Film size={22} />, title: 'Motion & Video', desc: 'Motion graphics, video editing, and animated content that captures attention.' },
  { icon: <Package size={22} />, title: 'Packaging', desc: 'Product packaging design focused on shelf impact and visual storytelling.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] } }),
};

const testimonials = [
  { name: 'Manubhai Gathiyawala', text: 'Kinjal understood our brand heritage perfectly. The packaging design elevated our product presence tremendously.', role: 'Business Owner' },
  { name: 'Gossip Guru Media', text: 'Creative, reliable, and always on time. Her social media designs consistently drive engagement for our clients.', role: 'Digital Agency' },
];

const Skills = () => {
  const doubled = [...tools, ...tools];
  return (
    <section id="about" style={{ paddingTop: '120px', paddingBottom: '100px', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* About + Visual split */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="section-label">About Me</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', marginBottom: '1.5rem', color: 'var(--navy)' }}>
              Crafting Visual Stories<br />that <em style={{ color: 'var(--tangerine)' }}>Resonate</em>
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              I'm Kinjal Goswami — an Information Technology student and professional Graphic Designer from Bhavnagar, Gujarat. I bridge technology and creativity to build visual identities that captivate audiences and drive results.
            </p>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.9, fontSize: '0.92rem', marginBottom: '2rem' }}>
              From brand identity systems to digital campaigns and print collateral, I help businesses communicate their unique story through design that leaves a lasting impression.
            </p>
            <motion.a href="#contact" className="btn-outline" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Get In Touch <ArrowIcon />
            </motion.a>
          </motion.div>

          {/* Profile visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Photo placeholder with gold frame */}
            <div style={{
              width: '100%', maxWidth: 340, aspectRatio: '1', borderRadius: '16px', margin: '0 auto',
              background: 'var(--navy)',
              border: '3px solid var(--gold)',
              boxShadow: '0 20px 60px rgba(201,169,110,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 8, border: '1px solid rgba(201,169,110,0.15)', borderRadius: '12px' }} />
              <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: '4rem', color: 'var(--gold)', zIndex: 1 }}>KG</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '3px', textTransform: 'uppercase', zIndex: 1 }}>Designer · Creator</div>
            </div>

            {/* Testimonials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 340, margin: '0 auto', width: '100%' }}>
              {testimonials.map((t, i) => (
                <motion.div key={i} className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '0.8rem', position: 'relative', zIndex: 1 }}>
                    {t.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-dark)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {doubled.map((t, i) => (
                <div key={i} className="marquee-item">
                  <span className="marquee-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label" style={{ marginBottom: '2rem' }}>Services</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', marginBottom: '2.5rem', color: 'var(--navy)' }}>What I <em style={{ color: 'var(--tangerine)' }}>Do</em></h2>
        </motion.div>

        <div className="skill-grid">
          {skills.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }}
              className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem', color: 'var(--navy)' }}>{s.title}</h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.75 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default Skills;
