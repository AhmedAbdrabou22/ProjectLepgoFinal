import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import bicycle from "../../images/bicycles-737190@2x.png"
import { Col } from 'react-bootstrap';
const OfferCard = () => {
    const [isHovered, SetHovered] = useState(false);

    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";
    return (
        <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex justify-content-around ">
            <Card className={shadowClass}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px" , transition:"0.3s" }}>
                <Card.Img variant="top" src={bicycle} />
                <Card.Body>
                    <Card.Title>خصم%25</Card.Title>
                    <Card.Text>
                        كايرو بايك
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default OfferCard
