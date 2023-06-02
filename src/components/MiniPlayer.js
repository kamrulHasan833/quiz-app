import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "../assets/styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  const [hideShow, setHideShow] = useState(true);
  const URL = `https://www.youtube.com/watch?v=${id}`;
  function toggle() {
    if (!hideShow) {
      setHideShow(true);
    } else {
      setHideShow(false);
    }
  }

  return (
    <div
      className={`${styles.miniPlayer} ${hideShow && styles.floatingBtn}`}
      onClick={toggle}
    >
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${styles.close}`}
        onClick={toggle}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        url={URL}
        width="320px"
        height="180px"
        playing={hideShow ? false : true}
        controls={true}
      />
      <p>{title}</p>
    </div>
  );
}
