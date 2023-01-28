import { useEffect, useState } from "react"
export const useFetch = (url) => {
    const [state, setState] = useState({

        data: null,
        isLoading: true,
        hasError: null

    });
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
        console.log(data);
    }
    //no puedo poner useEffect como async porque retornaria una promesa
    useEffect(() => {

        getFetch();
    }, [url]) //cada que el url cambia, se lanza el useEffect
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

