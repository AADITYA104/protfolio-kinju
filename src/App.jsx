import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text3D, Center } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react';
import './index.css';

// Components (We will define them in this file for simplicity or split later if needed, 
// but for a single-file impact, I'll put the Scene here first or import it).
// Actually, let's keep it modular. I'll create separate files.

import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="app-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Navigation */}
      <nav className="glass-panel" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        padding: '10px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        maxWidth: '1200px'
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
          KINJAL<span className="gradient-text">GOSWAMI</span>
        </div>

        <div className="desktop-menu">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X color="white" /> : <Menu color="white" />}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Work</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>

      {/* 3D Background - Fixed */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          {/* We can add some floating geometry here */}
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh position={[3, -1, -2]}>
              <torusKnotGeometry args={[1, 0.3, 100, 16]} />
              <meshStandardMaterial color="#aa00ff" wireframe opacity={0.1} transparent />
            </mesh>
          </Float>
          <Float speed={1.5} rotationIntensity={2} floatIntensity={0.5}>
            <mesh position={[-4, 2, -5]}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#00e5ff" wireframe opacity={0.1} transparent />
            </mesh>
          </Float>
        </Canvas>
      </div>

      <main style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', gap: '0px' }}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '50px 0', color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Kinjal Goswami. Designed & Built with ❤️
      </footer>
    </div>
  );
}

export default App;
