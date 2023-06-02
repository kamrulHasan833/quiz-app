import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAswers() {
      const db = getDatabase();
      const answersRef = ref(db, `answers/${id}/questions`);
      const answersQuery = query(answersRef, orderByKey());
      try {
        const snapshot = await get(answersQuery);
        if (snapshot.exists()) {
          setAnswers((ps) => [...ps, ...snapshot.val()]);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchAswers();
  }, [id]);

  return { loading, error, answers };
}
