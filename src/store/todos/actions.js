export const INIT_TODO = 'INIT_TODO';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_FILTER = 'UPDATE_FILTER';

// Set initial todos list when page load
export const initTodo = (todos) => ({
    type: INIT_TODO,
    payload: todos,
})

// Adding the new todo to the list
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

// Move the todo to `Done` status
export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: { index },
});

// Delete todo from the list
export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: { index }
})

// Update the filters state values
export const updateFilter = (filter) => ({
    type: UPDATE_FILTER,
    payload: filter,
});