import { Container, Link } from "./style";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Link exact to={"/"}>
          Logo
        </Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/pages"}>Pages</Link>
        <Link to={"/elements"}>Elements</Link>
      </Container>
    </div>
  );
};

export default Navbar;
