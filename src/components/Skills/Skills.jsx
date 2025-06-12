import React from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Java", "Python", "C++"]
        },
        {
            title: "Frameworks & UI",
            skills: ["React", "SAP UI5", "Next.js", "Angular", "Node.js"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
        },
        {
            title: "DevOps & Cloud",
            skills: ["Docker", "Kubernetes", "AWS (EC2, Fargate)", "CI/CD", "Terraform"]
        },
        {
            title: "API & Integrations",
            skills: ["RESTful APIs", "GraphQL", "Web Services"]
        },
        {
            title: "Tooling",
            skills: ["Git", "Jira", "Bitbucket", "VS Code", "Grafana"]
        }
    ];

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.sectionHeader}>
                <h2>Core Skills</h2>
                <p>A comprehensive overview of my technical expertise</p>
            </div>
            <div className={styles.skillsContainer}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.skillsCard}>
                        <h3>{category.title}</h3>
                        <div className={styles.skillsList}>
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={styles.skillItem}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 