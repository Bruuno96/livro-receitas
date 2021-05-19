import React from 'react'
import { Link } from 'react-router-dom';

import { BookmarkX } from 'react-bootstrap-icons';
import Logo from '../../../../assets/Group2.png';
import Lock from '../../../../assets/https_24px.png';
import Email from '../../../../assets/local_post_office_24px.png';
import "./ModalLogin.css";


interface LoginProps {
    title?: string;
    icon?: string;
    quantity?: number;
    url?: string;
    functionCloseModal: any;
}

export default function LoginModal({
    title,
    icon,
    quantity,
    url,
    functionCloseModal
}: LoginProps) {
    function CloseModal(event:any){
        event.target.id === 'container-modal' && functionCloseModal(false)
    }

    return (
        <div id='container-modal' onClick={CloseModal} className="container-modal">
            <div className="container">
                <img src={Logo}/>
                <h1 className="title" >LOGIN</h1>

                <label className='label-form'>Nome ou Email do Usuario</label>
                <div className='Container-input'>
                    <div className="IconForm">
                        <img src={Lock} alt="" />
                    </div>
                    <input className="InputForm" type="email" placeholder="Email@gmail" />
                </div>

                <label className='label-form'>Senha</label>
                <div className='Container-input'>
                    <div className="IconForm">
                        <img src={Email} />
                    </div>
                    <input className="InputForm" type="password" />
                </div>
                <Link to= "/admin">
                <button className="btn">Entrar</button>
                </Link>
            </div>
        </div>
    )
}
