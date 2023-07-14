import React, { useEffect } from 'react'
import SubTitle from "../utility/subTitle.js"
import OfferCard from '../Cards/OfferCard.js'
import { Container, Row } from 'react-bootstrap'
import rangeRover from "../../images/range-rover-1806931.png"
import bicycle from "../../images/bicycles-737190@2x.png"
const OfferCategoryContainer = () => {

    return (
        <Container className='mt-5'>
            <SubTitle title="العروض المتاحه" TitleMore ="جميع العروض" pathText = "/allOffers"/>
                <Row className="d-flex  justify-content-between">
                    <OfferCard img={rangeRover}/>
                    <OfferCard img={bicycle}/>
                    <OfferCard img={rangeRover}/>
                    <OfferCard img={bicycle}/>
                    <OfferCard img={rangeRover}/>
                    <OfferCard img={bicycle}/>
                </Row>
        </Container>
    )
}

export default OfferCategoryContainer
