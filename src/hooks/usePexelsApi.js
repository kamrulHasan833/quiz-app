import { useEffect, useState } from "react";

export default function usePexelsApi(url, method, headers) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [request, setRequest] = useState(null);

  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json();
        setLoading(false);

        setRequest(data);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, error, request };
}
