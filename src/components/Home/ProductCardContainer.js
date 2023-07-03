import React from 'react'
import ProductCard from '../Cards/ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
const ProductCardContainer = () => {
    return (
        <div className='ProductContainer'>
            <Container>
                <SubTitle title="منتجات قد تعجبك" />
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
            </Container>
        </div>
    )
}

export default ProductCardContainer
