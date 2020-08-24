
import { FETCH_CUISINE_LIST } from "../actions/actionTypes";

const initialState = {
    cuisines: [],
};

export default function cuisineReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUISINE_LIST:
            return {
                ...state,
                cuisines: action.payload,
            };
        default:
            return state;
    }
}