
import React from 'react'
import { NavLink } from 'react-router-dom';

import './style.css';

export default function ToolbarMenu({ displayState, onClickItem = null }) {
    let _className = displayState ? "toolbar__menu shown" : "toolbar__menu hidden";

    return (
        <div className={_className}>
            <ul>
                <li><NavLink exact to="/" onClick={onClickItem}>Home</NavLink></li>
            </ul>
        </div>
    )
}
