import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.heroSection} id="hero">
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h2>Hi, I'm Nitish</h2>
                    <h3>Software Engineer / Full Stack Developer</h3>
                    <p>
                        I am a software engineer with 3+ years of experience in full stack development.
                        Passionate about building innovative solutions and creating efficient, scalable applications.
                        Reach out if you'd like to learn more!
                    </p>
                    <div className={styles.buttonGroup}>
                        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
                        <a 
                            href={getImageUrl("resume/Nitish_Pradhan.pdf")}
                            download="Nitish_CV.pdf"
                            className={styles.cvBtn}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src={getImageUrl("hero/heroImage.png")} alt="Nitish Pradhan" />
                </div>
            </div>
        </section>
    );
}