import React, { useEffect } from 'react'
import SubTitle from '../../components/utility/subTitle'
import { Container, Row } from 'react-bootstrap'
import MostRented from '../../components/Home/MostRented'
import ProductCard from '../../components/Cards/ProductCard'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/action/ProductAction'
import Spinner from 'react-bootstrap/Spinner';
const CategoryCardsDetails = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const Products = useSelector(state => state.allProducts.product)
    const loading = useSelector(state => state.allProducts.loading)



    return (
        <div style={{ minHeight: "768px", paddingTop: "180px" }}>
            <SubTitle title="عقارات" />
            <Container>
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
            <MostRented />
        </div>
    )
}

export default CategoryCardsDetails
