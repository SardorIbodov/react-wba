import React from "react";
import ReactDOM from "react-dom/client";
import { Lesson3 } from "./lesson3";
import { Lesson4 } from "./lesson4";
import { Lesson6 } from "./lesson6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Lesson3 /> */}
    {/* <Lesson4 /> */}
		<Lesson6 />
  </React.StrictMode>
);
