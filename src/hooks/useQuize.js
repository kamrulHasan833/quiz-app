import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuize(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    async function fetchQuizes() {
      const db = getDatabase();
      const quizeRef = ref(db, `quiz/${id}/questions`);
      const quizeQuery = query(quizeRef, orderByKey());
      try {
        const snapshot = await get(quizeQuery);
        if (snapshot.exists()) {
          setQuizes((ps) => [...ps, ...snapshot.val()]);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchQuizes();
  }, [id]);

  return { loading, error, quizes };
}
