import * as actionTypes from "../actions";

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodoArr = [
        ...state.todos,
        { task: action.newTodo, id: Date.now(), completed: false }
      ];
      localStorage.setItem('todos', JSON.stringify(newTodoArr));
      return {
        ...state,
        todos: newTodoArr
      };

    case actionTypes.TOGGLE_TODO:
      const toggledList = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(toggledList));
      return {
        ...state,
        todos: toggledList,
      };

    case actionTypes.DELETE_TODO:
      const filteredList = state.todos.filter(todo => todo.id !== action.id);
      localStorage.setItem('todos', JSON.stringify(filteredList));
      return {
        ...state,
        todos: filteredList
      };
    default:
      return state;
  }
};

export default rootReducer;
