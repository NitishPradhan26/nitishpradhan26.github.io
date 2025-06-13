import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <h1>Nitish Pradhan</h1>
                </div>

                {/* Burger Menu */}
                <div className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`${styles.burgerIcon} ${menuOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className={`${styles.navRight} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        <li>
                            <a 
                                href="/assets/resume/Nitish_Pradhan.pdf"
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}