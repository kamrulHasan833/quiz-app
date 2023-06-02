import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import useQuize from "../../hooks/useQuize";
import Answer from "../Answer";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "quizes":
      const questions = _.cloneDeep(action.quizes);
      questions.forEach((question) =>
        question.options.forEach((option, index1) => (option.checked = false))
      );

      return questions;

    case "answers":
      const answers = _.cloneDeep(state);
      answers[action.currentQuestion].options[action.currentOption].checked =
        action.value;
      return answers;
    default:
      return state;
  }
};
export default function Quiz() {
  const { state } = useLocation();
  const { id, title } = state;
  const { loading, error, quizes } = useQuize(id);
  const { currentUser } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalQuestions, dispatch] = useReducer(reducer, initialState);

  const naviage = useNavigate();
  useEffect(() => {
    dispatch({
      type: "quizes",
      quizes,
    });
  }, [quizes]);

  // Viariable for parchantage of currentQuestion size on total question
  const perchentage = finalQuestions.length
    ? ((currentQuestion + 1) / finalQuestions.length) * 100
    : 0;
  function changeHandle(e, id) {
    const value = e.target.checked;
    dispatch({
      type: "answers",
      value,
      currentOption: id,
      currentQuestion,
    });
  }

  async function nextBtn() {
    if (currentQuestion + 1 < finalQuestions.length) {
      setCurrentQuestion((ps) => ps + 1);
    }
    if (currentQuestion + 1 === finalQuestions.length) {
      const db = getDatabase();
      const resultRef = ref(db, `result/${currentUser.uid}/${id}`);
      await set(resultRef, finalQuestions);

      naviage(`/result/${id}`, {
        state: finalQuestions,
      });
    }
  }

  function prevBtn() {
    currentQuestion > 0 && setCurrentQuestion((ps) => ps - 1);
  }

  return (
    <>
      {!loading && !error && finalQuestions.length > 0 ? (
        <>
          <h1>{finalQuestions[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers>
            {finalQuestions[currentQuestion].options.map(
              ({ title, checked }, ind) => (
                <Answer
                  key={ind}
                  text={title}
                  checked={checked}
                  onChange={(e) => changeHandle(e, ind)}
                />
              )
            )}
          </Answers>
          <ProgressBar
            nextBtn={nextBtn}
            prevBtn={prevBtn}
            perchentage={perchentage}
          />
          <MiniPlayer id={id} title={title} />
        </>
      ) : loading ? (
        <p>Loading....</p>
      ) : (
        <p>No Quiz Found</p>
      )}
    </>
  );
}
