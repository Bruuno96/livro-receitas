import React from 'react'
import { AvatarButton } from '../../../components/AvatarButton';

import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <img src="assets/logo.svg" alt="Logo" />
            <h5>
            Administrador/
                <a href="/admin">Dashboard</a>
                /Veiculos ON-LINE
            </h5>
            <AvatarButton />
        </nav>
    )
}
