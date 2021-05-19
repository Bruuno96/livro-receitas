import React from 'react'
import { AvatarButton } from './buttonLogin/ButtonLogin';

import "./Navbar.css";

interface AvatarProps{
    functionButton: () => void;
}

export function Navbar({functionButton}: AvatarProps) {
    return (
        <nav className="navbar-container">
            <img src="assets/logo.svg" alt="Logo" />
            <AvatarButton functionButton={functionButton} />
        </nav>
    )
}
