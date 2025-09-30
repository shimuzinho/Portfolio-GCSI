import styles from '../styles/contact.module.css';

export default function Contact () {
    return (
        <section className={styles.contact}>
            <h2 className={styles.contactTitle}>Contato</h2>
            
            <form className={styles.contactForm}>
                <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className={styles.input} 
                />
                <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className={styles.input} 
                />
                <textarea 
                    placeholder="Sua mensagem" 
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>
                    Enviar
                </button>
            </form>

            <div className={styles.socials}>
                <a href="https://github.com/shimuzinho" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/jenifer-porfirio/" target="_blank">LinkedIn</a>
                <a href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSBmWzDlxsdMKssVNLFGhNkSJQHSZQrzljxNTQlWmbwfvSvtNWPCcFJHMxtTJgmFwNDmMgKl">Email</a>
            </div>
        </section>
    );
}
