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
  const y = useTransform(scrollYProgress, [0, 0.75], ["0px", "100dvh"]);

  return (
    <section ref={ref}>
      <motion.div style={{ y: y }} className={styles.txt}>
        Portfolio
      </motion.div>
      <div className={`${styles.inner} flex-center`}>
        <ProjectList />
      </div>
    </section>
  );
}

export default Projects;
