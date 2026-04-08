import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Track scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach(s => { if(s) obs.observe(s); });
    return () => obs.disconnect();
  }, [loading]);

  return (
    <>
      <div className="texture-overlay" />
      
      <AnimatePresence>
        {loading && <Loader onDone={() => setTimeout(() => setLoading(false), 300)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Cursor />

          {/* Scroll progress bar */}
          <motion.div
            style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: 4, background: 'var(--tangerine)', transformOrigin: '0%', zIndex: 1000 }}
          />

          {/* NAV */}
          <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
              Kinjal<span>.</span>
            </div>
            <ul className="nav-links">
              {NAV_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href} className={activeSection === l.href.slice(1) ? 'active' : ''}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="nav-cta">Hire Me</a>
            <button className="mobile-nav-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ position: 'fixed', inset: 0, background: 'var(--warm-white)', zIndex: 1100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2.5rem' }}>
                <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 28, right: 24, color: 'var(--navy)' }} aria-label="Close menu">
                  <X size={32} />
                </button>
                {NAV_LINKS.map((l, i) => (
                  <motion.a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                    initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}
                    style={{ fontFamily: '"DM Serif Display", serif', fontSize: '3rem', color: 'var(--navy)' }}>
                    {l.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sections */}
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <footer className="footer">
            <p>© {new Date().getFullYear()} Kinjal Goswami — Crafting Visual Narratives</p>
          </footer>
        </motion.div>
      )}
    </>
  );
}
export default App;
