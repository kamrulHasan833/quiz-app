import React from "react";
import styles from "../assets/styles/Button.module.css";

export default function Button({ children, className, text, ...rest }) {
  return (
    <button className={`${styles.button} ${className && className}`} {...rest}>
      <span>{text}</span>
      {children && children}
    </button>
  );
}
