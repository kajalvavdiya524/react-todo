import { status } from "../../config";
import { ADD_TODO, DELETE_TODO, INIT_TODO, TOGGLE_TODO, UPDATE_FILTER } from "./actions";

// Initial state values
const initialFilter = {
	enable: false,
	search: "",
	status: ""
}

const initialState = {
	todos: [],
	filter: initialFilter
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		// Set initial todos list when page load
		case INIT_TODO:
			return {
				...state,
				todos: action.payload
			}

		// Adding the new todo to the list
		case ADD_TODO:
			state.todos.unshift({
				...action.payload,
				status: status.PENDING
			})
			return { ...state }

		// Move the todo to `Done` status
		case TOGGLE_TODO:
			const toggleIndex = action.payload.index;
			const todo = state.todos[toggleIndex]

			const updatedTodos = [...state.todos.slice(0, toggleIndex), ...state.todos.slice(toggleIndex + 1)]
			updatedTodos.push({
				...todo,
				status: status.DONE
			})

			return {
				...state,
				todos: updatedTodos
			};

		// Delete todo from the list
		case DELETE_TODO:
			const deleteIndex = action.payload.index;

			return {
				...state,
				todos: state.todos.filter((_, idx) => idx !== deleteIndex)
			}

		// Update the filters state values
		case UPDATE_FILTER:
			return {
				...state,
				filter: {
					...state.filter,
					...action.payload
				}
			}

		default:
			return state;
	}
};

export default todoReducer;