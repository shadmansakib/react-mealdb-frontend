
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducers
import randomMealReducer from "./reducers/randomMealReducer";
import mealsFromCategoryReducer from "./reducers/mealsFromCategoryReducer";
import cuisineReducer from "./reducers/cuisineReducer";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
    randomMeal: randomMealReducer,
    mealsFromCategory: mealsFromCategoryReducer,
    cuisines: cuisineReducer,
    categories: categoryReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;