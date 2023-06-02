import React from "react";
import styles from "../assets/styles/Form.module.css";

export default function Form({ className, children, ...rest }) {
  return (
    <form className={`${className} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}
