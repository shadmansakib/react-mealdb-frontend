
import React, { useEffect } from 'react'
import './style.css';

import SubFeaturedBox from "../SubFeatured";


import { useSelector, useDispatch } from "react-redux";

import { fetchMealsFromCategory } from "../../store/actions/mealsFromCategoryAction";
import { Link } from 'react-router-dom';


export default function FeaturedCategory() {

    const dispatch = useDispatch()

    const { meal, mealsFromCategory } = useSelector(state => ({
        ...state.randomMeal,
        ...state.mealsFromCategory,
    }));


    const { strCategory } = meal ? meal : {};

    const { meals } = mealsFromCategory ? mealsFromCategory : null;

    useEffect(() => {
        if (!!strCategory) dispatch(fetchMealsFromCategory(strCategory));
    }, [strCategory]);

    let fcatMeals;
    if (meals) {
        let randomStart = Math.floor(Math.random() * meals.length);
        if (meals.length - randomStart < 4) randomStart = randomStart - (4 - meals.length + randomStart);


        fcatMeals = meals.slice(randomStart, randomStart + 4).map(recipe => (
            <Link to={'/' + recipe.idMeal}>
                <SubFeaturedBox
                    id={recipe.idMeal}
                    recipeName={recipe.strMeal}
                    imgSrc={recipe.strMealThumb} />
            </Link>
        ));
    }

    return (
        <div className="featured-more">
            <h2>{strCategory ? `More ${strCategory.toLowerCase()} recipes` : 'Loading recipes...'}</h2>
            <div className="subfeatured-boxes">
                {fcatMeals}
            </div>
        </div>
    )
}
