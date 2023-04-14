import React from "react";
import { Container, Button, ActiveButton, Rotate } from "./style.js";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.cl};

	}
`;

export class Lesson7 extends React.Component {
  state = {
    light: false,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };

    const changeTheme = () => {
      this.setState({ light: !this.state.light });
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <h1>Lesson7</h1>
          <Button>Click me</Button>
          <ActiveButton>Click me</ActiveButton>
          <Rotate>Rotating</Rotate>
          <button onClick={changeTheme}>Change theme</button>
        </Container>
      </ThemeProvider>
    );
  }
}
