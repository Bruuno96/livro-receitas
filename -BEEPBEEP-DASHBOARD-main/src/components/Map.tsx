import React from 'react'

import "./Map.css"

export function Map() {
    return (
        <div className="map-container">
            <h5>Mapa com veículos e points</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488661539!2d-46.87549743438982!3d-23.681531449872665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1620656944610!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </div>
    )
}
