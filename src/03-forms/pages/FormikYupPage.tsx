// Formulario usando Formik. Para las validaciones voy a usar un validation schema builder 
// que me permite reducir las validaciones en el propio form para hacerlo más legible. Uso Yup. 

import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const { 
        handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
            lastName:  Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
            email:     Yup.string().email('Formato inválido de mail').required('Requerido'),
        })
    });

  return (
    <div>
        <h1>Formik + Yup</h1>

        <form onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input type="text" { ...getFieldProps('firstName')} />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" { ...getFieldProps('lastName')} />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email Address</label>
            <input type="email" { ...getFieldProps('email')} />
            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type='submit'>Submit</button>
            <br/>
            <h4>This form uses Formik with the custom hook useFormik and Yup to create a validation schema for field validation.
                Field validation is also triggered when the form is submited.
            </h4>
        </form>
    </div>
  )
}

/*
getFieldProps me evita tener que definirle a cada campo el onBlur, name, value. Me permite desestructurar de 
getFieldProps y le mando el nombre del campo y solo me establece el name y le agrega el onBlur y el onChange.

touched me indica si el campo fue tocado para que en ese caso si tiene error se muestre el mensaje de errores.
Para que funcione tengo que usarlo en conjunto con la funcion onBlur que detecta el ingreso y salida de un campo y
al evento onBlur le asigno la función handleBlur de Formik
*/


