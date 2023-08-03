// Formulario usando Formik

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

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
           { () => ( 
                    <Form>
                        <MyTextInput 
                            label="First Name" 
                            name="firstName"
                            placeholder="First name"
                        />

                        <MyTextInput 
                            label="Last Name" 
                            name="lastName"
                            placeholder="Last name"
                        />

                        <MyTextInput 
                            label="Email" 
                            name="email"
                            placeholder="mail@gmail.com"
                        />

                        <MySelect label={'Job Type'} name={'jobType'}>
                            <option value="">Select an option</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label={'Terms & conditions'} name={'terms'} />
 
                        <button type='submit'>Submit</button>
                        <br/>
                        <h4>To further simplify the form Formik with formik components, I have created abstract components 
                            for Input, Select and Checkbox fields so they can be reused in other forms.
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


