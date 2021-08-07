import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
                            <Link
                                className="nav-link text-primary"
                                to="/agenda"
                                aria-current="page"
                            > Contactos </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-primary"
                                to="/login"
                                aria-current="page"
                            > Login </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Menu;
