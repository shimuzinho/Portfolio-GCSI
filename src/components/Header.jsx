import styles from '../styles/header.module.css'

export default function Header(){
    return (
        <div className={styles.header}>
          <h1 className={styles.titleHeader}>Portfolio</h1>
          <div className={styles.nav}>
            <p className={styles.optionsHeader}>Início</p>
            <p className={styles.optionsHeader}>Integrantes</p>
            <p className={styles.optionsHeader}>Projetos</p>
            <p className={styles.optionsHeader}>Contato</p>
          </div>
          <button className={styles.buttonHeader}>Clicar</button>
        </div>
    )
}