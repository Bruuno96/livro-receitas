import React from 'react'

import "./ButtonLogin.css";

interface ButtonProps{
    functionButton: () => void;
}

export function AvatarButton({functionButton}:ButtonProps) {
    return (
    <button onClick={functionButton}>
        <div className="logar" /> 
        <span  className="textLogin" >LOGIN</span>
        <div className="logar" />           
    </button>
    )
}
