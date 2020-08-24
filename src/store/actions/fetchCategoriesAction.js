
import axios from 'axios';

import { FETCH_CATEGORIES } from './actionTypes';

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const fetchCategories = () => dispatch => {

    axios.get(URL)
        .then(resp => {
            // console.log('cuisine list ', resp.data.meals);
            dispatch({
                type: FETCH_CATEGORIES,
                payload: resp.data.categories,
            })
        })
        .catch(err => {
            console.log('>>> THUNK DISPATCH FAILED (CATEGORIES) : ', err);
        });
};