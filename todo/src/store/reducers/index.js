import * as actionTypes from "../actions";

const initialState = {
  todos: [
    {
      task: "Add first todo",
      id: Date.now(),
      completed: false
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.newTodo, id: Date.now(), completed: false }
        ]
      };
    case actionTypes.TOGGLE_TODO:
      const toggleTodo = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...state,
            completed: (todo.completed = !todo.completed)
          };
        }
      });
      return toggleTodo;
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default rootReducer;
