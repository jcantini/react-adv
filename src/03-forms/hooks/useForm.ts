import { ChangeEvent, useState } from "react";

export const useForm = <T>( initState: T) => {
    
    const [ formData, setFormData] = useState( initState )
    const [ inputFocus,  setInputFocus ]   = useState(false);

    const onChange = ( event: ChangeEvent<HTMLInputElement>) => {
        setFormData( {
            ...formData,
            [ event.target.name ] : event.target.value
        })
    };

    const resetForm = () => {
        setFormData( initState )
    };

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        // Properties
        formData,
        ...formData, // devuelvo todos los campor desestructurados
        inputFocus,

        // Methods
        isValidEmail,
        onChange,
        resetForm,
        setInputFocus
    }
}

/*
<T> Como no se que info me viene para no poner any que es cualquier cosa, tomo algo genérico que 
llamo <T?
Lo que digo es que mi hook es genérico y recibe algo de tipo T por lo que initState que lo recibo
 es de tipo T

*/