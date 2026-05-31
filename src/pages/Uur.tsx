import styles from "./ProjectDetail.module.scss";
import { motion } from "framer-motion";

function Uur() {
  return (
    <div className={styles.contents}>
      <motion.div
        className={styles.figures}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <figure>
          <img
            src="/images/pf_210/1.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/2.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/3.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/4.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/5.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/6.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/7.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/8.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/9.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/10.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/11.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
        <figure>
          <img
            src="/images/pf_210/12.png"
            alt="디자인210 쇼핑몰 개편 & 유지보수 포트폴리오"
          />
        </figure>
      </motion.div>
    </div>
  );
}

export default Uur;
