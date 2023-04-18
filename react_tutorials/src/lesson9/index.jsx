import React from "react";

export class Lesson9 extends React.Component {
  constructor() {
    // runs first
    super();
    console.log("constructor");
    this.state = {
      count: 1,
    };
    // this.plus = this.plus.bind(this);
  }

  componentWillMount() {
    // runs after constructor
    console.log("componentWillMount");
  }

  componentDidMount() {
    // runs after first render
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // runs when component receive new props
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    // controls the process of updata
    console.log("shouldComponentUpdate");
    // console.log(this.state.count);
    return true;
  }

  componentWillUpdate() {
    // runs after receiving props and before render
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    // runs after render, after DOM elements created
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // runs after DOM element removed
    console.log("componentWillUnmount");
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // runs after componentWillMount
    console.log("render");
    return (
      <h1>
        Lifecycle methods - {this.state.count}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button> */}
        {/* <button onClick={this.plus.bind(this)}>Click me</button> */}
        {/* <button onClick={this.plus}>Click me</button> */}
        {/* <button onClick={() => this.plus()}>Click me</button> */}
      </h1>
    );
  }
}

// 1 - Constructor
// 2 - ComponentWillMount
// 3 - Render
// 4 - ComponentDidMount
// 5 - ComponentWillUnmount