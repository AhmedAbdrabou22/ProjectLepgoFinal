
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGallery from "../../components/ProductComponents/ImageGallery.js"
import DetailsProduct from "../../components/ProductComponents/DetailsProduct.js"
import { useParams } from 'react-router-dom'
import baseURL from '../../Api/baseUrl.js'
import PostRate from './PostRate.js'
import RateItem from './RateItem.js'

const SpecificProduct = () => {
    let params = useParams();

    // console.log(params);

    const [dataId, setDataId] = useState([])

    const fetchFilmbyId = async () => {

        const detailFilmById = await baseURL.get(`https://api.lepgo.online/api/v1/products/${params.id}`);
        // console.log(detailFilmById.data);
        setDataId(detailFilmById.data)
    }

    let text = "";
    let description = ""
    let conditions = ""
    let place = "";
    let imageOne = null
    let imageTwo = null
    let imageThee = null
    let imageFour = null
    if (dataId.data) {
        text = dataId.data.title
        description = dataId.data.desc
        conditions = dataId.data.conditions
        place = dataId.data.city
        for (let i = 0; i < dataId.data.images.length; i++) {
            for (let j = 0; j < 1; j++) {
                if (i === 0) {
                    imageOne = dataId.data.images[i].image;
                } else if (i === 1) {
                    imageTwo = dataId.data.images[i].image;
                } else if (i === 2) {
                    imageThee = dataId.data.images[i].image;
                } else if (i === 3) {
                    imageFour = dataId.data.images[i].image;
                }
            }
        }
    }
    useEffect(() => {
        fetchFilmbyId()
    }, [])

    if (dataId.data) {
        console.log(dataId.data.reviews);
    }




    return (
        <div style={{ minHeight: "768px", paddingTop: "200px" }}>
            <Container>
                <Row className="py-3">
                    <Col xs="12" sm="12" md="12" lg="4" className="">
                        <ImageGallery imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThee} imageFour={imageFour} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="8" className="">
                        <DetailsProduct title={text} desc={description} conditions={conditions} place={place} />
                        <PostRate />
                        {
                            dataId.data ? (
                                dataId.data.reviews.map((item)=>{
                                    return(
                                        <RateItem Identifier={params.id} comment={item.comment} rateUs={item.rate} user={item.user} id={item.id}/>
                                    )
                                })
                            ):null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SpecificProduct
