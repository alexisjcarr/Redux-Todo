import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.scss";
import { addTodo } from "./store/actions";
import TodoList from "./containers/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos}/>
        <form onSubmit={this.addTodo}>
          <input
            name="newTodo"
            placeholder="Add new todo"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
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
  { addTodo }
)(App);

