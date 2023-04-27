import React, { memo } from "react";
import Navbar from "../header";

// export const Body = memo(() => {
//   console.log("Body render");
//   return (
//     <div>
//       <h1>Body</h1>
//       <Navbar />
//     </div>
//   );
// });

const Body = (props) => {
  console.log("Body render");
  return (
    <div>
      <h1>Body: {props.data("Our parameter").academy}</h1>
      <Navbar/>
    </div>
  );
};
export default memo(Body);
