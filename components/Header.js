// components/Header.js

import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>SD</div>
    <nav>
      <a href="#" className={styles.menuLink}>
        Menu
      </a>
    </nav>
  </header>
);

export default Header;
