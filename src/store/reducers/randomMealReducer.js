
import { FETCH_RANDOM_MEAL } from "../actions/actionTypes";

const initialState = {};

export default function randomMealReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RANDOM_MEAL:
            return {
                ...state,
                meal: action.payload,
            };
        default:
            return state;
    }
}