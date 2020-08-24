import React, { useEffect } from 'react';
import './style.css';

import { useSelector, useDispatch } from "react-redux";

import HorizontalCard from '../HorizontalCard';


import { fetchCategories } from "../../store/actions/fetchCategoriesAction";
import { Link } from 'react-router-dom';


export default function Categories() {


    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories);


    useEffect(() => {
        if (!categories || categories.length === 0) dispatch(fetchCategories());
    }, []);

    const categoryList = categories ? categories.map(cat => (
        <Link to={'/category/' + cat.strCategory}>
            <HorizontalCard
                text={cat.strCategory}
                imgSrc={cat.strCategoryThumb} />
        </Link>
    )) : (<p>Loading categories...</p>);


    return (
        <div className="category-area">
            <h2>Browse all categories</h2>
            <div className="category-cards">
                {categoryList}
            </div>
        </div>
    )
}
