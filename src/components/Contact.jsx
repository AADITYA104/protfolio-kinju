import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ paddingBottom: '150px' }} className="responsive-section-padding">
            <div style={{ maxWidth: '1000px', width: '90%', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel responsive-padding"
                    style={{ overflow: 'hidden', position: 'relative' }}
                >
                    {/* Decorative glowing orb */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '300px',
                        height: '300px',
                        background: 'var(--color-primary)',
                        filter: 'blur(100px)',
                        opacity: 0.2,
                        zIndex: -1
                    }} />

                    <div className="responsive-grid-2">
                        <div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's <span className="gradient-text">Collaborate</span></h2>
                            <p style={{ color: '#aaa', marginBottom: '2rem' }}>
                                Have a project in mind? I'm always open to discussing new design opportunities and creative ideas.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}>
                                        <Mail size={20} color="var(--color-secondary)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Email</div>
                                        <a href="mailto:kpgoswwami1835@gmail.com">kpgoswwami1835@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}>
                                        <Phone size={20} color="var(--color-secondary)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Phone</div>
                                        <a href="tel:+916359411151">+91 6359411151</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}>
                                        <MapPin size={20} color="var(--color-secondary)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Location</div>
                                        <span>Bhavnagar, Gujarat, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Name</label>
                                <input type="text" style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Email</label>
                                <input type="email" style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Message</label>
                                <textarea rows="4" style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none',
                                    resize: 'none'
                                }} />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                                    color: '#fff',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Send Message <Send size={16} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
