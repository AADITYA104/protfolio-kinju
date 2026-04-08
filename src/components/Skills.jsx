import { motion } from 'framer-motion';
import { Palette, Layout, Monitor, PenTool, Film, Package } from 'lucide-react';

const tools = ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'Adobe Premiere Pro', 'Adobe InDesign', 'Lightroom', 'Procreate', 'CorelDraw', 'Adobe XD', 'After Effects', 'Blender'];

const skills = [
  { icon: <Palette size={22} />, title: 'Brand Identity', desc: 'Logos, color systems, typography, and complete brand guidelines.' },
  { icon: <Layout size={22} />, title: 'Print Design', desc: 'Brochures, posters, packaging, and professional print layouts.' },
  { icon: <Monitor size={22} />, title: 'Digital & UI', desc: 'Social media creatives, web banners, and digital marketing assets.' },
  { icon: <PenTool size={22} />, title: 'Illustration', desc: 'Custom illustrations, icons, and hand-crafted visual elements.' },
  { icon: <Film size={22} />, title: 'Motion & Video', desc: 'Motion graphics, video editing, and animated content creation.' },
  { icon: <Package size={22} />, title: 'Packaging', desc: 'Product packaging design with a focus on shelf impact and storytelling.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

const Skills = () => {
  const doubled = [...tools, ...tools];
  return (
    <section id="about" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }}>

          {/* Left: About text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="section-badge">About Me</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              Crafting Visual Stories that <span className="gradient-text">Resonate</span>
            </h2>
            <p style={{ color: '#9CA3AF', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              I'm Kinjal Goswami — an IT student and professional Graphic Designer from Bhavnagar, Gujarat. I blend technology with creativity to build visual identities that captivate and convert.
            </p>
            <p style={{ color: '#9CA3AF', lineHeight: 1.9, fontSize: '0.95rem' }}>
              With expertise in brand identity, digital marketing, and print design, I help businesses tell their story through design that leaves a lasting impression.
            </p>
          </motion.div>

          {/* Right: Glowing accent visual */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ position: 'relative', aspectRatio: '1', maxWidth: 420 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(249,115,22,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div style={{
              width: '100%', height: '100%', borderRadius: '24px',
              background: 'linear-gradient(135deg, #161616 0%, #0f0f0f 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', padding: '3rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: 200, height: 200, background: 'radial-gradient(circle,rgba(249,115,22,0.15) 0%,transparent 70%)', borderRadius: '50%' }} />
              <div style={{ fontFamily: 'Syne', fontSize: '5rem', fontWeight: 800, color: '#F97316', lineHeight: 1 }}>KG</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Kinjal Goswami</div>
                <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '4px' }}>Graphic Designer & IT Student</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['#F97316', '#22D3EE', '#A78BFA'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>Tools I Use</div>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {doubled.map((t, i) => (
                <div key={i} className="marquee-item">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316', display: 'inline-block', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Cards */}
        <div className="section-badge" style={{ marginBottom: '2rem' }}>What I Do</div>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="skill-card" whileHover={{ scale: 1.02 }}>
              <div className="skill-icon">{s.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'Syne,sans-serif', marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
