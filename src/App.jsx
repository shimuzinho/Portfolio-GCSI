import Spline from '@splinetool/react-spline';
import styles from './styles/app.module.css'
import Header from './components/Header';

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.containerPrimeiro}>
        <Header />
        <Spline scene="https://prod.spline.design/Hl7MspNbBvzB031g/scene.splinecode" />
      </div>

      <div className={styles.containerSegundo}>
        
      </div>
    </div>
  );
}
