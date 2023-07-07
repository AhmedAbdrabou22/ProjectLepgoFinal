
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGallery from "../../components/ProductComponents/ImageGallery.js"
import DetailsProduct from "../../components/ProductComponents/DetailsProduct.js"

const SpecificProduct = () => {
    return (
        <div style={{paddingTop:"180px"}}>
            <Container>
                <Row className="py-3">
                    <Col lg="4" className="">
                        <ImageGallery />
                    </Col>
                    <Col lg="8" className="">
                        <DetailsProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SpecificProduct
