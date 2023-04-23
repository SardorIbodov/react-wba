import React, { useState, useEffect } from "react";
import { Hooks } from "./hooks";

export const Lesson11 = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useEffect</h1>
      <br />
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <hr />
      <Hooks count={count} />
    </div>
  );
};
