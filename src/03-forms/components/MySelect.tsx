// Es casi idéntico a MyTextInput

import { ErrorMessage, useField } from "formik"

interface Props {   // interfase para definir los tipos para las props que recibe el commponente
    label: string;
    name:  string;
    placeholder?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]:any; // esto es un comodin que indica que puedo recibir cualquier cantidad de parametros
}

export const MySelect = ( { label, ...props }: Props ) => {

    const [ field ] = useField( props) // (2)

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label> 
            <select { ...field } { ...props} /> 
            <ErrorMessage name={ props.name } component="span" className="custom-span-error-class" /> 
        </>
    )
}

/*
 <ErrorMessage name={ props.name } component="span" className="custom-span-error-class" /> 
 component es para indicar que quiero que lo muestre como un span y tambien le puedo 
 asignar una clase cs para darle un estilo si no es que ya tengo un estilo general para los span
*/
