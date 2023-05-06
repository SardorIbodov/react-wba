import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "coral" : "white")};
  font-weight: 600;
  font-size: 24px;
`;

export const Nav = styled.nav`
  min-height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
