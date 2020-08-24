
import React from 'react'
import './style.css';

export default function TogggleButton({onClick}) {
    return (
        <div className="toolbar__drawer_toggle" onClick={onClick}>
            <div className="toolbar__toggle_bar" />
            <div className="toolbar__toggle_bar" />
            <div className="toolbar__toggle_bar" />
        </div>
    )
}
