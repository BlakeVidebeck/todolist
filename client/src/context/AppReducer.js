// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case 'GET_TODOS':
			return {
				...state,
				loading: false,
				todos: action.payload
			};
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo._id !== action.payload)
			};
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
