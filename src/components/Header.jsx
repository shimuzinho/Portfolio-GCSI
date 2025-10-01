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
    </div>
  )
}