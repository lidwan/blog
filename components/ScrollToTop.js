"use client";

import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.button} onClick={handleScrollToTop}>
        Back to top
      </button>
    </div>
  );
}
