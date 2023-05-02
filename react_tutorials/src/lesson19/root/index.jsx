import Navbar from "../components/navbar/index";
import Home from "../components/home/index";
import Elements from "../components/elements/index";
import Pages from "../components/pages/index";
import Templates from "../components/templates/index";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  console.log(query.get("name"));

  // useEffect(() => {
  //   history.push("/home");
  // }, []);

  return (
    <div>
      <h4>We are currently here: {location.pathname}</h4>
      <Switch>
        <Route exact path={"/"} />
        <Route path={"/home"} component={Navbar} />
        <Route path={"/templates"} component={Navbar} />
        <Route path={"/pages"} component={Navbar} />
        <Route path={"/elements"} component={Navbar} />
      </Switch>
      <button onClick={() => history.goBack()}>Go back</button>
      <button onClick={() => history.goForward()}>Go forward</button>
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/templates"} component={Templates} />
        <Route path={"/pages"} component={Pages} />
        <Route path={"/elements"} component={Elements} />
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Route path={"*"}>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Root;
