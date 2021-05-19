import React from 'react'

import "./InfoCard.css";

import { BookmarkX } from 'react-bootstrap-icons';

interface InfoProps {
    title: string;
    icon: string;
    quantity: number;
    url: string;
}

export function InfoCard({
    title,
    icon,
    quantity,
    url,
}: InfoProps) {
    return (
        <div className="info-card-container">
            <span>{ title }</span>
            <div>
                <img src={ icon } alt={ `Imagem ${ title }` } />
                <h1>{ quantity }</h1>
            </div>

            <a href={ url }>Ver mais</a>
        </div>
    )
}
