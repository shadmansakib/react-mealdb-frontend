
import { FETCH_MEALS_FROM_CATEGORY } from "../actions/actionTypes";

const initialState = {
    // featuredCategoryMeals: [],
    // category: '',
    // meals: [],
    mealsFromCategory: {},
};

export default function mealsFromCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MEALS_FROM_CATEGORY:

            console.log('reducer payload: ', action.payload);

            return {
                ...state,
                // featuredCategoryMeals: action.payload,
                // category: action.payload.category,
                // meals: action.payload.meals,
                mealsFromCategory: {
                    category: action.payload.category,
                    meals: action.payload.meals,
                },
            };
        default:
            return state;
    }
}