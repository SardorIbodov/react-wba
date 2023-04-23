import React, { useState, useEffect } from "react";

export const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  const [name, setName] = useState("webbrain");

  // case 1
  useEffect(() => {
    console.log("case 1");
  });

  // case 2
  useEffect(() => {
    console.log("case 2");
  }, []);

  // case 3
  useEffect(() => {
    console.log("case 3");
  }, [name]);

  // case 4
  useEffect(() => {
    console.log("case 4");
  }, [name, count]);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <div>
      <h1>useEffect</h1>
      <br />
      <div>
        <h1>Name: {name}</h1>
        <input
          type="text"
          onChange={({ target }) => setName(target.value)}
          defaultValue="webbrain"
        />
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
