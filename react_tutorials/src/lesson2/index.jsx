import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Students as Studentlar, Teachers as Ustozlar } from "./App";
// import App from "./App";
import Students from "../../../tutorial2/src/Students";
import reportWebVitals from "../../../tutorial2/src/reportWebVitals";

const students = [
	{id:1, name: "Sardor"},
	{id:2, name: "Ollomurod"},
	{id:3, name: "Sodiq"},
	{id:4, name: "Ilhom"},
	{id:5, name: "Dilshod"},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Studentlar />
    <Ustozlar /> */}

    {/* <App data={{title:"React", status:"active"}}/>
    <App title="Vue" />
    <App title="Angular" /> */}

    {/* <App title="Angular">
      <h1>Hi! I'm the child</h1>
    </App> */}

		{students.map(student => {
			return (
				<Students data = {student}/>
			)
		})}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
