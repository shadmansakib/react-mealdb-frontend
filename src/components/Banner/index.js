
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import ImageOverlay from '../ImageOverlay';
import { fetchRandomMeal } from "../../store/actions/randomMealAction";

import imgPlaceholer from '../../assets/images/placeholder-simpsons.jpg';
import './style.css';

export default function Banner() {
    const dispatch = useDispatch();

    const { meal } = useSelector(state => state.randomMeal);

    useEffect(() => {
        if (!meal) dispatch(fetchRandomMeal());
    }, [meal]);

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