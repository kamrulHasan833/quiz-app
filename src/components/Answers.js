import React from "react";
import styles from "../assets/styles/Answers.module.css";

export default function Answers({ children }) {
  return <div className={styles.answers}>{children}</div>;
}
