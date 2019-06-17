import * as actionTypes from "../actions";

const initialState = {
  todos: []
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
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
        })
      }
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
