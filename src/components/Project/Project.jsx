import React, { useState } from "react";

import projects from "../../Data/project.json";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";

export const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            setSelectedProject(null);
        }
    };

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}> PROJECTS </h2>
            <div className={`${styles.content} ${selectedProject ? styles.blurred : ''}`}>
                <ul className={styles.projectList}>
                    {projects.map((project, id) => (
                        <li 
                            key={id} 
                            className={styles.projectItem}
                            onClick={() => handleProjectClick(project)}
                        >
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <img 
                                src={getImageUrl(project.imageSrc)} 
                                alt={project.name} 
                                className={styles.projectImage} 
                            />
                            <div className={styles.projectDetails}>

                                <p className={styles.description}>{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedProject && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={styles.expandedProject}>
                        <h2 className={styles.projectName}>{selectedProject.name}</h2>
                        <img 
                            src={getImageUrl(selectedProject.imageSrc)} 
                            alt={selectedProject.name} 
                            className={styles.projectImage} 
                        />
                        <div className={styles.projectDetails}>
                            <h4 className={styles.sectionTitle}>Objective:</h4>
                            <p className={styles.description}>{selectedProject.description}</p>
                            
                            <div className={styles.featuresSection}>
                                <h4 className={styles.sectionTitle}>Key Features:</h4>
                                <ul className={styles.featuresList}>
                                    {selectedProject.keyFeatures.map((feature, index) => (
                                        <li key={index} className={styles.featureItem}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.techSection}>
                                <h4 className={styles.sectionTitle}>Tech Stack:</h4>
                                <div className={styles.techStackContainer}>
                                    {selectedProject.techStack.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};