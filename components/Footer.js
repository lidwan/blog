import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.note}>© {currentYear} Loay&apos;s Blog</p>
        <span className={styles.status}>Minimal writing on code, systems, and tools</span>
      </div>
    </footer>
  );
}

export default Footer;
