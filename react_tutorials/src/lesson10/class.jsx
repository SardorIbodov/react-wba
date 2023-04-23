import React from "react";
import "./style.css";

export class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  sayHello() {
    console.log("Hello from Class");
  }

  render() {
    return (
      <div
        onClick={this.sayHello}
        style={{ border: "2px solid red", cursor: "pointer" }}
      >
        <h1>Class Component</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
