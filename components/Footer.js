import Image from "next/image";
import styles from "../styles/Footer.module.css"; // Importa o arquivo de estilo

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.textSection}>
        <p>Web Developer</p>
        <p>Web Designer</p>
        <p>Portfolio</p>
      </div>
      <div className={styles.svgSection}>
        {/* Coloque seu SVG aqui. Exemplo de um SVG de seta: */}
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M12 21l-12-18h24z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
