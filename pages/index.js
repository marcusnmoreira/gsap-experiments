import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "../styles/Home.module.css";

export default function H1Component() {
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: -20 }, // Valores iniciais
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" } // Valores finais
    );
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/teste">
        <h1 ref={h1Ref} className={styles.h1Title}>
          Teste de página
        </h1>
      </Link>
    </div>
  );
}
