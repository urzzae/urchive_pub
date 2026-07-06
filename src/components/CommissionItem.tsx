import type { Commission } from "../data/commissions";
import styles from "./Commissions.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

type CommissionProps = Commission & { onClick: () => void };

function CommissionItem({ thumb, skill, src, onClick }: CommissionProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.li className={styles.commission_item}>
      <button type="button" onClick={onClick}>
        <figure
          className={styles.thumb}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label={`${skill} 커미션 작업물 썸네일`}
            >
              <source src={`/videos/${src}.mp4`} type="video/mp4" />
            </video>
          ) : (
            <img
              src={`/images/${thumb}.png`}
              draggable={false}
              alt={`${skill} 커미션 작업물 썸네일`}
            />
          )}
        </figure>
        <div className={styles.info}>
          <span className={styles.skill}>{skill}</span>
        </div>
      </button>
    </motion.li>
  );
}

export default CommissionItem;
