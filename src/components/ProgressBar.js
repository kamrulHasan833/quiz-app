import React, { useState } from "react";
import styles from "../assets/styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar({ nextBtn, prevBtn, perchentage }) {
  const [hideShow, setHideShow] = useState(true);
  function toggle() {
    if (!hideShow) {
      setHideShow(true);
    } else {
      setHideShow(false);
    }
  }
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton} onClick={prevBtn}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={`${styles.tooltip} ${!hideShow ? styles.show : null}`}>
          {perchentage}% Cimplete!
        </div>
        <div
          className={styles.rangeBody}
          onMouseEnter={toggle}
          onMouseOut={toggle}
        >
          <div
            className={styles.progress}
            style={{ width: `${perchentage}%` }}
          ></div>
        </div>
      </div>

      <Button className={styles.next} text="Next Question" onClick={nextBtn}>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
