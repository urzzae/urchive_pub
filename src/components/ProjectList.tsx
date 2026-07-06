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
          skill={project.skill}
          title={project.title}
          date={project.date}
          summary={project.summary}
          thumb={project.thumb}
          hasVideo={project.hasVideo}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
