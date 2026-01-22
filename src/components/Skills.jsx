import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Design Tools",
        items: ["Adobe Photoshop", "Adobe Illustrator", "After Effects", "Canva", "Figma"]
    },
    {
        category: "Design Expertise",
        items: ["Brand Identity", "Logo Concepts", "Typography", "Color Theory", "Product Packaging"]
    },
    {
        category: "Multimedia",
        items: ["Social Media Campaigns", "Poster Series", "Product Animations (GIFs)", "Digital Content"]
    },
    {
        category: "Soft Skills",
        items: ["Project Management", "Client Handling", "Team Collaboration", "Fast Learner"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '100px 0', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', width: '90%', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Core <span className="gradient-text">Skills</span></h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-panel"
                            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(170, 0, 255, 0.3)' }}
                            style={{ padding: '2rem' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>{skill.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {skill.items.map((item, idx) => (
                                    <span key={idx} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
