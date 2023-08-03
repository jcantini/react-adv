// Formulario identico a Register Page o sea un form bádico de React
// convertido a Formik con Formik Components y Abstractions

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import '../styles/styles.css';
import { MyTextInput } from '../components';


export const RegisterFormikPage = () => {
    YupPassword(Yup); // Extiendo Yup

    return (
        <div>
            <h1>Formik Basic Form</h1>
            <Formik
                initialValues= {{
                    name: '', 
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit= { ( values ) => {
                    console.log(values)
                }}
                validationSchema= { Yup.object({
                    name:       Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .min(2, 'Must be at least 2 characters')
                                .required('Required'),
                    email:      Yup.string().email('Check email format').required('Required'),
                    password1:  Yup.string().required('Password is required')
                                .min(6,'password must contain 6 or more characters with at least one of each: uppercase, lowercase, number and special')
                                .minLowercase(1, 'password must contain at least 1 lower case letter')
                                .minUppercase(1, 'password must contain at least 1 upper case letter')
                                .minNumbers(1, 'password must contain at least 1 number')
                                .minSymbols(1, 'password must contain at least 1 special character'),
                    password2:  Yup.string().required('Please re-type your password')
                    .oneOf([Yup.ref("password1")], "Passwords does not match")
    
                }) 
            }
            >
                { ( { handleReset } ) => (
                    <Form>
                        <MyTextInput
                            label="Name"
                            name="name"
                            placeholder="Name"
                        />
                        
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        
                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password" 
                            placeholder="*********"
                        />

                        <MyTextInput
                            label="Repeat Password"
                            name="password2" 
                            type="password" 
                            placeholder="*********"
                        />
                        
                        <button type='submit'>Create</button>

                        <button type='button' onClick={ handleReset }>Reset Form</button>
                        <br/>
                        <h4>The same form as Register Page but it uses Formik instead of React basic form components.
                            In this case the Create button check all validations.
                        </h4>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

/*
onChange={ (e) =>onChange(e) }lo escribo de esta manera solo para poner el cursor sobre el evento y que 
me muestre de que tipo es para poder ponerselo a la funcion onChange y asi obtengo la ayuda en el tipado
*/