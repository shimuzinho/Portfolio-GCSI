import styles from '../styles/projects.module.css';

export default function Projects() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>Projetos</h2>

            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>DevNotes</h3>
                    <p className={styles.projectDesc}>
                        Aplicação web de anotações com Markdown, sincronização em tempo real e autenticação por Google. Feita com React, Firebase e Tailwind.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>WeatherWise</h3>
                    <p className={styles.projectDesc}>
                        Site de previsão do tempo que consome API da OpenWeather e exibe dados atualizados com gráficos interativos. Desenvolvido em Next.js e Chart.js.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>Shoply</h3>
                    <p className={styles.projectDesc}>
                        E-commerce completo com carrinho, sistema de login e painel de administração. Backend em Node.js e banco de dados MongoDB.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>TaskFlow</h3>
                    <p className={styles.projectDesc}>
                        Gerenciador de tarefas com arrastar e soltar, categorias e modo escuro. Construído com React, Zustand e Styled Components.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>FoodieFinder</h3>
                    <p className={styles.projectDesc}>
                        Aplicativo que sugere restaurantes próximos com base na localização e avaliações. Usando API do Google Maps e React Native.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectName}>PortfolioPro</h3>
                    <p className={styles.projectDesc}>
                        Template de portfólio responsivo com animações em Framer Motion e SEO otimizado. Feito em Next.js e Tailwind CSS.
                    </p>
                    <button className={styles.projectButton}>Ver mais</button>
                </div>
            </div>
        </section >
    )
}