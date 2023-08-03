// Formulario usando componentes de Formik:
// Field, Form, ErrorMessage 

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

   
  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues= {{ // La 1er llave indica que le paso una expresion y la 2da xq es un objeto
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit= { ( values ) => {
                console.log(values)
            }}
            validationSchema= { Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                    lastName:  Yup.string()
                                .max(10, 'Must be 10 characters or less')
                                .required('Required'),
                    email:     Yup.string().email('Formato inválido de mail').required('Required'),
                    terms:   Yup.boolean()  // Un valor booleano que solo puede ser true
                                .oneOf([true], 'Must accept conditions'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'This option is not allowed')
                                .required('Required')
                }) 
            }
        >
           { () => (   // Lo estoy pasando como un child 
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" placeholder="First Name"/>
                        <ErrorMessage name="firstName" component="span" /> 

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="text"/>
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Select an option</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label> 
                            <Field name="terms" type="checkbox"/> {/* 1 */}
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />


                        <button type='submit'>Submit</button>
                        <br/>
                        <h4>This form uses Formik components instead of the custom hook useFormik. 
                            Yup is also used to create a validation schema for field validation.
                            Field validation is also triggered when the form is submited.
                        </h4>
                    </Form>
                )
            }
            
        </Formik>

        
    </div>
  )
}

/*
Formik a su vez es un componente que recibe props y retorna un jsx o sea un componente. Lo que hago es
que en lugar de usar el useFormik coloco las propiedades de useFormik directamente en el objeto de Formik. 
Esto me ayuda a evitar el custom hook useFormik con todas sus propiedades.

ErrorMessage, con la propiedad component le indico el mensaje de error en que tipo de component quiero que 
me lo renderice porque si no lo pone como un simple text sin formato y en este caso al span le tengo aplicado
un estilo para que se muestre en rojo.s

1. En este caso el field lo puse dentro del label para que tambien pueda dar click sobre el texto del label y 
que marque el checkbox. Para ue funcione hay que quitarle htmlFor="terms"

*/


