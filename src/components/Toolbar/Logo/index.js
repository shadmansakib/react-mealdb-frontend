// src\components\Toolbar\ToggleButton\index.js

import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

export default function Logo() {
    return (
        <div className="toolbar__logo">
            <Link to="/">
                <h2>Recipe App</h2>
            </Link>
        </div>
    )
}
