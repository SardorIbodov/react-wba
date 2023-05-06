import Home from "../components/home";
import About from "../components/about";
import Contacts from "../components/contacts";
import Signin from "../components/singin";

export const navbar = [
  { id: 1, title: "Home", url: "/home", element: <Home /> },
  { id: 2, title: "About", url: "/about", element: <About /> },
  { id: 3, title: "Contact", url: "/contacts", element: <Contacts /> },
  { id: 4, title: "Sign in", url: "/signin", element: <Signin /> },
];
