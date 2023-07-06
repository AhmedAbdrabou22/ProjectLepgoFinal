import React from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import SubTitle from '../../components/utility/subTitle'
import { Row } from 'react-bootstrap'
import MostRented from '../../components/Home/MostRented'
const categoryCardsDetails = () => {
    return (
        <div style={{ minHeight: "768px" }}>
            <SubTitle title="عقارات" />
            <Row className='d-flex justify-content-between align-items-center'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>

        <MostRented/>
        </div>
    )
}

export default categoryCardsDetails
