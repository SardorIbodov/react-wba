import { useEffect } from "react";

const Fetch = () => {
  const abort = new AbortController();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "fetch" }),
      // signal: abort,
      Authorization: `Bearer token`,
    })
      .then((response) => response.json())
      .then((response) => console.log(response, "fetch"));
  }, []);
  setTimeout(() => {
    abort.abort();
  }, 1000);

  return <h1>Fetch</h1>;
};

export default Fetch;
