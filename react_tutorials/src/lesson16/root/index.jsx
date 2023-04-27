import React, {useState, useMemo, useCallback} from "react";
import Body from "../components/body/index";

export const Root = () => {
	const [counter, setCounter] = useState(0);
	const data = useMemo(() => {
		return {field: "IT", academy: "Webbrain"}
	}, []);
	const funcData = useCallback((param) => {
		return {field: "IT", academy: param}		
	}, [])
	console.log("Root render");
  return <div>
		<Body data={funcData}></Body>
		<h1>Counter: {counter}</h1>
		<button onClick={() => setCounter(counter + 1)}>Click me</button>
	</div>;
};