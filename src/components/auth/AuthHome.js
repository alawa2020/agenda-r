import React, { useState } from 'react'

import Login from './Login';
import Register from './Register';
const AuthHome = () => {

    const [viewLogin, setViewLogin] = useState(true);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a 
                    onClick={()=>setViewLogin(true)}
                    className="nav-link text-success"
                    style={{cursor:"pointer"}}
                    >Iniciar Sesión</a>
                <a 
                    onClick={()=>setViewLogin(false)}
                    className="nav-link text-secondary"
                    style={{cursor:"pointer"}}
                    >Registrar</a>
            </nav>
            
            {
                (viewLogin) ?
                    (
                        <Login />
                    ) :
                    (
                        <Register setViewLogin={setViewLogin}/>
                    )
            }
        </>
    )
}

export default AuthHome
