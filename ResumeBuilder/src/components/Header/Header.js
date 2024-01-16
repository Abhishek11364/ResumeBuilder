import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.topHeading}>Resume Builder</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.heading}>
            Elevate your <span>Professional Profile</span>!
          </p>
          <p className={styles.heading}>
            Create your resume now. <span>It's on the house</span>
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="https://i.postimg.cc/7Y8rnw8x/340594-resumeanatomy-hero-removebg-preview.png"
            alt="Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
