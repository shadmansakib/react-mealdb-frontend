import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { fetchRandomMeal } from "./store/actions/randomMealAction";

import Toolbar from "./components/Toolbar";
import Home from './routes/Home';
import Details from './routes/Details';
import MealList from './routes/MealList';

import './App.css';


export default function App() {
  const { randomMeal } = useSelector(state => state.randomMeal);

  useEffect(() => {
    if (!randomMeal) fetchRandomMeal();
  }, [randomMeal]);

  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <div className="content-area">

          <Switch>
            <Route exact path='/category/:category' component={MealList} />
            <Route exact path='/cuisine/:cuisine' component={MealList} />
            <Route exact path='/:id' component={Details} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
