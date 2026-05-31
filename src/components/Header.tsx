import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header} flex-center-v`}>
      <Link to={`/`}>
        <h1 className={styles.title}>ARCHIVE UR</h1>
      </Link>
      <span className={styles.subTitle}>2026 Web Portfolio</span>
    </header>
  );
}

export default Header;
