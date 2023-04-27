import { Student } from "../context/context";

export const Header = () => {
  const [students] = Student();

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
