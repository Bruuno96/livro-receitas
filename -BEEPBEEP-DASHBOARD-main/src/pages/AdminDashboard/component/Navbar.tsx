import React from 'react'
import { AvatarButton } from '../../../components/AvatarButton';
import { Route } from 'react-router-dom';
import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <img src="assets/logo.svg" alt="Logo" />
            <h5>
            Administrador/
            <a href="/admin"  >Dashboard</a> 
            </h5>
            <AvatarButton />
        </nav>
    )
}
