import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.scss";
import { addTodo } from "./store/actions";

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

  render() {
    return (
      <div className="App">
        <form>
          <input
            name="newTodo"
            placeholder="Add new todo"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
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
