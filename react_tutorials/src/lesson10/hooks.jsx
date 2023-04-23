import React, { useState } from "react";
import "./style.css";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("webbrain");
  const [data, setData] = useState({
    name: "webbrain",
    count: 0,
  });

  function sayHello() {
    console.log("Hello from Hooks");
  }

  return (
    <div
      onClick={sayHello}
      style={{ border: "2px solid green", cursor: "pointer" }}
    >
      <h1>Hooks Component</h1>
      <h1>Name: {data.name}</h1>
      <input
        type="text"
        onChange={({ target }) => setData({ ...data, name: target.value })}
        defaultValue="webbrain"
      />
      <h1>Count: {data.count}</h1>
      <button onClick={() => setData({ ...data, count: data.count - 1 })}>
        -
      </button>
      <button onClick={() => setData({ ...data, count: data.count + 1 })}>
        +
      </button>
    </div>
  );
};
