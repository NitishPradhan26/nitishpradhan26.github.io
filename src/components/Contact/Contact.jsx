import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionHeader}>
                <h2>Contact</h2>
                <p>Let's connect and discuss opportunities</p>
            </div>
            <div className={styles.contactWrapper}>
                <div className={styles.contactIcons}>
                    <a href="mailto:nitishpradhan26@gmail.com" title="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nitish-pradhan26/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/nitishpradhan26" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className={styles.contactFormContainer}>
                <p className={styles.formText}>or send a direct message</p>
                <form className={styles.contactFormBox}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
            </div>
        </section>
    );
};
