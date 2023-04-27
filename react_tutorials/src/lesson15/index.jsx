import React, { useState } from "react";

export const Lesson14 = (props) => {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count") || 0)
  );
  // setItem, getItem, removeItem, clear
  localStorage.setItem("count", count);
  localStorage.setItem("IT academy", "Webbrain");
  localStorage.setItem("data", JSON.stringify({ name: "Sardor", age: 19 }));
  return (
    <div>
      <h1>LocalStorage: {count}</h1>
      <button
        onClick={() => {
          setCount(Number(localStorage.getItem("count")) + 1);
        }}
      >
        Plus
      </button>
      <button onClick={() => localStorage.removeItem("count")}>
        Remove Count
      </button>
      <button onClick={() => localStorage.clear()}>Clear</button>
      <p>{JSON.parse(localStorage.getItem("data")).name}</p>
    </div>
  );
};
