import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Graphic Design Intern",
        company: "IT Hub Software Solutions, Bhavnagar",
        period: "6 Months",
        desc: [
            "Managed 10+ local clients for branding and design solutions.",
            "Designed 50+ social media assets.",
            "Created logo concepts and product packaging.",
            "Produced dynamic product animations (GIFs)."
        ]
    },
    {
        role: "Graphic Designer",
        company: "Maxgen Technologies Pvt. Ltd.",
        period: "6 Months",
        desc: [
            "Created high-quality visual content for digital and print media.",
            "Collaborated with creative team for brand consistency.",
            "Utilized Adobe Creative Suite for professional layouts."
        ]
    },
    {
        role: "Technical Tutor (Diploma Stream)",
        company: "Technical Institution",
        period: "6 Months",
        desc: ["Delivered technical lectures to Diploma Engineering students.", "Mentored students in project work."]
    },
    {
        role: "Private Educator",
        company: "Educational Center",
        period: "4 Months",
        desc: ["Tutored English medium students in core subjects."]
    }
];

const educationData = [
    {
        degree: "Bachelor of Engineering (IT)",
        school: "Gyanmanjri Institute of Technology, Bhavnagar",
        year: "Expected Dec 2025",
        score: "7.91 CGPA / 7.39 SPI"
    },
    {
        degree: "HSC",
        school: "Shree Vallabh Kanya Kelavani Mandal, Rajkot",
        year: "March 2022",
        score: "60.58%"
    },
    {
        degree: "SSC",
        school: "Shree Vivekanand School, Botad",
        year: "March 2020",
        score: "91.07%"
    }
];

const Experience = () => {
    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div style={{ maxWidth: '1200px', width: '90%', margin: '0 auto' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Professional <span className="gradient-text">Journey</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Experience Column */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Experience</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel"
                                    style={{ padding: '1.5rem' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.25rem' }}>{item.role}</h4>
                                        <span style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>{item.period}</span>
                                    </div>
                                    <p style={{ color: '#aaa', marginBottom: '1rem', fontStyle: 'italic' }}>{item.company}</p>
                                    <ul style={{ paddingLeft: '20px', color: '#ccc', fontSize: '0.95rem' }}>
                                        {item.desc.map((d, i) => <li key={i}>{d}</li>)}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Education</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel"
                                    style={{ padding: '1.5rem' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.25rem' }}>{item.degree}</h4>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>{item.year}</span>
                                    </div>
                                    <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>{item.school}</p>
                                    <p style={{ color: '#fff' }}>Score: {item.score}</p>
                                </motion.div>
                            ))}

                            <div style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Certifications</h3>
                                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                                    <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
                                        <li>Google UX Design Professional Certificate (In Progress)</li>
                                        <li>Adobe Certified Professional in Visual Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
