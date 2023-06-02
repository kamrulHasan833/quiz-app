import React from "react";

import styles from "../assets/styles/Illustration.module.css";
export default function Illustration({ image, alt }) {
  return (
    <div className={styles.illustration}>
      <img src={image} alt={alt} />
    </div>
  );
}
