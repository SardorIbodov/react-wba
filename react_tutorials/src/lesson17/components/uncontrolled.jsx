import React, { useRef } from "react";

const UnControlled = () => {
  console.log("UnControlled");
	const title = useRef("");

  return (
    <div>
      <h1>UnControlled</h1>
      <input type="text" ref={title}/>
      <button onClick={() => alert(title.current.value)}>Show</button>
    </div>
  );
};

export default UnControlled;
