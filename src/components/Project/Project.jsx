import React from "react";
import styles from "./Project.module.css";
import projects from "../../Data/project.json";

export const Project = () => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent navigation for empty links
    };

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
                <h2>Projects</h2>
                <p>Highlighted works showcasing my technical expertise</p>
            </div>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectContent}>
                            <div className={styles.projectHeader}>
                                <h4>{project.name}</h4>
                                <div className={styles.techStack}>
                                    {project.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.projectFeatures}>
                                <h5>Key Features:</h5>
                                <ul>
                                    {project.keyFeatures.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.projectLinks}>
                                <a 
                                    href={project.githubLink || "#"} 
                                    onClick={project.githubLink ? undefined : handleClick}
                                    target={project.githubLink ? "_blank" : undefined}
                                    rel={project.githubLink ? "noopener noreferrer" : undefined}
                                    className={styles.projectLink}
                                >
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                                <a 
                                    href={project.demoLink || "#"} 
                                    onClick={project.demoLink ? undefined : handleClick}
                                    target={project.demoLink ? "_blank" : undefined}
                                    rel={project.demoLink ? "noopener noreferrer" : undefined}
                                    className={styles.projectLink}
                                >
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}