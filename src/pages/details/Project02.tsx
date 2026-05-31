import styles from "../ProjectDetail.module.scss";
import { motion } from "framer-motion";

function Project02() {
  return (
    <div className={styles.contents}>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj02_1v.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>메인 페이지</p>
        </figcaption>
      </motion.figure>
      <div className={styles.figures}>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj02_1.png"
            alt="[개인작업] 책발전소 가상 웹사이트 서브페이지1 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>서브페이지1</p>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj02_2.png"
            alt="[개인작업] 책발전소 가상 웹사이트 서브페이지2 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>서브페이지2</p>
          </figcaption>
        </motion.figure>
      </div>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj02_3.png"
          alt="[개인작업] 책발전소 가상 웹사이트 모바일화면 스크린샷"
        />
        <figcaption>
          <p className={styles.center}>모바일화면</p>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Project02;
