import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
    return (
        <section id="resume" className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
                <h2>Resume</h2>
                <p>View my professional experience and qualifications</p>
            </div>
            <div className={styles.resumeContent}>
                <iframe 
                    src="/assets/resume/Base_Resume.html"
                    title="Resume"
                    className={styles.resumeFrame}
                />
                <div className={styles.resumeActions}>
                    <a 
                        href="/assets/resume/Base_Resume.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeButton}
                    >
                        Open in New Tab
                    </a>
                </div>
            </div>
        </section>
    );
}; 