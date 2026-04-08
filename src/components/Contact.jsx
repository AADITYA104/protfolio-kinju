import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <div className="section-badge">Contact</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ color: '#9CA3AF', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Have a project in mind? I'm always open to new design opportunities and creative collaborations. Let's build something remarkable together.
            </p>

            {[
              { icon: <Mail size={18} />, label: 'Email', val: 'kpgoswwami1835@gmail.com', href: 'mailto:kpgoswwami1835@gmail.com' },
              { icon: <Phone size={18} />, label: 'Phone', val: '+91 6359411151', href: 'tel:+916359411151' },
              { icon: <MapPin size={18} />, label: 'Location', val: 'Bhavnagar, Gujarat, India', href: '#' },
            ].map(({ icon, label, val, href }) => (
              <div key={label} className="contact-info-item">
                <div className="contact-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#6B7280', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                  <a href={href} style={{ fontSize: '0.9rem', color: '#E5E7EB', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#E5E7EB'}>{val}</a>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {[{ icon: <Github size={18} />, href: '#' }, { icon: <Linkedin size={18} />, href: '#' }, { icon: <Instagram size={18} />, href: '#' }].map(({ icon, href }, i) => (
                <motion.a key={i} href={href} whileHover={{ y: -3, color: '#F97316' }}
                  style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            onSubmit={e => e.preventDefault()}
            style={{
              background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px',
              padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
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
              <textarea name="message" value={form.message} onChange={handleChange} className="form-input" rows={5} placeholder="Tell me about your project..." style={{ resize: 'none' }} />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', background: 'linear-gradient(135deg,#F97316,#D97706)', color: '#000', fontWeight: 700, borderRadius: '12px', fontSize: '0.95rem' }}>
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
