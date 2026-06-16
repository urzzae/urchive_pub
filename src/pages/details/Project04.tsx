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
            src="/images/pj04_img_6.png"
            alt="디자인210 공식 웹사이트 scss 구조"
          />
          <figcaption>
            <p className={styles.center}>SCSS 모듈화 아키텍처 설계</p>
            <p>
              스타일 코드의 유지보수와 재사용성을 높이기 위해 SCSS를 역할에 따라
              분리하였으며, 변수·믹스인 중앙 관리로 일관된 디자인 시스템을
              구현하였습니다.
            </p>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj04_img_7.png"
            alt="디자인210 공식 웹사이트 scss 구조"
          />
          <figcaption>
            <p className={styles.center}>SCSS 변수·mixin 사용 예시</p>
            <p>
              변수를 활용한 타이포그래피 및 컬러 시스템을 설계하고, 반복되는 CSS
              패턴을 Mixin으로 추상화하여 코드 중복을 최소화하였습니다.
            </p>
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
