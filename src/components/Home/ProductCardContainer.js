import React, { useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getAllProductsPage } from '../../redux/action/ProductAction'
import Spinner from 'react-bootstrap/Spinner';
import PaginationCompontent from '../utility/Pagination'
const ProductCardContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsPage())
    }, [])
    const Products = useSelector(state => state.allProducts.product)

    // const loading = useSelector(state => state.allProducts.loading)



    useEffect(() => {
        dispatch(getAllProductsPage())
    }, [])

    // const Products = useSelector(state => state.allProducts.category);

    let pageCount = 0;

    if (Products.meta) {
        pageCount = Products.meta.last_page;
    }


    const getPage = (page) => {
        dispatch(getAllProductsPage(page))

    }


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
                        ) : (<Spinner />)
                    }
                </Row>
                <PaginationCompontent CountPage={pageCount} onPress={getPage} />
            </Container>
        </div>
    )
}

export default ProductCardContainer
