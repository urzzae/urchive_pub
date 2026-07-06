import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Commissions from "../components/Commissions";
import Contact from "../components/Contact";
import styles from "./Home.module.scss";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);

  return (
    <>
      <Header />
      <Hero />
      <div ref={ref} className={styles.wrap}>
        <Projects />
        <Commissions />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
