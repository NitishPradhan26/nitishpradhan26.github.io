import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Project } from './components/Project/Project'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <hr className={styles.sectionDivider} />
        <Skills />
        <hr className={styles.sectionDivider} />
        <Experience />
        <hr className={styles.sectionDivider} />
        <Project />
        <hr className={styles.sectionDivider} />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
