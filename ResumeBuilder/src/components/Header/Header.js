import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.topHeading}>Resume Builder</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src="https://i.postimg.cc/3rnC17fs/Resume.jpg" alt="Resume" />
        </div>
      </div>
    </div>
  );
}

export default Header;
