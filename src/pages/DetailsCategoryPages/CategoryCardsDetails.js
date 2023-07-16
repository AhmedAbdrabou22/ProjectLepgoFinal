import React, { useEffect, useState } from 'react'
// import SubTitle from '../../components/utility/subTitle'
import { Container, Row } from 'react-bootstrap'
import MostRented from '../../components/Home/MostRented'
import ProductCard from '../../components/Cards/ProductCard'
// import { useDispatch, useSelector } from "react-redux"
// import { getAllProducts } from '../../redux/action/ProductAction'
// import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom'
// import baseURL from '../../Api/baseUrl'
import axios from 'axios'
import EmptyPage from '../../components/utility/EmptyPage'
const CategoryCardsDetails = () => {
    const params = useParams();
    const [dataId , setData] = useState([]);

    
    const FetchProductCaategory =async()=>{
        const res = await axios.get(`https://api.lepgo.online/api/v1/categories/${params.id}`);
        setData(res.data)
    }

    useEffect(()=>{FetchProductCaategory()},[])


if(dataId){
    console.log(dataId.data);
}


    return (
        <div style={{ minHeight: "768px", paddingTop: "180px" }}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    {
                        dataId.data  ? (
                            dataId.data.map((item)=>{
                                return (
                                    <ProductCard desc={item.desc} title={item.title} img={item.image} id={item.id}/>
                                )
                            })
                        ):(<EmptyPage/>)
                    }
                </Row>
            </Container>
            <MostRented />
        </div>
    )
}

export default CategoryCardsDetails
