
import React from 'react'
import { useSelector } from "react-redux";

import ImageOverlay from '../ImageOverlay';

import imgPlaceholer from '../../assets/images/placeholder-simpsons.jpg';
import './style.css';

export default function Banner() {
    const { meal } = useSelector(state => state.randomMeal);
    const { strMeal, strCategory, strArea, strMealThumb } = meal ? meal : '';
    const imgSrc = strMealThumb ? strMealThumb : imgPlaceholer;

    return (
        <div className="banner">
            <ImageOverlay imgSrc={imgSrc}>
                <div className="overlay-text">
                    <h2>{strMeal}</h2>
                    {strCategory && strArea && <p>{strCategory} recipe from {strArea} cuisine</p>}
                </div>
            </ImageOverlay>
        </div>
    )
}