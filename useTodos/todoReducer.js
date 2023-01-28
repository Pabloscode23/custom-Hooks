export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO]Add Todo': //devuelve [] porque initialState =[]
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                //siempre se retorna un estado
                //uso map para que genere arreglo nuevo, no muta
                if (todo.id === action.payload)
                //si el id es igual a mi accion
                {
                    return {
                        ...todo,
                        done: !todo.done
                        //indiferentemente de cual era el done
                    }
                }
                return todo
            });
        default:
            return initialState;
    }
}

