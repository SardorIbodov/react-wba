import React from "react";
import "./style.css";
import { H1, Image, Container, Box, SmallBox } from "./style.js";

export class Lesson6 extends React.Component {
  render() {
    return (
      <Container>
        {/* <h1>Styled Components</h1>
				<h2 className="subtitle">Subtitle</h2>
        <H1>Styled Components</H1>
        <Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8e9d2c8a-52c9-43c0-b727-6fca823f4931/liverpool-fc-2021-22-stadium-home-mens-soccer-jersey-tR8vRS.png" /> */}

        {/* <Box>Large box 200px</Box>
        <SmallBox>Small box 100px</SmallBox> */}

        {/* <Box large>Large box 200px</Box>
        <Box>Small box 100px</Box> */}

				<Box type="Large">Large Box 200px</Box>
				<Box type="Medium">Medium Box 150px</Box>
				<Box type="Small">Small Box 100px</Box>
				<Box>Default Box 150px</Box>
      </Container>
    );
  }
}
