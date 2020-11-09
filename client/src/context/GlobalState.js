import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
const initialState = {
	todos: [],
	error: null,
	loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// Provider component - to let child components use the state
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions

	// get all todos from database
	async function getTodos() {
		try {
			const res = await axios.get('/todos');

			// dispatch type to reducer
			dispatch({
				type: 'GET_TODOS',
				payload: res.data
			});
		} catch (err) {
			// dispatch type error to reducer
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response
			});
		}
	}

	// add todo to database
	async function addTodo(newTodo) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post('/todos', newTodo, config);
			dispatch({
				type: 'ADD_TODO',
				payload: res.data
			});
		} catch (err) {
			// dispatch type error to reducer
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response
			});
		}
	}

	// delete todo from database
	async function deleteTodo(id) {
		try {
			await axios.delete(`/todos/${id}`);

			dispatch({
				type: 'DELETE_TODO',
				payload: id
			});
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				todos: state.todos,
				error: state.error,
				loading: state.loading,
				getTodos,
				addTodo,
				deleteTodo
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
