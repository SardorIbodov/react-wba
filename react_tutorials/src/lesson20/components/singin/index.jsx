import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" ref={email} placeholder="email" />
      <input type="text" ref={password} placeholder="password" />
      <button
        onClick={() => {
          if (email.current.value && password.current.value) {
            localStorage.setItem("token", true);
            navigate("/about");
          } else alert("Formani to'ldiring!");
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Signin;
