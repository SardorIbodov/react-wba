import React from "react";
import { Container, Home } from "./style";

export class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Home>Home {this.props.data?.length || 0}</Home>
        <Home>About</Home>
        <Home>Contact</Home>
        <Home>Info</Home>
      </Container>
    );
  }
}
