import { motion } from 'framer-motion';

const projects = [
    {
        title: "Brand Identity Kit",
        category: "Branding",
        image: "/projects/project1.jpg",
        description: "Conceptualized a complete branding set including logos, business cards, and letterheads for startup clients."
    },
    {
        title: "Social Media Campaign",
        category: "Digital Marketing",
        image: "/projects/project2.jpg",
        description: "Developed a comprehensive series of digital posters and ads for high-impact social media marketing."
    },
    {
        title: "Poster Series",
        category: "Print Media",
        image: "/projects/project3.jpg",
        description: "Designed a series of professional promotional posters for local venues and corporate events."
    },
    {
        title: "Product Packaging",
        category: "Packaging Design",
        image: "/projects/project4.jpg",
        description: "Premium packaging design for Manubhai Gathiyawala featuring Jeena Gathiya, focusing on freshness and authentic taste."
    },
    {
        title: "Travel Promotion",
        category: "Social Media",
        image: "/projects/project5.jpg",
        description: "Engaging social media creatives for specific winter travel packages to Shimla & Manali, highlighting key attractions and pricing."
    },
    {
        title: "Brand Legacy Ad",
        category: "Advertising",
        image: "/projects/project6.jpg",
        description: "Illustrated marketing campaign highlighting the trust and legacy of Manubhai Gathiyawala since 1989."
    },
    {
        title: "Tour Brochure Design",
        category: "Print Media",
        image: "/projects/project7.jpg",
        description: "Comprehensive travel brochure layout showcasing destination collages, transportation options, and amenity details."
    },
    {
        title: "Brand Marketing Creative",
        category: "Social Media",
        image: "/projects/project8.jpg",
        description: "Playful and engaging brand marketing creative for Gossip Guru Media, utilizing pop culture elements to drive engagement."
    },
    {
        title: "Medical Awareness Poster",
        category: "Healthcare Design",
        image: "/projects/project9.jpg",
        description: "Informative health awareness poster for CoreLife Hospital, visually communicating critical health risks with clear iconography and layout."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="responsive-section-padding">
            <div style={{ maxWidth: '1200px', width: '90%', margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', textAlign: 'right' }}>Selected <span className="gradient-text">Works</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="responsive-project-row"
                            style={{
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            }}
                        >
                            {/* Image Container with 3D Tilt Effect */}
                            <motion.div
                                className="glass-panel"
                                whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.02 }}
                                style={{
                                    flex: '1 1 500px',
                                    perspective: '1000px',
                                    padding: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                                />
                            </motion.div>

                            <div style={{ flex: '1 1 300px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                                <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{project.title}</h3>
                                <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    style={{
                                        marginTop: '1.5rem',
                                        borderBottom: '1px solid var(--color-secondary)',
                                        color: 'var(--color-secondary)',
                                        paddingBottom: '5px'
                                    }}
                                >
                                    View Case Study
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
