import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <ul className="navbar-nav">
                        <Link
                                className="navbar-brand"
                                to="/"
                                aria-current="page"
                            > Agenda </Link>
                        <li className="nav-item">
                            <Link
                                className="nav-link "
                                to="/"
                                aria-current="page"
                            > Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link "
                                to="/agenda"
                                aria-current="page"
                            > Contactos </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link "
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
