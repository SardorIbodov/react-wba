import React from "react";
import { Class } from "./class";
import { Hooks } from "./hooks";

export class Lesson10 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Class />
        <Hooks />
      </div>
    );
  }
}
