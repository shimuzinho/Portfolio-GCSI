import styles from '../styles/projects.module.css';

export default function Projects() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>Projetos</h2>

            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>DevNotes</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>WeatherWise</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>Shoply</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>TaskFlow</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>FoodieFinder</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>PortfolioPro</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>
            </div>
        </section >
    )
}