import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTodo, deleteTodo } from "../store/actions";
import "./Todo.scss";

class Todo extends Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <div
        className={`todo${this.props.todo.completed ? " completed" : ""}`}
        onClick={() => this.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.task}{" "}
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>delete</button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);
