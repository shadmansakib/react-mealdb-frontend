import React from 'react';

import Banner from '../../components/Banner';
import FeaturedCategory from '../../components/FeaturedCategory';
import Categories from '../../components/Categories';
import CuisineList from '../../components/CuisineList';

import { useSelector } from "react-redux";

import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const { meal } = useSelector(state => state.randomMeal);
  return (
    <>
      {/* featured area */}
      <div className="featured-area">
        {/* main featured meal */}
        <div className="overlay-banner">
          <Link to={meal ? '/' + meal.idMeal : '#'}>
            <Banner />
          </Link>
        </div>

        {/* more meals from featured meal category */}
        <FeaturedCategory />
      </div>

      <div style={{ padding: "10px" }}>
        <Categories />
        <CuisineList />
      </div>
    </>
  )
}
