import React from "react";
import styles from "../assets/styles/Column.module.css";

export default function Column({ children }) {
  return <div className={styles.column}>{children}</div>;
}
