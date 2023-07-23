import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMyProductsMe } from '../../redux/action/GetMyProductsAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const GetMyProducts = () => {


    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getMyProductsMe())
    } , [])

    const data = useSelector(state => state.MyProductsRed.myProducts)

    if(data){
        console.log(data.products);
    }


    return (
        <div>
            {
                data && data.products ? (
                    data.products.map((item)=>{
                        return(
                            <Col xs="12" sm="12" md="6" lg="3" className="my-4 d-flex justify-content-around ">
                            <Card style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s", padding: "8px" }}>
                                <Card.Img variant="top" src={item.image} style={{ width: "300px", height: "250px", background: "red" }} />
                                <Card.Body style={{ textAlign: "right" }}>
                                    <Card.Text>{item.title}
                                    </Card.Text>
                                    <Card.Text className='textDescription' style={{ textAlign: "right", textDecoration: "none", fontWeight: "500" }}>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                        <div style={{ fontWeight: "700" }}>
                                            <span style={{ color: "#08324B" }}> {item.amount}  جنيه</span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span style={{ color: "#CB955B" }}>لمدة {item.duration} يوم </span>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center my-2'>

                                            <div>
                                                <span style={{ color: "#FFA841" }}><FontAwesomeIcon icon={faStar} />
                                                    {item.rates}</span>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                        )
                    })
                ):(<h1>No Products Yet</h1>)
            }
        </div>
    )
}

export default GetMyProducts
