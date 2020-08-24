import axios from 'axios';
import { FETCH_RANDOM_MEAL } from './actionTypes';

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const fetchRandomMeal = () => dispatch => {
    axios.get(RANDOM_MEAL_URL)
        .then(resp => {
            dispatch({
                type: FETCH_RANDOM_MEAL,
                payload: resp.data.meals[0],
            })
        })
        .catch(err => {
            console.log('Cannot fetch random meal: ', err);
        });
};