import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <section className={styles.container} id="contact">
            <div className={styles.content}>
                <p className={styles.description}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className={styles.links}>
                    <a href="mailto:nitishpradhan99@gmail.com" className={styles.link}>
                        <img 
                            src={getImageUrl("contact/emailIcon.png")} 
                            alt="Email icon" 
                            className={styles.icon}
                        />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/nitish-pradhan26/" 
                       className={styles.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                    >
                        <img 
                            src={getImageUrl("contact/linkedinIcon.png")} 
                            alt="LinkedIn icon" 
                            className={styles.icon}
                        />
                        LinkedIn
                    </a>
                    <a href="https://github.com/NitishPradhan26" 
                       className={styles.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                    >
                        <img 
                            src={getImageUrl("contact/githubIcon.png")} 
                            alt="GitHub icon" 
                            className={styles.icon}
                        />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
