import React from 'react';

import CartWidget from './CartWidget';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">Vehículos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">Accesorios</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marcas</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar;