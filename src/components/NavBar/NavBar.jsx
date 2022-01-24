import React from 'react';

import CartWidget from '../CartWidget/CartWidget';

import {Link, NavLink} from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Autos Safatle</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vehículos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to={"/categoria/0km"}>0 km</Link></li>
                                <li><Link className="dropdown-item" to={"/categoria/usado"}>Usados</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"*"}>Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;