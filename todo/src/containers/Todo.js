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
      <div
        className={`todo${this.props.todo.completed ? " completed" : ""}`}
        onClick={this.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.task}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
