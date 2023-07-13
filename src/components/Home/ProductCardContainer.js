import React, { useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/action/ProductAction'
import Spinner from 'react-bootstrap/Spinner';
const ProductCardContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const Products = useSelector(state => state.allProducts.product)
    const loading = useSelector(state => state.allProducts.loading)


    return (
        <div className='ProductContainer'>
            <Container>
                <SubTitle title="منتجات قد تعجبك" />
                <Row className='d-flex justify-content-between align-items-center'>
                {
                        Products.data ? (
                            Products.data.map((product) => {
                                return (<ProductCard title={product.title} id={product.id} img={product.image} rates={product.total_rate} />)
                            })
                        ) : (<div className="loading" id="loading">
                        <h2>Loading</h2>
                    </div>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductCardContainer
