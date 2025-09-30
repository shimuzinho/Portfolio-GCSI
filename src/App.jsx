import Spline from '@splinetool/react-spline';
import styles from './styles/app.module.css';
import Header from './components/Header';
import Members from './components/Members';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.containerPrimeiro}>
        <Header />
        <Spline scene="https://prod.spline.design/Hl7MspNbBvzB031g/scene.splinecode" />
      </div>
      <Members />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
