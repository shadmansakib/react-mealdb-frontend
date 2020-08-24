
import React from 'react'
import './style.css';

export default function ImaeOverlay({ imgSrc, imgAlt = "", children, borderRadius = "0px 0px 0px 0px" }) {
    return (
        <div className="image-overlay" style={{ borderRadius: borderRadius }}>
            <img className="overlay-image" src={imgSrc} alt={imgAlt} style={{ borderRadius: borderRadius }} />
            <div className="overlay-content" style={{ borderRadius: borderRadius }}>
                {children}
            </div>
        </div>
    )
}
