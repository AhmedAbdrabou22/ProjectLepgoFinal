import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
const OfferCard = ({img , title , discount}) => {
    const [isHovered, SetHovered] = useState(false);

    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";
    return (
        <Col className="my-4 d-flex justify-content-around">
            <Card className={shadowClass}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px" , transition:"0.3s"  , padding:"8px"}}>
                <Card.Img variant="top" src={img} style={{objectFit:"cover" , borderRadius:"10px" , width:"200px" ,height:"150px"}}/>
                <Card.Body>
                    <Card.Title>خصم%{discount}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default OfferCard
