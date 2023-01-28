import { useState } from "react";

export const useForm = (initialForm = {}) => {
    //formState ahora es igual a lo que sea que mande como argumento
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            //propiedad computada de objeto JS
            [name]: value
        });
    };
    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
};
