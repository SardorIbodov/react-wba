import React, {useState} from "react";

const Controlled = () => {
	console.log("Controlled");
	const [title, setTitle] = useState("");

	return (
		<div>
			<h1>Controlled: {title}</h1>
			<input type="text" onChange={(e) => setTitle(e.target.value)}/>
		</div>
	)
}

export default Controlled;