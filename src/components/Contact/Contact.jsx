import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionHeader}>
                <h2>Contact Me</h2>
                <p>Feel free to connect via email, LinkedIn, or GitHub.</p>
            </div>

            <div className={styles.contactWrapper}>
                <div className={styles.contactLinks}>
                    <a href="mailto:nitishpradhan99@gmail.com" 
                       className={styles.contactLink}>
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/nitish-pradhan26/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={styles.contactLink}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/NitishPradhan26" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={styles.contactLink}>
                        GitHub
                    </a>
                </div>

                <div className={styles.contactFormBox}>
                    <form 
                        action="https://formsubmit.co/nitishpradhan99@gmail.com" 
                        method="POST" 
                        className={styles.contactForm}
                    >
                        {/* Disable Captcha */}
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            required 
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email" 
                            required 
                        />

                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Your Message" 
                            rows="6" 
                            required
                        ></textarea>

                        <button type="submit" className={styles.centerButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
