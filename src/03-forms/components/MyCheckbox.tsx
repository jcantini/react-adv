// Este es mi Formik Input Custom Hook

import { ErrorMessage, useField } from "formik"

interface Props {   // interfase para definir los tipos para las props que recibe el commponente
    label: string;
    name:  string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]:any; // esto es un comodin que indica que puedo recibir cualquier cantidad de parametros
}

export const MyCheckbox = ( { label, ...props }: Props ) => {

    const [ field ] = useField({ ...props, type: "checkbox" });
   
    return (
        <>
            <label> 
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label> {/* 3 */}
            <ErrorMessage name={ props.name } component="span" className="custom-span-error-class" />
        </>
    )
}

/*



*/
 