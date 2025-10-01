import styles from '../styles/header.module.css';

export default function Header() {
  const scrollRobot = () => {
    const element = document.querySelector('#robot');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollMembers = () => {
    const element = document.querySelector('#members');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollProjects = () => {
    const element = document.querySelector('#projects');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollContact = () => {
    const element = document.querySelector('#contact');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.titleHeader}>Portfolio</h1>
      <div className={styles.nav}>
        <p onClick={scrollRobot} className={styles.optionsHeader}>Início</p>
        <p onClick={scrollMembers} className={styles.optionsHeader}>Integrantes</p>
        <p onClick={scrollProjects} className={styles.optionsHeader}>Projetos</p>
        <p onClick={scrollContact} className={styles.optionsHeader}>Contato</p>
      </div>
      <button className={styles.buttonHeader}>Clicar</button>
    </div>
  )
}