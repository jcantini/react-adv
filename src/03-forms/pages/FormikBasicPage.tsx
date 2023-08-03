// Formulario que hace un uso básico de Formik

import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName:  string;
    email:     string;
}

export const FormikBasicPage = () => {

    const validate = ( values: FormValues ) => {
        const errors:FormikErrors<FormValues> = {};
        if ( !values.firstName ) {
            errors.firstName = 'Required';
        } else if ( values.firstName.length > 15 ) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if ( !values.lastName ) {
            errors.lastName = 'Required';
        } else if ( values.lastName.length > 10 ) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate // es lo mismo que poner validate: validate
    });

  return (
    <div>
        <h1>Formik Basic Form</h1>

        <form onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                name='firstName'
                onBlur={ handleBlur }
                onChange={ handleChange}
                value={ values.firstName }
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name='lastName'
                onBlur={ handleBlur }
                onChange={ handleChange}
                value={ values.lastName }
            />
             { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email Address</label>
            <input 
                type="email"
                name='email'
                onBlur={ handleBlur }
                onChange={ handleChange}
                value={ values.email }
            />
             { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type='submit'>Submit</button>
            <br/>
            <h4>This form uses Formik in a basic way. 
                It implements the custom hook useFormik and a validate function for field validation.
                Field validation is also triggered when the form is submited.
            </h4>
        </form>
    </div>
  )
}

/*
La interface la necesito porque cuando defino la constante con la funcion validate, como esta función 
está fuera del useFormik, no se sabe que tipo tienen los values. Si la función velidate la pongo 
directamente dentro del useFormik no sería necesario y no la pongo ahi porque con las validaciones queda 
un poco larga y queda más prolijo escribirla afuera y directamente se la paso.

touched me indica si el campo fue tocado para que en ese caso si tiene error se muestre el mensaje de errores.
Para que funcione tengo que usarlo en conjunto con la funcion onBlur que detecta el ingreso y salida de un 
campo y al evento onBlur le asigno la función handleBlur de Formik
*/


