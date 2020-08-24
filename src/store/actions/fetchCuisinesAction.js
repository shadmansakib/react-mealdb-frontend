
import axios from 'axios';

import { FETCH_CUISINE_LIST } from './actionTypes';

const URL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

export const fetchCuisines = () => dispatch => {

    axios.get(URL)
        .then(resp => {
            // console.log('cuisine list ', resp.data.meals);
            dispatch({
                type: FETCH_CUISINE_LIST,
                payload: resp.data.meals,
            })
        })
        .catch(err => {
            console.log('>>> THUNK DISPATCH FAILED (CUISINE LIST) : ', err);
        });
};