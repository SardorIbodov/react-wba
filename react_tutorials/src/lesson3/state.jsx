import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, text: "" };
  }

  render() {
    let count = 0;

    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    };
    const show = (e) => {
      this.setState({ text: e.target.value });
    };
    const showGender = (e) => {
      console.log(e.target.value);
    };
    const isChecked = (e) => {
      console.log(e.target.checked);
    };

    return (
      <div>
        <h1>State: {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <br />
        <h2>{this.state.text}</h2>
        <input onChange={show} type="text" placeholder="name" />
        <br />
        <select onChange={showGender} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <br />
        <input type="checkbox" onChange={isChecked} />
      </div>
    );
  }
}

export default State;
