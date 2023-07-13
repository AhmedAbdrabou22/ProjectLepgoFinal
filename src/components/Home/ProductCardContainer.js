import React, { useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
import baseUrl from "../../Api/baseUrl.js"
const ProductCardContainer = () => {
    const [data , setData] = useState([]);
    const getAllData =async () =>{
        const res = await baseUrl.get("/api/v1/products")
        setData(res.data.data)
    }
    useEffect(() =>{
        getAllData();
    },[])
    return (
        <div className='ProductContainer'>
            <Container>
                <SubTitle title="منتجات قد تعجبك" />
                <Row className='d-flex justify-content-between align-items-center'>
                    {
                        data ? (
                            data.map((item)=>{
                                return <ProductCard title={item.title} desc={item.desc} img={item.image}/>
                            })
                        ):(<h1>No Data</h1>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductCardContainer
