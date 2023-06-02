import React from "react";
import styles from "../assets/styles/Layout.module.css";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
