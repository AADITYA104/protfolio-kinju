import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const ROLES = ['Graphic Designer', 'Brand Strategist', 'Visual Storyteller', 'Creative Director'];

const Hero = () => {
  const [charIdx, setCharIdx] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => setCharIdx(c => c + (deleting ? -1 : 1)), deleting ? 35 : 90);
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  const displayText = ROLES[roleIdx].slice(0, charIdx);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'var(--navy)', color: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grain texture overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        pointerEvents: 'none' }} />

      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: '8%', right: '12%', width: 280, height: 280, border: '1px solid rgba(224,123,60,0.08)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '12%', right: '14%', width: 200, height: 200, border: '1px solid rgba(224,123,60,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 120, height: 120, background: 'rgba(224,123,60,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="section-label" style={{ color: 'rgba(224,123,60,0.8)' }}>
                Portfolio · 2026
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(3.2rem,6.5vw,5.5rem)', letterSpacing: '-2px', marginBottom: '0.4rem', color: '#fff' }}>
              Kinjal
            </motion.h1>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(3.2rem,6.5vw,5.5rem)', letterSpacing: '-2px', marginBottom: '1.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>
              Goswami<span style={{ color: '#E07B3C', fontStyle: 'normal' }}>.</span>
            </motion.h1>

            {/* Typing */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.8rem', minHeight: '1.8em' }}>
              <span style={{ width: 24, height: 1.5, background: '#E07B3C', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.75)' }}>{displayText}</span>
              <span style={{ width: 1.5, height: '1.1em', background: '#E07B3C', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
              style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', maxWidth: '440px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Crafting visual narratives that resonate — from brand identities to digital campaigns. Bringing unique ideas to life with passion and precision.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a href="#projects" className="btn-fill" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View My Work <ArrowRight size={16} />
              </motion.a>
              <motion.a href="#contact" className="btn-outline-light" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              style={{ display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
              {[['14+', 'Projects Finished'], ['8+', 'Years of Experience'], ['>95%', 'Client Retention']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.8rem', color: '#E07B3C' }}>{v}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '4px', letterSpacing: '0.5px' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual accent card */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-visual" style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '3/4', borderRadius: '16px',
              background: 'linear-gradient(165deg, #242A3B 0%, #1A1F2E 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '2rem', padding: '3rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Corner decorations */}
              <div style={{ position: 'absolute', top: 20, left: 20, width: 30, height: 30, borderTop: '1.5px solid rgba(224,123,60,0.3)', borderLeft: '1.5px solid rgba(224,123,60,0.3)' }} />
              <div style={{ position: 'absolute', bottom: 20, right: 20, width: 30, height: 30, borderBottom: '1.5px solid rgba(224,123,60,0.3)', borderRight: '1.5px solid rgba(224,123,60,0.3)' }} />

              {/* Monogram */}
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                border: '2px solid rgba(201,169,110,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"DM Serif Display",serif', fontSize: '2.2rem', color: '#C9A96E',
              }}>K</div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.5rem', color: '#fff', marginBottom: '6px' }}>Kinjal Goswami</div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Graphic Designer</div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                {['#E07B3C', '#7A9E82', '#C9A96E'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>

              <div style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                Crafting Visual Narratives
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={16} color="rgba(255,255,255,0.25)" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
