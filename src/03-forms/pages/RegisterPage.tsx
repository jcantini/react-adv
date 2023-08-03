import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'


export const RegisterPage = () => {

    const { formData, onChange, resetForm, setInputFocus, isValidEmail,
            name, email, password1, password2, inputFocus  } = useForm({ 
        name: '',   // si quiero que algun campo sea opcional debo crear una interfase
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>React Basic Form</h1>
            
            <form onSubmit={ (e) => onSubmit(e)}>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={ name }
                    name='name'
                    onChange={ (e) =>onChange(e) }
                    className={`${name.trim().length <= 0 && inputFocus && 'has-error' }` }
                    onFocus={ () => setInputFocus(true) }
                />
                {name.trim().length <= 0 && inputFocus && <span>Este campo es obligatorio</span> } 

                <input 
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    name='email'
                    onChange={ onChange }
                    className={`${name.trim().length <= 0 && inputFocus && 'has-error' }` }
                    onFocus={ () => setInputFocus(true) }
                />
                {email.trim().length <= 0 && inputFocus && <span>Este campo es obligatorio</span> } 
                {!isValidEmail( email ) && inputFocus && <span>Email invalido</span> } 

                <input 
                    type="password" 
                    placeholder="Password"
                    value = { password1 }
                    name='password1'
                    onChange={ onChange }
                    className={`${name.trim().length <= 0 && inputFocus && 'has-error' }` }
                    onFocus={ () => setInputFocus(true) }
                />
                {password1.trim().length < 6 && inputFocus && <span>Se requiere míimo de 6 caracteres</span> } 

                <input 
                    type="password" 
                    placeholder="Repeat Password"
                    value={ password2 }
                    name='password2'
                    onChange={ onChange }
                    className={`${name.trim().length <= 0 && inputFocus && 'has-error' }` }
                    onFocus={ () => setInputFocus(true) }
                />
                {password2.trim().length < 6 && inputFocus && <span>Se requiere mínimo de 6 caracteres</span> } 
                {password1 !== password2 && inputFocus && <span>Las claves no coinciden</span> } 

                <button type='submit'>Create</button>

                <button type='button' onClick={ resetForm }>Reset From</button>
                <br/>
                <h4>This form uses React basic form components and implements field validations. The form use a custom hook useForm hook to handle the state and methods.
                    Create button doesn't check validations.
                </h4>
            </form>
        </div>
    )
}

/*
onChange={ (e) =>onChange(e) }lo escribo de esta manera solo para poner el cursor sobre el evento y que 
me muestre de que tipo es para poder ponerselo a la funcion onChange y asi obtengo la ayuda en el tipado
*/