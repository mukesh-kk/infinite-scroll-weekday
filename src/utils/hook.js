import { useEffect, useState } from "react";
const apiEndPoint = "https://api.weekday.technology/adhoc/getSampleJdJSON";
export default function useFetchSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const body = JSON.stringify({
      limit: 10,
      offset: 10 * (pageNumber - 1),
    });

    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(apiEndPoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData((prev) => [...prev, ...result.jdList]);
        setHasMore(result.jdList.length > 0);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [query, pageNumber]);

  return { loading, error, data, hasMore };
}
