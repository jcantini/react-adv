// Archivo de definición de las rutas de la app

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, 
         FormikAbstractation, RegisterFormikPage, MuiFormik } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter >
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React Logo" />
                <h4>Different tools for React Forms</h4>
                <ul>
                    <li>
                        <NavLink to='/register' className={ ({ isActive }) => isActive? 'nav-active': '' }>Register React Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-basic' className={ ({ isActive }) => isActive? 'nav-active': '' }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-yup' className={ ({ isActive }) => isActive? 'nav-active': '' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-components' className={ ({ isActive }) => isActive? 'nav-active': '' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-abstractation' className={ ({ isActive }) => isActive? 'nav-active': '' }>Formik Abstractation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-register' className={ ({ isActive }) => isActive? 'nav-active': '' }>Register Formik Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-mui' className={ ({ isActive }) => isActive? 'nav-active': '' }>Formik + MUI</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='register' element={<RegisterPage/> } />
                <Route path='formik-basic/' element={ <FormikBasicPage/> } />
                <Route path='formik-yup/' element={ <FormikYupPage/> } />
                <Route path='formik-components/' element={ <FormikComponents/> } />
                <Route path='formik-abstractation/' element={ <FormikAbstractation/> } />
                <Route path='formik-register/' element={ <RegisterFormikPage/> } />
                <Route path='formik-mui' element={<MuiFormik/> } />
                <Route path='/*' element={<Navigate to='/home' /> } />  {/* Si viene cualquier otra ruta  */}
            </Routes>
        </div>
    </BrowserRouter >

  )
}

/*
En Navlink muestro como si esa ruta esta activa le coloco una clase que quiero que se aplique sino le paso ''
para esto desestructuro el argumento isActive de las props.
*/
