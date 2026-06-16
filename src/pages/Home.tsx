import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import styles from "./Home.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <>
      <Header />
      <Hero />
      <div ref={ref} className={styles.wrap}>
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
