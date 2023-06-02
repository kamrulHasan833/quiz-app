import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVieos(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasmore, setHasmore] = useState(true);

  useEffect(() => {
    async function fesVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(10)
      );
      try {
        const snapshot = await get(videoQuery);

        if (snapshot.exists()) {
          setVideos((ps) => [...ps, ...Object.values(snapshot.val())]);
        } else {
          setHasmore(false);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    setTimeout(() => fesVideos(), 1000);
  }, [page]);

  return { loading, error, videos, hasmore };
}
