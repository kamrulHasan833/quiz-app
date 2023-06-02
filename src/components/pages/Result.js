import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Question from "../Question";
import Summary from "../Summary";
export default function Result() {
  const { id } = useParams();
  const { state: userAnswers } = useLocation();
  const { loading, error, answers } = useAnswers(id);

  function scoreCount() {
    let score = 0;
    let correctAnswers = [];
    answers.forEach((question, index) => {
      let correctArray = [];
      let checkedArray = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctArray.push(index2);
        }
        if (userAnswers[index].options[index2].checked) {
          checkedArray.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctArray, checkedArray)) {
        correctAnswers.push(index);
        score = score + 5;
      }
    });

    return { score, correctAnswers };
  }
  const noq = answers.length;
  const result = scoreCount();
  return (
    <>
      {!loading && !error && answers.length > 0 && (
        <>
          <Summary noq={noq && noq} result={result} />
          <Analysis noq={noq && noq} result={result} />
          <Question answers={answers} />
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>An error occured! Try later.</p>}
      {!loading && !error && answers.length === 0 && <p>No data found!</p>}
    </>
  );
}
