import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project01 from "./details/Project01";
import Project02 from "./details/Project02";
import Project03 from "./details/Project03";
import Project04 from "./details/Project04";
import styles from "./ProjectDetail.module.scss";
import { projectDetails } from "../data/projectDetails";
import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";

const projectComponents: Record<string, React.ComponentType> = {
  "project-01": Project01,
  "project-02": Project02,
  "project-03": Project03,
  "project-04": Project04,
};

function ProjectDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = projects.findIndex((page) => page.id === id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const project = projectDetails.find((item) => item.id === id);
  const DetailComponent = id ? projectComponents[id] : null;

  if (!DetailComponent || !project)
    return <div>존재하지 않는 프로젝트입니다.</div>;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.number}>{project.num}</span>
          <h2 className={styles.title}>{project.title}</h2>
          <ul className={styles.tags}>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <p className={styles.role}>{project.contribution}</p>
          <p className={styles.desc}>{project.description}</p>
          {project.buttons && (
            <div className={styles.buttons}>
              {project.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {btn.label}
                  <IconExternalLink stroke={2} size={16} />
                </a>
              ))}
            </div>
          )}
        </motion.div>
        <DetailComponent />
        <div className={styles.footer}>
          {prevProject && (
            <div className={styles.button_prev}>
              <Link to={`/project/${prevProject.id}`}>
                <span>PREV</span>
                <strong>{prevProject.title}</strong>
              </Link>
            </div>
          )}
          {nextProject && (
            <div className={styles.button_next}>
              <Link to={`/project/${nextProject.id}`}>
                <span>NEXT</span>
                <strong>{nextProject.title}</strong>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetail;
