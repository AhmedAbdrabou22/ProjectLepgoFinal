import React from 'react'
// import { Link } from "react-router-dom"
import FavouriteCard from '../Cards/FavouriteCard'
import bmw from "../../images/range-rover-1806931.png"
import carch from "../../images/Group 598@2x.png"
import SubTitle from "../utility/subTitle.js"
import MostRented from '../Home/MostRented'
import ProductCardContainer from '../Home/ProductCardContainer'
const FavouritContainer = () => {
    let count = 5;
    return (
        <div>
            <SubTitle title="المفضله" /> <span>({count} منتجات)</span>
            <FavouriteCard img={bmw}/>
            <FavouriteCard img={carch}/>
            <FavouriteCard img={bmw}/>
            <FavouriteCard img={carch}/>

            <MostRented/>
            <ProductCardContainer/>
        </div>

    )
}

export default FavouritContainer
