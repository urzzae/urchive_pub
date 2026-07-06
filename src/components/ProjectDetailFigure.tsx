import styles from "../pages/ProjectDetail.module.scss";
import { motion } from "framer-motion";

type ProjectDetailFigureProps = {
  type: "img" | "video";
  src: string;
  caption: string;
  alt: string;
  desc?: string;
};

function ProjectDetailFigure({
  type,
  src,
  caption,
  alt,
  desc,
}: ProjectDetailFigureProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {type === "video" ? (
        <video autoPlay loop muted playsInline aria-label={alt}>
          <source src={`/videos/${src}.mp4`} type="video/mp4" />
        </video>
      ) : (
        <img src={`/images/${src}.png`} alt={alt} />
      )}
      <figcaption>
        <p className={styles.center}>{caption}</p>
        {desc && <p>{desc}</p>}
      </figcaption>
    </motion.figure>
  );
}

export default ProjectDetailFigure;
