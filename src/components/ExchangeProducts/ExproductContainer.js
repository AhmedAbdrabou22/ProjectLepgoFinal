import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllExchangeProducts } from '../../redux/action/ExchangeProductsAction'
import ExProductCard from '../Cards/ExProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
const ExproductContainer = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllExchangeProducts())
    }, [])

    const ExProducts = useSelector(state => state.ExallProducts.Exproduct)

    if (ExProducts) {
        console.log(ExProducts.data);
    }

    return (
        <div>
            <SubTitle title="منتجات للتبديل" />
            <Container>
                <Row>
                    {
                        ExProducts.data ? (
                            ExProducts.data.map((item) => {
                                return (
                                    <ExProductCard desc={item.desc} img={item.image} title={item.title} id={item.id} rates={item.total_rate} city={item.city}/>
                                )
                            })
                        ) : null
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ExproductContainer
