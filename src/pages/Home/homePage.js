import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import OfferCategoryContainer from '../../components/Home/OfferCategoryContainer'
import MostRented from '../../components/Home/MostRented'
const homePage = () => {
    return (
        <div style={{ minHeight: "770px"}}>
            <Slider />
            <HomeCategory />
            <OfferCategoryContainer/>
            <MostRented/>
        </div>
    )
}

export default homePage
