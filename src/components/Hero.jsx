import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const ROLES = ['Graphic Designer', 'Brand Identity Expert', 'Visual Storyteller', 'Creative Director'];

const letterVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const Hero = () => {
  const canvasRef = useRef(null);
  const [charIdx, setCharIdx] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => setCharIdx(c => c + (deleting ? -1 : 1)), deleting ? 40 : 95);
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  const displayText = ROLES[roleIdx].slice(0, charIdx);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();

    const pts = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
      op: Math.random() * 0.35 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.op})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const dist = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(249,115,22,${0.04 * (1 - dist / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const socials = [
    { icon: <Github size={16} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
    { icon: <Mail size={16} />, href: 'mailto:kpgoswwami1835@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.55 }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '15%', right: '8%', width: 420, height: 420, background: 'radial-gradient(circle,rgba(249,115,22,0.1) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '2%', width: 320, height: 320, background: 'radial-gradient(circle,rgba(34,211,238,0.06) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none', animation: 'float 9s ease-in-out infinite reverse' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '860px' }}>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="section-badge">
            Portfolio · 2024
          </motion.div>

          {/* Animated NAME line 1 */}
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={staggerContainer} initial="hidden" animate="show"
              style={{ display: 'flex', gap: '0.25em', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem,9vw,7rem)', lineHeight: 1, letterSpacing: '-2px' }}>
              {'KINJAL'.split('').map((ch, i) => (
                <motion.span key={i} variants={letterVariant} style={{ display: 'inline-block' }}>{ch}</motion.span>
              ))}
            </motion.div>
          </div>

          {/* Animated NAME line 2 - outlined */}
          <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
            <motion.div variants={staggerContainer} initial="hidden" animate="show" transition={{ delayChildren: 0.28 }}
              style={{ display: 'flex', gap: '0.25em', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem,9vw,7rem)', lineHeight: 1, letterSpacing: '-2px', WebkitTextStroke: '1.5px rgba(249,115,22,0.6)', color: 'transparent' }}>
              {'GOSWAMI'.split('').map((ch, i) => (
                <motion.span key={i} variants={letterVariant} style={{ display: 'inline-block' }}>{ch}</motion.span>
              ))}
            </motion.div>
          </div>

          {/* Typing role */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(1rem,2vw,1.35rem)', color: '#9CA3AF', marginBottom: '1.5rem', minHeight: '2em' }}>
            <span style={{ color: '#F97316' }}>▸</span>
            <span>{displayText}</span>
            <span style={{ width: 2, height: '1.1em', background: '#F97316', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
            style={{ fontSize: '1rem', color: '#9CA3AF', maxWidth: '480px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            IT Student & Creative Designer crafting high-impact visual narratives — brand identities, digital campaigns, and design systems that leave a mark.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              View My Work <ArrowRight size={16} />
            </motion.a>
            <motion.a href="#contact" className="btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Let's Talk
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            style={{ display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
            {[['10+', 'Happy Clients'], ['50+', 'Design Projects'], ['1+', 'Years Experience']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Syne', fontSize: '2rem', fontWeight: 800, color: '#F97316' }}>{v}</div>
                <div style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Social sidebar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.4rem', alignItems: 'center' }}>
          <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom,transparent,rgba(249,115,22,0.4))' }} />
          {socials.map(({ icon, href, label }) => (
            <motion.a key={label} href={href} aria-label={label} whileHover={{ x: -4, color: '#F97316' }} style={{ color: '#6B7280', display: 'block' }}>{icon}</motion.a>
          ))}
          <div style={{ width: 1, height: 60, background: 'linear-gradient(to top,transparent,rgba(249,115,22,0.4))' }} />
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 48, background: 'linear-gradient(to bottom,#F97316,transparent)' }} />
        <span style={{ fontSize: '0.62rem', letterSpacing: '3px', color: '#6B7280', textTransform: 'uppercase' }}>Scroll</span>
      </motion.div>
    </section>
  );
};
export default Hero;
