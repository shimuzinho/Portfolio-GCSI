import styles from '../styles/projects.module.css';

export default function Projects() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>Projetos</h2>

            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>Projeto 1</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>Projeto 2</h3>
                    <p className={styles.projectDesc}>
                        Breve descrição do projeto, tecnologias usadas e objetivo.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>
                
            </div>
        </section>
    )
}