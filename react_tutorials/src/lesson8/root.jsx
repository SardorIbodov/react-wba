import React from "react";
import { Navbar } from "./components/navbar";
import { Body } from "./components/body";

export class Lesson8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  getData = (data) => {
    this.setState({ data });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <Navbar data={this.state.data} />
        <Body getData={this.getData} />
      </>
    );
  }
}
