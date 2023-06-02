import React from "react";
import styles from "../assets/styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answer({ text, option, ...rest }) {
  return !option ? (
    <Checkbox text={text} className={styles.answer} {...rest} />
  ) : (
    <Checkbox
      text={text}
      className={styles.answer}
      className2={
        option.correct ? styles.correct : option.checked ? styles.wrong : ""
      }
      {...rest}
    />
  );
}
