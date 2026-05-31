import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.scss";

function ProjectList() {
  return (
    <ul className={`${styles.project_list}`}>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          num={project.num}
          title={project.title}
          period={project.period}
          color={project.color}
          width={project.width}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
