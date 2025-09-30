import styles from '../styles/members.module.css';
import imgGuilherme from '../assets/image-Guilherme.jpg';
import imgJenifer from '../assets/image-Jenifer.jpg';
import imgPedro from '../assets/image-Pedro.jpg';

export default function Members() {
    return (
        <div className={styles.members}>
            <h1 className={styles.titleMembers}>Integrantes</h1>
            <div className={styles.containerCards}>

                <div className={styles.cardGuilherme}>
                    <img className={styles.imgGuilherme} src={imgGuilherme} />
                    <h2 className={styles.name}>Guilherme Henrique</h2>
                    <h3 className={styles.subtitle}>Fascinado por inovação</h3>
                    <p>Desenvolvedor FullStack | JavaScript | Node | Next.js | React | PostgreSQL | MongoDB | React Native</p>
                </div>

                <div className={styles.cardJenifer}>
                    <img className={styles.imgJenifer} src={imgJenifer} />
                    <h2 className={styles.name}>Jenifer Porfirio</h2>
                    <h3 className={styles.subtitle}>Apaixonada por estética e criatividade</h3>
                    <p>Desenvolvedora FullStack | JavaScript | Node.js | React | PostgreSQL | React Native</p>
                </div>

                <div className={styles.cardPedro}>
                    <img className={styles.imgPedro} src={imgPedro} />
                    <h2 className={styles.name}>Pedro Rossini</h2>
                    <h3 className={styles.subtitle}>Explorador de lógica e tecnologia</h3>
                    <p>| React | Node.js | Python | C++ |</p>
                </div>

            </div>
        </div>
    )
}