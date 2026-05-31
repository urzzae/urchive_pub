import styles from "../ProjectDetail.module.scss";
import { motion } from "framer-motion";

function Project04() {
  return (
    <div className={styles.contents}>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_1.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>메인 페이지</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_2.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>기업소개 페이지</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_3.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>전용서체 설명 페이지</p>
        </figcaption>
      </motion.figure>

      <div className={styles.figures}>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj04_img_4.png"
            alt="[개인작업] 책발전소 가상 웹사이트 서브페이지1 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>문의 페이지</p>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj04_img_5.png"
            alt="[개인작업] 책발전소 가상 웹사이트 서브페이지2 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>전용서체 리스트 페이지</p>
          </figcaption>
        </motion.figure>
      </div>

      <motion.h3
        className={styles.contents_title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Additional Projects
      </motion.h3>
      <motion.p
        className={styles.contents_desc}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        각 기업의 브랜드 아이덴티티를 담은 서체 탄생 스토리와 컨셉에 맞춰
        상세페이지 디자인 및 퍼블리싱을 진행했습니다.
      </motion.p>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_5.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>메이크어스 전용서체 &lt;Dingo&gt;</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_4.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>펜먼 전용서체 &lt;펜먼&gt;</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj04_6.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>tvN 채널 전용서체 &lt;삼시세끼&gt;</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj04_img_1.png"
          alt="tvN 채널 전용서체 &lt;꽃보다할배&gt;"
        />
        <figcaption>
          <p className={styles.center}>tvN 채널 전용서체 &lt;꽃보다할배&gt;</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj04_img_2.png"
          alt="비상교육 전용서체 &lt;Visang Math&gt;"
        />
        <figcaption>
          <p className={styles.center}>비상교육 전용서체 &lt;Visang Math&gt;</p>
        </figcaption>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj04_img_3.png"
          alt="CJ E&M Olive 전용서체 &lt;OLIVE YOLO&gt;"
        />
        <figcaption>
          <p className={styles.center}>
            CJ E&M Olive 전용서체 &lt;OLIVE YOLO&gt;
          </p>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Project04;
