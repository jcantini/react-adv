// Este es mi Formik Input Custom Hook

import { useField } from "formik"

interface Props {   // interfase para definir los tipos para las props que recibe el commponente
    label: string;
    name:  string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]:any; // esto es un comodin que indica que puedo recibir cualquier cantidad de parametros
}

export const MyCheckbox = ( { label, ...props }: Props ) => { // (1)

    const [ field, meta ] = useField({ ...props, type: "checkbox" }); // (2)
   // console.log(field) 
    return (
        <>
            <label> 
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label> {/* 3 */}
            {
                meta.touched && meta.error && ( // (5)
                    <span className="error">{ meta.error }</span>
                )
            }
        </>
    )
}

/*

Formik ofrece la posibilidad de acceder al contexto de Formix que es creado cusndo uso el 
objeto < Formix> (que tengo en FormikAbstraction.tsx) Al acceder al contexto, me puedo traer 
todas las propiedades como onblur, onchange, value, etc y las puedo extraer muy facil usando 
un custom hook de Formik que se llama useField. Este Hook recibe las props que se le pasan
a este componente MyTextInput cuando es llamado.

(1)
{ label, ...props } desestructuro label y dejo el resto de las props sin dessestructurar.

(2)
Tomo las props que recibe el componente y desestructuro en el field y en la meta data del field. 
Esta meta data es la que me indica si fue tocado, si tiene errores, etc.
Haciendo el console.log veo que me trae el name, valu, obBlur y onChange

(3)
<label htmlFor={ props.id || props.name }>{ label }</label> el id puede ser que lo reciba o no éro 
el name viene si o si porque no está como opcional en la interfase
htmlFor establece o devuelve el valor del atributo for de una etiqueta.
El atributo for especifica a qué elemento de formulario está vinculada una etiqueta.
Generalmente se asocia al id o al name del campo asociado.

(4)
Desestructuro todo lo que viene en field y tambien puedo desestructurar las props adicinales que vienen
como por ej placeholder. De esta manera queda bien flexible

(5)
Para los errores, puedo verificar usando meta, si fue tocado y si ademas tiene algun error y en este
caso indico lo que quiero mostrar.

La clase text-input no está pero la puedo agregarla para personalizar el estilo


*/
 