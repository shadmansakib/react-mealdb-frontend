import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import HorizontalCard from '../../components/HorizontalCard';

import imgPlaceholder from '../../assets/images/placeholder-simpsons.jpg';
import './style.css';

export default function Details({ history }) {
  const { location } = history;
  const routePathRef = useRef('');

  const [mealData, setMealData] = useState({});
  const [sameCategoryMeals, setSameCategoryMeals] = useState([]);

  /**
   * Emulates componentDidMount() and componentDidUpdate() 
   */
  useEffect(() => {
    // check if any data is passed in state
    if (location.state) {
      // has meal data, set local state
      setMealData(location.state.meal);
      // set reference url to current path
      routePathRef.current = location.pathname.replace('/', '');
      return;
    } else {
      // check if clicked url == current url (to avoid unnecessary API call)
      if (location.pathname.replace('/', '') === routePathRef.current) return;
      else {
        // set new url (from clicked link) to ref
        routePathRef.current = location.pathname.replace('/', '');

        // scroll to top while loading
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // get meal details
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + location.pathname.replace('/', ''))
          .then(resp => {
            setMealData(resp.data.meals[0]);
          })
          // TODO: handle errors
          .catch(err => console.log('Cannot fetch meal details: ', err));
      }
    }

  }, [location]);



  // get same category meals (another from API call)
  useEffect(() => {
    console.log('use effect 3');
    if (!mealData) return;

    if (location.state) {
      console.log('meals from category >> ', location.state.mealsFromCategory);
      setSameCategoryMeals(location.state.mealsFromCategory.meals);
    } else if (mealData.strCategory) {
      console.log('getting same category meals from api');
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealData.strCategory)
        .then(resp => {
          setSameCategoryMeals(resp.data.meals);
        })
        .catch(err => console.log('Cannot fetch meals from category ::: ', err));
    }
  }, [mealData]);



  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = mealData;

  // Quick and dirty solution
  const ingredients = [
    {
      name: mealData.strIngredient1,
      measure: mealData.strMeasure1
    },
    {
      name: mealData.strIngredient2,
      measure: mealData.strMeasure2
    },
    {
      name: mealData.strIngredient3,
      measure: mealData.strMeasure3
    },
    {
      name: mealData.strIngredient4,
      measure: mealData.strMeasure4
    },
    {
      name: mealData.strIngredient5,
      measure: mealData.strMeasure5
    },
    {
      name: mealData.strIngredient6,
      measure: mealData.strMeasure6
    },
    {
      name: mealData.strIngredient7,
      measure: mealData.strMeasure7
    },
    {
      name: mealData.strIngredient8,
      measure: mealData.strMeasure8
    },
    {
      name: mealData.strIngredient9,
      measure: mealData.strMeasure9
    },
    {
      name: mealData.strIngredient10,
      measure: mealData.strMeasure10
    },
    {
      name: mealData.strIngredient11,
      measure: mealData.strMeasure11
    },
    {
      name: mealData.strIngredient12,
      measure: mealData.strMeasure12
    },
    {
      name: mealData.strIngredient13,
      measure: mealData.strMeasure13
    },
    {
      name: mealData.strIngredient14,
      measure: mealData.strMeasure14
    },
    {
      name: mealData.strIngredient15,
      measure: mealData.strMeasure15
    },
    {
      name: mealData.strIngredient16,
      measure: mealData.strMeasure16
    },
    {
      name: mealData.strIngredient17,
      measure: mealData.strMeasure17
    },
    {
      name: mealData.strIngredient18,
      measure: mealData.strMeasure18
    },
    {
      name: mealData.strIngredient19,
      measure: mealData.strMeasure19
    },
    {
      name: mealData.strIngredient20,
      measure: mealData.strMeasure20
    },
  ];


  const ingredientList = ingredients.map(({ name, measure }) => {
    if (!name) return null;
    return (<p><strong>{name}</strong>: {measure}</p>)
  });

  const moreMealList = !!sameCategoryMeals ? sameCategoryMeals.map(({ strMeal, strMealThumb, idMeal }) => (
    <Link to={"/" + idMeal}>
      <HorizontalCard
        text={strMeal}
        imgSrc={strMealThumb} />
    </Link>
  )) : (<p>loading...</p>);




  return (
    <div className="recipe-details">

      <div className="details-heading">

        <img
          className="recipe-img"
          src={strMealThumb ? strMealThumb : imgPlaceholder}
          alt="img" />

        <div className="recipe-heading">
          <h1>{strMeal}</h1>
          <div className="horizontal-section">
            <p>
              <strong>Category:</strong>
              <Link to={'/category/' + strCategory} className="details-link">{strCategory}</Link>
            </p>
            <p>
              <strong>Cuisine:</strong>
              <Link to={'/cuisine/' + strArea} className="details-link">{strArea}</Link>
            </p>
          </div>
          {strYoutube && <p><a href={strYoutube} target="_blank" className="details-link">View on youtube</a></p>}

        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-ingredients">
          <h2>ingredients</h2>
          {ingredientList}
        </div>

        <div className="recipe-instructions">
          <h2>Method</h2>
          <p>
            {strInstructions}
          </p>
        </div>
      </div>

      <div className="more-recipes">
        <h2>More from {strCategory}</h2>
        <div className="more-cards">
          {moreMealList}
        </div>
      </div>
    </div>
  )
}
