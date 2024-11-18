import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

import { TagCloud } from 'react-tagcloud'

const data = [
    // Languages
    { value: 'JavaScript', count: 38 },
    { value: 'TypeScript', count: 35 },
    { value: 'Python', count: 32 },
    { value: 'Java', count: 30 },
    { value: 'C++', count: 28 },
    { value: 'C#', count: 25 },
    { value: 'HTML', count: 33 },
    { value: 'CSS', count: 33 },
    
    // Frameworks & Libraries
    { value: 'React', count: 36 },
    { value: 'Angular', count: 34 },
    { value: 'Node.js', count: 34 },
    { value: 'Flask', count: 25 },
    
    // Databases & Storage
    { value: 'MongoDB', count: 30 },
    { value: 'MySQL', count: 30 },
    { value: 'Redis', count: 25 },
    { value: 'NoSQL', count: 28 },
    
    // DevOps & Cloud
    { value: 'AWS', count: 32 },
    { value: 'Docker', count: 30 },
    { value: 'Kubernetes', count: 28 },
    { value: 'Jenkins', count: 25 },
    { value: 'CI/CD', count: 28 },
    { value: 'Terraform', count: 25 },
    
    // Version Control & Tools
    { value: 'Git', count: 32 },
    { value: 'GitHub', count: 30 },
    { value: 'Bitbucket', count: 25 },
    { value: 'Jira', count: 25 },
    { value: 'Grafana', count: 22 },
    
    // Concepts & Methodologies
    { value: 'Data Structures', count: 35 },
    { value: 'Algorithms', count: 35 },
    { value: 'OOP', count: 32 },
    { value: 'API Development', count: 30 },
    { value: 'Machine Learning', count: 25 },
    { value: 'DevOps', count: 28 },
    { value: 'Agile', count: 26 },
    { value: 'Unit Testing', count: 25 },
    { value: 'Cloud Architecture', count: 28 },
    { value: 'Distributed Systems', count: 26 },
    { value: 'Operating Systems', count: 25 },
    { value: 'Networks', count: 24 },
    { value: 'Software Architecture', count: 28 },
]


export const About = () => {
    return (
        <section className={styles.container} id="about">

            <div className={styles.seperator}>
                <div>
                    <h2 className={styles.title}>Skills</h2>
                    <TagCloud
                        minSize={10}
                        maxSize={20}
                        tags={data}
                        className={styles.tagCloud}
                        style={{
                            padding: '10px',
                            width: '100%',
                            height: '450px',
                            lineHeight: '1.5',
                            letterSpacing: '1px',
                        }}
                    />
                </div>
                <div>
                    <h2 className={styles.title}>ABOUT</h2>
                    <div className={styles.content}>
                        <div className={styles.aboutText}>
                            <p>
                                I’m a developer passionate about building impactful and scalable software solutions that enhance user experiences and solve real-world problems. My work focuses on crafting robust, high-performance applications, blending thoughtful design with innovative engineering.
                                <br />  
                                <br />  
                                Currently, I’m a Software Engineer specializing in full-stack development, with expertise in frameworks like Angular, React, and Node.js. My experience spans cloud technologies, microservices architecture, and API development. I thrive on creating intuitive user interfaces and backends that are both efficient and secure, ensuring seamless end-to-end functionality.
                                <br />
                                <br />
                                In the past, I’ve had the privilege of working across a variety of domains — from healthcare and food delivery to volunteer-driven foundations. These experiences have allowed me to design web applications that streamlined operations, reduced inefficiencies, and increased satisfaction for users and stakeholders alike. 
                                <br />
                                <br />
                                Outside of work, you can find me practicing yoga and meditation, reading to sharpen my storytelling skills, or exploring the vibrant tech scene in San Francisco. I’m also passionate about projects that focus on social impact, particularly in mental health and personal well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}