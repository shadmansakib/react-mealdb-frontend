import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import HorizontalCard from '../../components/HorizontalCard';

import './style.css';

export default function MealList() {

    const history = useHistory();

    const location = useLocation();

    const [meals, setMeals] = useState([]);

    // update page title
    document.title = "All " + location.pathname.split('/')[2] + " Recipes - React-MealDB";

    useEffect(() => {
        console.log('meal list effect');

        // scroll to top while loading
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        if (meals.length > 0) return;
        console.log('getting meals from api');

        let url = null;
        if (location.pathname.split('/')[1] === 'category') {
            url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
        } else if (location.pathname.split('/')[1] === 'cuisine') {
            url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
        }
        axios.get(url + location.pathname.split('/')[2])
            .then(resp => {
                setMeals(resp.data.meals);
            })
            .catch(err => { console.log('Cannot fetch meal details: ', err) });

    }, [meals]);

    return (
        <div className="meal-list">

            <h1>All recipes from {location.pathname.split('/')[1] === 'cuisine' ? location.pathname.split('/')[2] : location.pathname.split('/')[2].toLowerCase()} {location.pathname.split('/')[1]}</h1>
            <div className="meals">
                {meals.map(({ idMeal, strMeal, strMealThumb }) => (<HorizontalCard
                    key={idMeal}
                    text={strMeal}
                    imgSrc={strMealThumb}
                    onClick={() => { history.push({ pathname: '/' + idMeal }) }} />
                ))}
            </div>
        </div>
    )
}
