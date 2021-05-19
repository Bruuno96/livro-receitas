import React from 'react'

import "./AvatarButton.css";
import { ChevronDown } from 'react-bootstrap-icons';

export function AvatarButton() {
    return (
        <button>
            <ChevronDown size={20} color="var(--text-secondary)"/>
            <div className="avatar" />
        </button>
    )
}
