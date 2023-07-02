import React from 'react'
import SubTitle from '../utility/subTitle'
import RentedCard from '../Cards/RentedCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MostRented = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: false,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
                dots: true,
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='retendDiv'>
            <SubTitle title="الاكثر ايجارا" />
            <div className='sliderRented'>
                <Slider {...settings} className='slider-item-retend'>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default MostRented
