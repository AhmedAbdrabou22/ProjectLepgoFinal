import React from 'react'
import bicycle from "../../images/bicycles-737190@2x.png"
import { Card, Col } from 'react-bootstrap'

const RentedCard = () => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex justify-content-around ">
            <Card style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s" }}>
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

export default RentedCard
