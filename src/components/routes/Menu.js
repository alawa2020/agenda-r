import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/auth';
import { useHistory } from 'react-router-dom';

const Menu = () => {

    useEffect(() => {
        auth.onAuthStateChanged(
            user => {
                if(user){
                    setUser(user.email);
                }
            }
        )
    }, []);

    const [user, setUser] = useState(null);
    const historial = useHistory();

    const onClickLogoutUser = () => {
        auth.signOut();
        setUser(null);
        historial.push('/login');

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <ul className="navbar-nav">
                        <Link
                                className="navbar-brand text-primary"
                                to="/"
                                aria-current="page"
                            > Agenda </Link>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-primary"
                                to="/"
                                aria-current="page"
                            > Home </Link>
                        </li>
                        <li className="nav-item">
                            {
                                (user)?
                                (
                                    <Link
                                        className="nav-link text-primary"
                                        to="/agenda"
                                        aria-current="page"
                                    > Contactos </Link> 
                                ):(<span></span>)
                            }
                        </li>
                        <li className="nav-item">
                            {
                                (!user)?
                                (
                                    <Link
                                        className="nav-link text-primary"
                                        to="/login"
                                        aria-current="page"
                                    > Login </Link>
                                ):(<span></span>)
                            }
                        </li>
                    </ul>

                </div>
                {
                (user != null)?
                (
                    <button 
                        className="btn btn-dark text-danger"   
                        type="button"
                        onClick={onClickLogoutUser}
                    >Cerrar Sesión</button>
                ):
                (<span></span>)
                
                }
            </nav>
        </>
    )
}

export default Menu;
