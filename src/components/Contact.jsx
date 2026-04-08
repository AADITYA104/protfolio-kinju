import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 style={{ fontSize: 'clamp(2.2rem,4.5vw,3rem)', color: 'var(--navy)' }}>
            Let's <em style={{ color: 'var(--sage)' }}>Collaborate</em>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Have a project in mind? I'm always open to new design opportunities and creative collaborations. Let's build something remarkable together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                { icon: <Mail size={20} />, label: 'Email', val: 'kpgoswwami1835@gmail.com', href: 'mailto:kpgoswwami1835@gmail.com' },
                { icon: <Phone size={20} />, label: 'Phone', val: '+91 6359411151', href: 'tel:+916359411151' },
                { icon: <MapPin size={20} />, label: 'Location', val: 'Bhavnagar, Gujarat, India', href: '#' },
                ].map(({ icon, label, val, href }) => (
                <div key={label} className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="contact-icon">{icon}</div>
                    <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                    <a href={href} style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-dark)', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--tangerine)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>{val}</a>
                    </div>
                </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {[{ icon: <Github size={18} />, href: '#' }, { icon: <Linkedin size={18} />, href: '#' }, { icon: <Instagram size={18} />, href: '#' }].map(({ icon, href }, i) => (
                <motion.a key={i} href={href} whileHover={{ y: -4, color: 'var(--tangerine)', borderColor: 'var(--tangerine)' }}
                  style={{ width: 45, height: 45, borderRadius: '50%', border: '1px solid var(--border-light)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.3s ease' }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={e => e.preventDefault()}
            style={{
              background: '#fff', border: '1px solid var(--border-light)', borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem',
              boxShadow: '0 10px 40px rgba(31,38,42,0.04)'
            }}>
            <div className="form-group">
              <label>Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Kinjal Goswami" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="hello@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="form-input" rows={5} placeholder="Tell me about your project..." style={{ resize: 'vertical', minHeight: '120px' }} />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-fill"
              style={{ justifyContent: 'center', marginTop: '10px' }}>
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
