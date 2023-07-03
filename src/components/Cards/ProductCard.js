import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import bmw from "../../images/Group 598.png"
import heart from "../../images/heart.svg"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const ProductCard = () => {
    const myClass = 'productCard';
    const [isHovered, SetHovered] = useState(false);

    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="my-4 d-flex justify-content-around ">
            <Card className={`${shadowClass} ${myClass}`} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s", padding: "8px" }}>
                <OverlayTrigger
                    key="tooltip"
                    placement="top"
                    overlay={<Tooltip id="tooltip" style={{ backgroundColor: "#F9F9FA" }}>اضفها الي المفضله</Tooltip>}
                >
                    <div className='imgFav'>
                        <img src={heart} alt="heart" />
                    </div>
                </OverlayTrigger>
                <Card.Img variant="top" src={bmw} />
                <Card.Body style={{ textAlign: "right" }}>
                    <Card.Title>إم دبليو</Card.Title>
                    <Card.Text style={{ textAlign: "right" }}>
                        <p>أكثر السيارات رفاهية وفخامةوجود حيث أنها تمتلك وجه أماميه</p>
                        <div>
                            <span style={{ color: "#08324B" }}> 500  جنيه</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#CB955B" }}>لمدة 1 يوم </span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-2'>
                            <div style={{background:"#CB955B" , color:"#08324B" , padding:"0 15px" , borderRadius:"10px"}}>
                                <span>غير قابل للشحن</span>
                            </div>
                            <div>
                                <span style={{color:"#FFA841"}}>4.5</span>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
