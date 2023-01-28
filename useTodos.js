import { useEffect, useReducer } from "react"
import { todoReducer } from "../07-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    //return y si es null, retorne []
}
export const useTodos = () => {

    const [state, dispatch] = useReducer(todoReducer,
        [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
        //loclStorage guarda strings
    }, [state])

    //todoReducer (state, action)
    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO]Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };
    return {
        state,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        allTodos: state.length,
        pendingTodos: state.filter(todo => !todo.done).length,
    }
}

