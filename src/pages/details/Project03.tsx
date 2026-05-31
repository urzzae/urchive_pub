import styles from "../ProjectDetail.module.scss";
import { motion } from "framer-motion";

function Project03() {
  return (
    <div className={styles.contents}>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <video autoPlay loop muted playsInline>
          <source src="/videos/pj03_1.mp4" type="video/mp4" />
        </video>
        <figcaption>
          <p className={styles.center}>메인 페이지</p>
          <p>
            복잡하고 불균형했던 헤더 내비게이션(GNB) 구조를 직관적으로
            재정립하고, 불필요한 메뉴를 통합·축소하여 핵심 서비스로의 접근성을
            높였습니다.
          </p>
          <p>
            신규 폰트와 추천 콘텐츠로 구성된 메인 페이지는 각 콘텐츠의 전달력을
            높일 수 있는 방법을 고려했습니다.
          </p>
          <p>
            많은 양의 정보를 효율적으로 시각화하고자 다양한 슬라이드 형태로
            설계하였고, 사용자가 정보를 자연스럽게 탐색할 수 있도록 흐름을
            개선했습니다.
          </p>
        </figcaption>
      </motion.figure>
      <div className={styles.figures}>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj03_img_1.png"
            alt="디자인210 폰트 상세페이지 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>폰트 상세페이지</p>
            <p>
              다양한 폰트를 서비스하는 만큼, 사용자가 원하는 폰트를 찾는 것에
              어려움이 있었습니다. 이를 해결하기 위해 폰트 정보 구조와 노출
              방식을 개편했습니다. 폰트 활용 이미지를 슬라이드 형태로 변경해 한
              눈에 볼 수 있도록 하고, 실시간으로 폰트를 미리 사용해 볼 수 있는
              기능으로 편의성을 높였습니다.
            </p>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/images/pj03_img_2.png"
            alt="디자인210 구독서비스 결제페이지 스크린샷"
          />
          <figcaption>
            <p className={styles.center}>결제페이지</p>
            <p>
              마이페이지·결제 등 사용자와 직접적으로 상호작용하는 영역에서
              사용자 흐름을 분석해 UX를 최적화하는 것에 집중했습니다.
            </p>
          </figcaption>
        </motion.figure>
      </div>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img src="/images/pj03_img_4.png" alt="디자인210 모바일화면 스크린샷" />
        <figcaption>
          <p className={styles.center}>모바일화면</p>
        </figcaption>
      </motion.figure>
      <motion.h3
        className={styles.contents_title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Additional Projects
      </motion.h3>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj03_img_5.png"
          alt="디자인210 프로모션 페이지 스크린샷"
        />
        <figcaption>
          <p className={styles.center}>다양한 프로모션 페이지 퍼블리싱</p>
          <p>
            시각적 요소가 많은 프로모션의 특성을 고려한 리소스 최적화와 탄탄한
            마크업으로 렌더링 성능 및 웹 접근성을 높였습니다.
          </p>
        </figcaption>
      </motion.figure>
      <motion.figure
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src="/images/pj03_img_6.png"
          alt="디자인210 폰트 상세이미지 작업"
        />
        <figcaption>
          <p className={styles.center}>폰트 상세이미지 작업</p>
          <p>
            각 폰트의 특성을 효과적으로 전달하기 위한 비주얼 목업을
            작업했습니다.
          </p>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Project03;
