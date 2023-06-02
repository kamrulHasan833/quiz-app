import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../assets/styles/Videos.module.css";
import useVideos from "../hooks/useVideos";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasmore } = useVideos(page);

  return (
    <InfiniteScroll
      dataLength={videos.length}
      hasMore={hasmore}
      next={() => setPage((ps) => ps + 10)}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
    >
      <div className={styles.videos}>
        {error && "An error occured"}

        {!loading &&
          !error &&
          videos.length > 0 &&
          videos.map(({ noq, title, youtubeID }, id) => (
            <Video key={id} title={title} id={youtubeID} noq={noq} />
          ))}
      </div>
    </InfiniteScroll>
  );
}
