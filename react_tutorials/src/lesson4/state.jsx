import React from "react";
import { students } from "./mock";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      // text: "Lorem",
      // name: "Sardor",
      // surname: "Ibodov",
      users: students,
    };
  }
  render() {
    const { text, name, surname, users } = this.state;

    // const type = (e) => {
    //   this.setState({ text: e.target.value });
    // };

    // const changeText = (e) => {
    //   this.setState({ [e.target.name]: e.target.value });
    // };

    const filterStudent = (e) => {
      let data = students.filter((student) =>
        student.name.includes(e.target.value)
      );
      this.setState({ users: data });
    };

    return (
      <div>
        <h1>State | Advanced</h1>
        {/* <h2>{text}</h2>
        <input type="text" onChange={type} placeholder="Without parameters" />
        <br />
        <input
          type="text"
          onChange={(event) => type(event)}
          placeholder="With parameters"
        /> */}

        {/* <h2>name: {name}</h2>
				<input type="text" name="name" placeholder="name" onChange={changeText}/>
				<h2>surname: {surname}</h2>
				<input type="text" name="surname" placeholder="surname" onChange={changeText}/> */}

        <input
          onChange={filterStudent}
          type="text"
          placeholder="Type to search"
        />
        {users.map(({ id, name, field }) => {
          return (
            <h1>
              {id}. {name} | {field}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default State;
