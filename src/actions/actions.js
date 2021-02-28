import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, CLEAR_TODOS, HIDE_LOADER } from './types';
import axios from 'axios';



export const getTodos = () => {
    return async dispatch => {
        const todos = await axios.get("https://todo.eachbase.com/api/HaykHovsepyan/todos")
            .then(res =>
                res.data
            );
        dispatch({
            type: GET_TODOS,
            todos: todos
        })
        dispatch({
            type: HIDE_LOADER
        })
    };
}

export const addTodo = (data) => {
    return dispatch => {
        axios.post('https://todo.eachbase.com/api/HaykHovsepyan/todos', data).then(res =>
            dispatch({
                type: ADD_TODO,
                todo: res.data
            })
        );
    }
};

export const editTodo = (data, id) => {
    return dispatch => {
        axios.patch(`https://todo.eachbase.com/api/HaykHovsepyan/todos/${id}`, data).then(res =>
            dispatch({
                type: EDIT_TODO,
                data: res.data
            })  
        );
    }
};

export const deleteTodo = (id) => {
    return dispatch => {
        axios.delete(`https://todo.eachbase.com/api/HaykHovsepyan/todos/${id}`)
            .then(() =>
                dispatch({
                    type: DELETE_TODO,
                    id: id
                })
            )
    }
};


export const clearTodos = (todos) => {
    return dispatch => {
        dispatch({
            type: CLEAR_TODOS
        })
        if (todos && todos.length) {
            axios.all(todos.map(el => axios.delete(`https://todo.eachbase.com/api/HaykHovsepyan/todos/${el._id}`)))
        }
    }
};