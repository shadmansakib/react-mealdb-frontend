import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import Home from './routes/Home';
import Details from './routes/Details';
import MealList from './routes/MealList';

import './App.css';


export default function App() {
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
