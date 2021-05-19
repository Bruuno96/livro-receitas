import React from 'react'
import { AvatarButton } from '../components/AvatarButton';

import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <img src="assets/logo.svg" alt="Logo" />
            <h5>
                Dashboard/
                <span>Administrador</span>
            </h5>
            <AvatarButton />
        </nav>
    )
}
