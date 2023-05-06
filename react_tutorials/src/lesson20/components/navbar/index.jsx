import { Outlet } from "react-router-dom";
import { Container, Nav, Link } from "./style";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const active = (path) => path === window.location.pathname;

  return (
    <Container>
      <Nav>
        {navbar.map((item) => {
          return (
            <Link active={active(item.url)} to={item.url} key={item.id}>
              {item.title}
            </Link>
          );
        })}
      </Nav>
      <Outlet />
    </Container>
  );
};
export default Navbar;
