import React, { useMemo } from "react";
import image1 from "../assets/images/success.png";
import styles from "../assets/styles/Summary.module.css";
import usePexelsApi from "../hooks/usePexelsApi";
export default function Summary({ noq, result }) {
  const imgPath = useMemo(() => {
    if ((result.score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((result.score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((result.score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "exellent";
    }
  }, [noq, result]);

  const { loading, request } = usePexelsApi(
    `https://api.pexels.com/v1/search?query=${imgPath}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXEL_API_KEY,
    }
  );
  const image = request ? request.photos[0].src.medium : image1;

  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={styles.score}>
          Your score is <br />
          {result.score} out of {noq * 5}
        </p>
      </div>

      <div className={styles.badge}>
        {loading && <p>Loading...</p>}
        {!loading && request && <img src={image} alt="Success" />}
        {!loading && !request && <img src={image} alt="Success" />}
      </div>
    </div>
  );
}
