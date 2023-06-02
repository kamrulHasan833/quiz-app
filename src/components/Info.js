import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Info.module.css";

export default function Info({ text1, text2, link }) {
  return (
    <div className={styles.info}>
      {text1} <Link to={link}>{text2}</Link> instead.
    </div>
  );
}
