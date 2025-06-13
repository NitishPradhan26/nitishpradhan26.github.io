import React, { useEffect } from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    useEffect(() => {
        // Update the current year
        document.getElementById("currentYear").textContent = new Date().getFullYear();
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; <span id="currentYear"></span> Nitish Pradhan. All Rights Reserved.</p>
                <p>
                    <a href="mailto:nitishpradhan26@gmail.com">nitishpradhan26@gmail.com</a>
                    &middot;
                    <a href="https://www.linkedin.com/in/nitish-pradhan26/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    &middot;
                    <a href="https://github.com/nitishpradhan26" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
        </footer>
    );
}; 