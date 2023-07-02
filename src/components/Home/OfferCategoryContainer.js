import React from 'react'
import SubTitle from "../utility/subTitle.js"
import OfferCard from '../Cards/OfferCard.js'
import { Container, Row } from 'react-bootstrap'
const OfferCategoryContainer = () => {
    return (
        <div className='mt-5'>
            <SubTitle title="العروض المتاحه" TitleMore ="جميع العروض" pathText = "/allOffers"/>
                <Row className="my-2 d-flex  justify-content-between">
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                </Row>
        </div>
    )
}

export default OfferCategoryContainer
