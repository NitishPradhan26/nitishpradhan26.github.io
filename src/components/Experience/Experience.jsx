import React from "react";
import styles from "./Experience.module.css";
import history from "../../Data/history.json";

export const Experience = () => {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={styles.sectionHeader}>
                <h2>Experience</h2>
                <p>My professional journey and achievements</p>
            </div>
            <div className={styles.experienceTimeline}>
                {history.map((historyItem, index) => (
                    <div key={index} className={styles.experienceItem}>
                        <div className={styles.expCircle}></div>
                        <div className={styles.expCard}>
                            <div className={styles.expYear}>
                                {`${historyItem.startDate} - ${historyItem.endDate}`}
                            </div>
                            <h3>{historyItem.role}</h3>
                            <h4>{historyItem.organisation}</h4>
                            <p className={styles.expTech}>
                                <strong>Technologies:</strong> {historyItem.skills.join(", ")}
                            </p>
                            {historyItem.experiences.map((experience, expIndex) => (
                                <p key={expIndex} className={styles.expDescription}>
                                    {experience}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}