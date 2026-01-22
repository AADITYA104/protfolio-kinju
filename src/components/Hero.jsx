import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1200px', width: '90%', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--color-secondary)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px'
                    }}>
                        Portfolio
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #aaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        KINJAL <br />
                        <span className="gradient-text">GOSWAMI</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        lineHeight: 1.6
                    }}>
                        Highly motivated Information Technology student and professional Graphic Designer specialized in visual storytelling, brand identity, and high-impact digital solutions.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-panel"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                cursor: 'pointer'
                            }}
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: '1px solid var(--color-text-muted)',
                                borderRadius: '16px',
                                cursor: 'pointer'
                            }}
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: '#fff' }}>10+</h3>
                            <span style={{ color: '#888' }}>Clients Managed</span>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: '#fff' }}>50+</h3>
                            <span style={{ color: '#888' }}>Social Media Assets</span>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: '#fff' }}>1+</h3>
                            <span style={{ color: '#888' }}>Years Experience</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
