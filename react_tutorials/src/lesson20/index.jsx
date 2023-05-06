import { BrowserRouter } from "react-router-dom";
import Root from "./root";

/*
	Switch => Routes
	useHistory, useLocation => useNavigate
	Redirect => Navigate
	Route[component] => Route[element]
	NavLink[activeStyle] => NavLink[style={() => }]
	Outlet
	PriveRoute
*/

const Lesson20 = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
};
export default Lesson20;
