import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(current => counter + value)
    }
    const decrement = (value = 1) => {
        if (counter === 0) return; //si es igual no hace nada
        setCounter(current => counter - value)
    }
    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
