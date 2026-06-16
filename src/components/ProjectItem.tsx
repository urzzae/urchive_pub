import type { Project } from "../data/projects";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ProjectItemProps = Project;

function ProjectItem({
  id,
  skill,
  title,
  date,
  summary,
  thumb,
}: ProjectItemProps) {
  return (
    <motion.li
      className={styles.project_item}
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
      }}
      viewport={{ amount: 0.45 }}
    >
      <Link to={`/project/${id}`}>
        <figure className={styles.thumb}>
          <img src={`/images/${thumb}.png`} />
        </figure>
        <div className={styles.info}>
          <span className={styles.date}>{date}</span>
          <strong className={styles.title}>{title}</strong>
          <p className={styles.summary}>{summary}</p>
          <span className={styles.skill}>{skill}</span>
        </div>
      </Link>
    </motion.li>
  );
}

export default ProjectItem;
