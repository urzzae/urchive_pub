import styles from "./Hero.module.scss";
import ScrollDown from "./ScrollDown";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const titleLettersDis = ["A", "r", "c", "h", "i", "v", "e"];
  const titleLetters = ["U", "R"];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["0px", "-50dvh"]);

  return (
    <>
      <motion.div
        className={`${styles.hero} flex-center`}
        ref={ref}
        style={{ opacity, y }}
      >
        <div className={styles.ur}>
          <span>Portfolio URachive</span>
          <span>Portfolio URachive</span>
        </div>
        <div className={`${styles.inner} flex-center`}>
          <div className={styles.title}>
            <motion.span
              className={styles.title_sub}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              2026 Web Portfolio
            </motion.span>
            <div className={styles.animation}>
              {titleLettersDis.map((letter, index) => (
                <motion.strong
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 1,
                    delay: index * 0.05,
                  }}
                >
                  {letter}
                </motion.strong>
              ))}
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: (titleLettersDis.length + index) * 0.05, // letters 끝난 다음부터 시작
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              className={`${styles.works} flex-center`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <span>UI Design</span>
              <span>UI Development</span>
              <span>Web & Mobile Publishing</span>
            </motion.div>
          </div>
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.85 }}
          >
            <span>
              마크업의 본질에 집중하여 섬세한 웹 환경을 구축하는 웹퍼블리셔
              채유라 입니다.
            </span>
            <span>
              디자인과 개발 사이의 가장 견고하고 유연한 브리지가 되겠습니다.
            </span>
          </motion.p>
        </div>
        <div className={styles.scroll_icon}></div>
        <ScrollDown />
      </motion.div>
    </>
  );
}

export default Hero;
