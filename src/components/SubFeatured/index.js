
import React from 'react'
import './style.css';

import placeholderImg from "../../assets/images/placeholder-simpsons.jpg";
import { useHistory } from 'react-router-dom';


export default function SubFeatured({ id, recipeName = 'Loading...', imgSrc = placeholderImg }) {
    const history = useHistory();
    return (
        <div className="featured-recipe-box">
            <img src={imgSrc} alt={recipeName} className="featured-img-box" />
            <h2>{recipeName}</h2>
        </div>
    )
}
