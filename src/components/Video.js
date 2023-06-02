import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/Video.module.css";

export default function Video({ id, title, noq }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(noq ? `/quiz/${id}` : "/", {
          state: { id, title },
        })
      }
    >
      <div className={styles.video}>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt=""
        />
        <p>{title}</p>
        <div className={styles.qmeta}>
          <p>{noq ? `${noq} Questions ` : `No Question Found`} </p>
          <p>Score : {noq ? noq * 5 : 0}</p>
        </div>
      </div>
    </div>
  );
}
