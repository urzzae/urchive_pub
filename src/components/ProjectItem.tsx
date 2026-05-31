import type { Project } from "../data/projects";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ProjectItemProps = Project;

function ProjectItem({
  id,
  num,
  title,
  period,
  color,
  width,
}: ProjectItemProps) {
  const delay = parseInt(id.split("-")[1]) * 0.1;

  return (
    <motion.li
      className={styles.project_item}
      style={{ backgroundColor: color, width: width }}
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: delay,
      }}
      viewport={{ amount: 0.15 }}
    >
      <Link to={`/project/${id}`}>
        <strong className={styles.num}>{num}</strong>
        <div className={styles.title}>
          <div className={styles.inner}>
            <p>{title}</p>
          </div>
        </div>
        <span className={styles.period}>{period}</span>
      </Link>
    </motion.li>
  );
}

export default ProjectItem;
