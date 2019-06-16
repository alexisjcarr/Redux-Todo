import * as actionTypes from "../actions";

const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.newTodo)
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: (state.todos[action.id].complete = !state.todos[action.id]
          .complete)
      };
    case actionTypes.DELETE_TODO:
      return {};
    default:
      return state;
  }
};

export default rootReducer;
