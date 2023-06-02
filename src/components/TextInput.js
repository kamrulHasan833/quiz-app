import React from "react";
import styles from "../assets/styles/TextInput.module.css";

export default function TextInput({ icon, ...res }) {
  return (
    <div className={styles.textInput}>
      <input {...res} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
