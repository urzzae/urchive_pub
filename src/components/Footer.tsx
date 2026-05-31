import styles from "./Footer.module.scss";

function Footer() {
  return (
    <header className={`${styles.footer} flex-center-h`}>
      <span className={styles.copy}>(C)2026 UR</span>
    </header>
  );
}

export default Footer;
