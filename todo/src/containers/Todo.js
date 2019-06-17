import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../store/actions";
import "./Todo.scss";

class Todo extends Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <h3
        className={`todo${this.props.todo.completed ? " completed" : ""}`}
        onClick={() => this.toggleTodo(this.props.todo.id)}
      >
          {console.log(this.props.todo)}
        {this.props.todo.task}
      </h3>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo);
