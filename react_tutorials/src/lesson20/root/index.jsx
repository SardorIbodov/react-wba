import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate("/lorem")}>404</button>
      <button onClick={() => localStorage.removeItem("token")}>Log out</button>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path={"/"} element={<Navigate to={"/home"} />} />
          {navbar.map((item) => {
            return (
              <Route
                path={item.url}
                element={
                  item.title === "About" ? (
                    localStorage.getItem("token") ? (
                      item.element
                    ) : (
                      <Navigate to={"/signin"} />
                    )
                  ) : (
                    item.element
                  )
                }
                key={item.id}
              />
            );
          })}
        </Route>
        <Route path={"*"} element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
};
export default Root;
