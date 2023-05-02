import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  min-height: 60px;
  display: flex;
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Link = styled(NavLink).attrs(() => {
  return { activeStyle: { color: "coral" } };
})`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: coral;
  }
`;
