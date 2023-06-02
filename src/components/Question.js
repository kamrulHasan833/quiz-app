import React from "react";
import styles from "../assets/styles/Question.module.css";
import Answer from "./Answer";
import Answers from "./Answers";

export default function Question({ answers }) {
  return answers.map(({ title, options }, ind) => (
    <div key={ind} className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {title}
      </div>

      <Answers>
        {options.map((option, ind) => (
          <Answer
            key={ind}
            text={option.title}
            checked={option.checked}
            onChange={(e) =>
              (e.target.checked = option.checked ? option.checked : false)
            }
            option={option}
          />
        ))}
      </Answers>
    </div>
  ));
}
