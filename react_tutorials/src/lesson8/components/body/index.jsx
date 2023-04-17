import React from "react";
import { Container } from "./style";
import { data } from "../mock/data";

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: data,
    };
    this.props.getData(this.state.student);
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.student.filter((value) => id !== value.id);
      this.setState({ student: res });
      this.props.getData(res);
    };

    return (
      <Container>
        <h1>Student List:{this.state.student.length}</h1>
        {this.state.student.map((value) => {
          return (
            <h2>
              {value.id} - {value.name}
              <button onClick={() => onDelete(value.id)}>Delete</button>
            </h2>
          );
        })}
      </Container>
    );
  }
}
