import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'


export const RegisterPage = () => {

    const { formData, onChange,resetForm, isValidEmail,
            name, email, password1, password2  } = useForm({ 
        name: '',       // si quiero que algun campo sea opcional debo crear una interfase
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
        <h1>Register Page</h1>
        <form onSubmit={ (e) => onSubmit(e)}>
            <input 
                type="text" 
                placeholder="Name"
                value={ name }
                name='name'
                onChange={ (e) =>onChange(e) }
                className={`${name.trim().length <= 0 && 'has-error' }` }
            />
            {name.trim().length <= 0 && <span>Este campo es obligatorio</span> } 

            <input 
                type="email" 
                placeholder="Email"
                value={ email }
                name='email'
                onChange={ onChange }
                className={`${name.trim().length <= 0 && 'has-error' }` }
            />
            {email.trim().length <= 0 && <span>Este campo es obligatorio</span> } 
            {!isValidEmail( email ) && <span>Email invalido</span> } 

            <input 
                type="password" 
                placeholder="Password"
                value = { password1 }
                name='password1'
                onChange={ onChange }
                className={`${name.trim().length <= 0 && 'has-error' }` }
            />
            {password1.trim().length < 6 && <span>Se requiere míimo de 6 caracteres</span> } 

            <input 
                type="password" 
                placeholder="Repeat Password"
                value={ password2 }
                name='password2'
                onChange={ onChange }
                className={`${name.trim().length <= 0 && 'has-error' }` }
            />
            {password2.trim().length < 6 && <span>Se requiere mínimo de 6 caracteres</span> } 
            {password1 !== password2 && <span>Las claves no coinciden</span> } 

            <button type='submit'>Create</button>

            <button type='button' onClick={ resetForm }>Reset From</button>
        </form>
        </div>
    )
}

/*
onChange={ (e) =>onChange(e) }lo escribo de esta manera solo para poner el cursor sobre el evento y que 
me muestre de que tipo es para poder ponerselo a la funcion onChange y asi obtengo la ayuda en el tipado
*/