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
      <main className={styles.main}>
        <h1>
          FRONT-END DEV.
          <br />
          LIVING IN
          <br />
          BELGIUM BRUSSELS
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
