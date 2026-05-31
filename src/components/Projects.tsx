import ProjectList from "./ProjectList";
import styles from "./Projects.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const u = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const d = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref}>
      <motion.div style={{ y: u }} className={styles.txt}>
        Portfolio
      </motion.div>
      <motion.div style={{ y: d }} className={`${styles.inner} flex-center`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className={`${styles.line} ${styles.line1}`}
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className={`${styles.line} ${styles.line2}`}
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className={`${styles.line} ${styles.line3}`}
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className={`${styles.line} ${styles.line4}`}
        ></motion.div>
        <ProjectList />
      </motion.div>
    </section>
  );
}

export default Projects;
