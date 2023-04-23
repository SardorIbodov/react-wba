import React, { useReducer } from "react";
import {reducer} from "./reducer";
import "./style.css";

export const Lesson12 = (props) => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>useReducer</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byAmount", payload: 5 })}>
        5
      </button>
      <button onClick={() => dispatch({ type: "byAmount", payload: 50 })}>
        50
      </button>
    </div>
  );
};
