import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import bmw from "../../images/Group 598.png"
import heart from "../../images/heart.svg"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'
import FavouritContainer from '../FavouriteComponent/FavouritContainer';
const ProductCard = ({ title, desc, img , id , rates , duration , amount }) => {
    const myClass = 'productCard';
    const [isHovered, SetHovered] = useState(false);

    const [isClicked, SetClicked] = useState(false);

    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";

    const turnOn = (event) => {
        event.preventDefault();
        SetClicked(!isClicked)
    }

    const redClass = isClicked ? "havRed" : "";
    return (
        <Col xs="12" sm="12" md="6" lg="3" className="my-4 d-flex justify-content-around ">
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <Card className={`${shadowClass} ${myClass}`} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s", padding: "8px" }}>
                    <OverlayTrigger
                        key="tooltip"
                        placement="top"
                        overlay={<Tooltip id="tooltip" style={{ backgroundColor: "red" }}>اضفها الي المفضله</Tooltip>}
                    >
                        <div className='imgFav'>
                            <FontAwesomeIcon icon={faHeart} onClick={turnOn} className={`${redClass}`} style={{ color: "white" }} />
                        </div>
                    </OverlayTrigger>
                    <Card.Img variant="top" src={img} style={{ width: "300px", height: "250px", background: "red" }} />
                    <Card.Body style={{ textAlign: "right" }}>
                        <Card.Text>{title}
                        </Card.Text>
                        <Card.Text className='textDescription'  style={{ textAlign: "right", textDecoration: "none", fontWeight: "500" }}>
                            <p>
                                {desc}
                            </p>
                        </Card.Text>
                        <Card.Text>
                            <div style={{ fontWeight: "700" }}>
                                <span style={{ color: "#08324B" }}> {amount}  جنيه</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ color: "#CB955B" }}>لمدة {duration} يوم </span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-2'>
                                <div style={{ display: "flex", background: "#CB955B", color: "#08324B", padding: "5px 15px", borderRadius: "10px" }}>
                                    <span> <FontAwesomeIcon icon={faTruck} />&nbsp; &nbsp;غير قابل للشحن</span>
                                </div>
                                <div>
                                    <span style={{ color: "#FFA841" }}><FontAwesomeIcon icon={faStar} />
                                        {rates}</span>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default ProductCard
