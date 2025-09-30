import Spline from '@splinetool/react-spline';
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.containerPrimeiro}>
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
        <Spline scene="https://prod.spline.design/Hl7MspNbBvzB031g/scene.splinecode" />
      </div>

      <div className={styles.containerSegundo}>
        
      </div>
    </div>
  );
}
