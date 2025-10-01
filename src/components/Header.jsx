import styles from '../styles/header.module.css';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const speakRobot = () => {
    const utterance = new SpeechSynthesisUtterance("Bem-vindo ao nosso portfólio, humano.");
    utterance.rate = 0.7;
    utterance.pitch = 0.3;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const robotVoice = voices.find(voice =>
      voice.name.toLowerCase().includes("male") ||
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("google")
    );
    if (robotVoice) utterance.voice = robotVoice;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.titleHeader}>Portfolio</h1>
      <div className={styles.nav}>
        <p onClick={scrollRobot} className={styles.optionsHeader}>Início</p>
        <p onClick={scrollMembers} className={styles.optionsHeader}>Integrantes</p>
        <p onClick={scrollProjects} className={styles.optionsHeader}>Projetos</p>
        <p onClick={scrollContact} className={styles.optionsHeader}>Contato</p>
      </div>
      <button onClick={speakRobot} className={styles.buttonHeader}>
        Ativar Robô
      </button>
      <h2 className={styles.navMenu} onClick={() => setMenuOpen(!menuOpen)}>☰</h2>
      {menuOpen && (
  <div className={styles.dropdownMenu}>
    <p onClick={scrollRobot} className={styles.dropdownItem}>Início</p>
    <p onClick={scrollMembers} className={styles.dropdownItem}>Integrantes</p>
    <p onClick={scrollProjects} className={styles.dropdownItem}>Projetos</p>
    <p onClick={scrollContact} className={styles.dropdownItem}>Contato</p>
  </div>
)}

    </div>
  )
}