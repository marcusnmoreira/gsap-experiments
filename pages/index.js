import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  useEffect(() => {
    // Add GSAP animation here
  }, []);

  return (
    <div className={styles.containerBody}>
      <Header />
      <main className={styles.container}>
        <div className={styles.grid}>
          <span className={styles.title}>FRONT-END DEV.</span>
          <span className={styles.living}>LIVING IN</span>
          <span className={styles.location}>
            <span className={styles.cityCountry}>BELGIUM</span>
            <span className={styles.cityCountry}>BRUSSELS</span>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
