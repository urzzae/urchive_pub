import styles from "../ProjectDetail.module.scss";
import { motion } from "framer-motion";

function Project01() {
  return (
    <div className={styles.contents}>
      <div className={styles.figures}>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj01_1.png"
            alt="[개인작업] 국립중앙도서관 리디자인 메인페이지 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>메인페이지</p>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj01_2.png"
            alt="[개인작업] 국립중앙도서관 리디자인 서브페이지 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>서브페이지</p>
          </figcaption>
        </motion.figure>
      </div>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj01_3.png"
          alt="[개인작업] 국립중앙도서관 리디자인 모바일화면 스크린샷"
        />
        <figcaption>
          <p className={styles.center}>모바일화면</p>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Project01;
