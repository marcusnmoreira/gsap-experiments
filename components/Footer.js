import Image from "next/image";
import styles from "../styles/Footer.module.css"; // Importa o arquivo de estilo
import ArrowIcon from "../public/arrow.js";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.textSection}>
        <p className={styles.professionTitle}>Web Developer</p>
        <p className={styles.professionTitle}>Web Designer</p>
        <p className={styles.professionTitle}>Portfolio</p>
      </div>
      <div className={styles.svgSection}>
        <ArrowIcon />
      </div>
    </footer>
  );
};

export default Footer;
