import React from "react";
import { Link } from "react-router-dom";
import logoBg from "../assets/images/logo-bg.png";
import styles from "../assets/styles/Brand.module.css";
export default function Brand() {
  return (
    <ul>
      <li>
        <Link to="/" className={styles.brand}>
          <img src={logoBg} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
  );
}
