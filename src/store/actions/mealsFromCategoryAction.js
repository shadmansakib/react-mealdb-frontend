
import axios from 'axios';

import { FETCH_MEALS_FROM_CATEGORY } from './actionTypes';

const MEALS_FROM_CATEGORY_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

export const fetchMealsFromCategory = category => dispatch => {
    if (!category || category === "") return;

    axios.get(`${MEALS_FROM_CATEGORY_URL}${category}`)
        .then(resp => {
            // console.log(resp.data.meals);
            console.log('payload :: ', {
                category,
                meals: resp.data.meals,
            })

            dispatch({
                type: FETCH_MEALS_FROM_CATEGORY,
                // payload: resp.data.meals,
                payload: {
                    category,
                    meals: resp.data.meals,
                },
            })
        })
        .catch(err => {
            console.log('>>> THUNK DISPATCH FAILED (MEALS FROM CATEGORY) : ', err);
        });
};