# TITLE

\*\*[NETLIFY DEPLOYMENT](https://5d0c1aeb7326da0007ae0e4c--nifty-allen-1d6e8d.netlify.com/)

## Topics Covered

- Redux
- mapStateToProps
- Actions
- Reducers

## The Application

CRUD Functionality covered:

### Create

**Action**

```
export const ADD_TODO = "ADD_TODO";
  export const addTodo = todo => {
    return {
      type: ADD_TODO,
      newTodo: todo
      };
    };
```

**Reducer**

```
case actionTypes.ADD_TODO:
  const newTodoArr = [
    ...state.todos,
    { task: action.newTodo, id: Date.now(), completed: false } ]; localStorage.setItem('todos', JSON.stringify(newTodoArr));
    return { ...state, todos: newTodoArr };
```

### Read

### Delete
