import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artBoard from "../../images/Artboard 4@4x@2x.png"
import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap"

const HomeCategory = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
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
                    slidesToShow: 3,
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
        <Container className='mt-5 sliderCategory'>
            <Slider {...settings} className='slider-item'>
                <div>
                    <Link to="/categoryDetails">
                        <img src={artBoard} alt="1" />
                    </Link>
                </div>
                <div>
                    <img src={artBoard} alt="2" />
                </div>
                <div>
                    <img src={artBoard} alt="3" />
                </div>
                <div>
                    <img src={artBoard} alt="4" />
                </div>
                <div>
                    <img src={artBoard} alt="5" />
                </div>
                <div>
                    <img src={artBoard} alt="1" />
                </div>
                <div>
                    <img src={artBoard} alt="2" />
                </div>
                <div>
                    <img src={artBoard} alt="3" />
                </div>
                <div>
                    <img src={artBoard} alt="4" />
                </div>
                <div>
                    <img src={artBoard} alt="5" />
                </div>
                <div>
                    <img src={artBoard} alt="1" />
                </div>
                <div>
                    <img src={artBoard} alt="2" />
                </div>
                <div>
                    <img src={artBoard} alt="3" />
                </div>
                <div>
                    <img src={artBoard} alt="4" />
                </div>
                <div>
                    <img src={artBoard} alt="5" />
                </div>
                <div>
                    <img src={artBoard} alt="1" />
                </div>
                <div>
                    <img src={artBoard} alt="2" />
                </div>
                <div>
                    <img src={artBoard} alt="3" />
                </div>
                <div>
                    <img src={artBoard} alt="4" />
                </div>
                <div>
                    <img src={artBoard} alt="5" />
                </div>
            </Slider>
        </Container>
    )
}

export default HomeCategory
