import React from "react";
import styles from "../assets/styles/Analysis.module.css";

export default function Analysis({ noq, result }) {
  return (
    <div className={styles.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {result.correctAnswers.length} out of {noq} questions
        correctly
      </h4>
    </div>
  );
}
