import React from "react";
import styles from "../assets/styles/Header.module.css";
import Account from "./Account";
import Brand from "./Brand";
export default function Header() {
  return (
    <nav className={styles.nav}>
      <Brand />
      <Account />
    </nav>
  );
}
