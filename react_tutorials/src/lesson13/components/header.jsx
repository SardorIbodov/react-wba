import React, { useContext } from "react";
import { StudentContext } from "../context";

export const Header = (props) => {
  const [students, setStudents] = useContext(StudentContext);

  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h4>Home: {students.length}</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Sign in</h4>
    </div>
  );
};
