import React from "react";

import projects from "../../Data/project.json";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";


export const Project = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}> PROJECTS </h2>
            <div className={styles.content}>
                <ul className={styles.projectList}>
                    {projects.map((project, id) => {
                        return (
                            <li key={id} className={styles.projectItem}>
                                <h3 className={styles.projectName}>{project.name}</h3>
                                <img src={getImageUrl(project.imageSrc)} alt={project.name} className={styles.projectImage} />
                                <p>{project.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};