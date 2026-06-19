import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer} flex-center-h`}>
      <span className={styles.copy}>(C)2026 UR</span>
    </footer>
  );
}

export default Footer;
