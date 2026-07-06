import { commissions } from "../data/commissions";
import CommissionItem from "./CommissionItem";
import styles from "./Commissions.module.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function CommissionList() {
  const ref = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 1000px)").matches,
  );
  const [lbIndex, setLbIndex] = useState(-1);
  const lightboxSlides = commissions.map((c) => ({
    type: "video" as const,
    sources: [{ src: `/videos/${c.src}.mp4`, type: "video/mp4" }],
    title: c.title,
    description: c.desc,
  }));

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1000px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <Lightbox
        open={lbIndex >= 0}
        index={lbIndex}
        close={() => setLbIndex(-1)}
        slides={lightboxSlides}
        plugins={[Video, Captions]}
        video={{ autoPlay: true, muted: true }}
      />
      <div className={`${styles.slide}`} ref={ref}>
        <motion.ul
          className={`${styles.commission_list}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          drag={isMobile ? "x" : false}
          dragConstraints={ref}
          onDragStart={() => {
            dragged.current = true;
          }}
          onClickCapture={(e) => {
            if (dragged.current) {
              e.preventDefault();
              e.stopPropagation();
              dragged.current = false;
            }
          }}
        >
          {commissions.map((commission, i) => (
            <CommissionItem
              onClick={() => setLbIndex(i)}
              key={commission.id}
              id={commission.id}
              thumb={commission.thumb}
              skill={commission.skill}
              src={commission.src}
            />
          ))}
        </motion.ul>
      </div>
    </>
  );
}

export default CommissionList;
