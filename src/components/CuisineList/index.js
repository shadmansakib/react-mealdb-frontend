import React, { useEffect } from 'react';
import './style.css';

import { useSelector, useDispatch } from "react-redux";
import { fetchCuisines } from '../../store/actions/fetchCuisinesAction';
import { Link } from 'react-router-dom';

export default function CuisineList() {


    const dispatch = useDispatch()

    const { cuisines } = useSelector(state => state.cuisines);

    useEffect(() => {
        if (!cuisines || cuisines.length === 0) dispatch(fetchCuisines());
    }, [cuisines]);

    const cuisineList = cuisines ? cuisines.map(cuisine => (
        <Link to={'/cuisine/' + cuisine.strArea}>
            <div className="cuisine-name">
                <p>{cuisine.strArea}</p>
            </div>
        </Link>
    )) : (<p>Loading cuisine list...</p>);


    return (
        <div className="cuisine-list">
            <h2 className="section-name">All cuisines</h2>
            {cuisineList}
        </div>
    )
}
