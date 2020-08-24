import React from 'react'
import './style.css'

import imgPlaceholder from '../../assets/images/placeholder-simpsons.jpg';

export default function HorizontalCard({ text = "Loading...", imgSrc = imgPlaceholder, onClick = null }) {
    return (
        <div className="horizontal-card" onClick={onClick}>
            <div className="card-img">
                <img src={imgSrc} />
            </div>

            <div className="card-content">
                <h2>{text}</h2>
            </div>
        </div>
    )
}
