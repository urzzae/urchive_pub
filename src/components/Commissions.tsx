import CommissionList from "./CommissionList";
import styles from "./Commissions.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function Commis() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.75], ["0px", "100dvh"]);

  return (
    <section className={styles.bg}>
      <motion.div style={{ y: y }} className={styles.txt}>
        <span>Commission Work</span>
      </motion.div>
      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2>Commission Work</h2>
          <p>
            개인 의뢰인을 대상으로 약 5년간 누적 500건 이상의 작업을 진행했으며,
            정형화된 레이아웃부터 복잡한 인터랙션 구현까지 다양한 작업을
            다뤘습니다.
          </p>
          <span className={styles.skill}>
            Design / HTML5 / CSS3 / JavaScript
          </span>
        </motion.div>
        <CommissionList />
      </div>
    </section>
  );
}

export default Commis;
