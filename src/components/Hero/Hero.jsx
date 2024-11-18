import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi! I am Nitish</h1>
                <p className={styles.description}>
                     I am software engineer/full stack developer with 3+ years of experience.
                    Reach out if you'd like to learn more!
                </p>
                <div className={styles.buttonGroup}>
                    <a href="#contact" className={styles.btn}> Contact me</a>
                    <a 
                        href={getImageUrl("resume/Nitish_Pradhan.pdf")}  // Put your CV file in public folder
                        download="Nitish_CV.pdf"
                        className={styles.btn}
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="He" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}