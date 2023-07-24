// Archivo de definición de las rutas de la app

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter >
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React Logo" />

                <ul>
                    <li>
                        <NavLink to='/home' className={ ({ isActive }) => isActive? 'nav-active': '' }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={ ({ isActive }) => isActive? 'nav-active': '' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={ ({ isActive }) => isActive? 'nav-active': '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='about/' element={ <h1>About Page</h1> } />
                <Route path='users' element={<h1>Users Page</h1> } />
                <Route path='home' element={<h1>Home Page</h1> } />
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
