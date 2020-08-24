
import { FETCH_CATEGORIES } from "../actions/actionTypes";

const initialState = {
    categories: [],
};

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
}