import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { gsap } from "gsap";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  useEffect(() => {
    // Add GSAP animation here
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HomePage;
