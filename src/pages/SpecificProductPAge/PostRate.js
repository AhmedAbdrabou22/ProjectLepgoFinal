import { parse } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { json, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { PostCommenttoProduct } from '../../redux/action/PostComment';
import swal from 'sweetalert';
const PostRate = () => {

    let params = useParams();
    const dispatch = useDispatch();

    const [rateData, setRateData] = useState(0);

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 0.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setRateData(newValue);
        },
    };


    const [addcomment, setAddComment] = useState("")
    const [loading, setloading] = useState(true)


    const postCommentData = async (e) => {
        if(rateData === 0){
            swal('من فضلك اختر التقييم')
            return;
        }
        setloading(true)
        await dispatch(PostCommenttoProduct({
            rate:rateData,
            comment:addcomment,
            product_id:params.id
        }))
        setloading(false)

        setTimeout(()=>{
            window.location.href=`/product/${params.id}`
        } , 500)
    }



    const userData = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='w-100'>
            <Row className="mt-3 ">
                <Col sm="12" className="me-5  d-flex">
                    <div className="rate-name  d-inline ms-3 mt-1 ">
                        {
                            userData ? (userData.data.user.name) : null
                        }
                    </div>
                    {
                        userData ? (<ReactStars {...setting} />) : null
                    }
                </Col>
            </Row>
            <div>
                {
                    userData ? (<Row className="border-bottom mx-2">
                        <Col className="d-felx me-4 pb-2">
                            <textarea
                                style={{resize:"none" ,outline:"none"}}
                                className="input-form-area p-2 mt-3"
                                rows="2"
                                cols="20"
                                placeholder="اكتب تعليقك...."
                                value={addcomment}
                                onChange={(e) => setAddComment(e.target.value)}
                            />
                            <div className=" d-flex justify-content-end al">
                                <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={postCommentData}>اضف تعليق</div>
                            </div>
                        </Col>
                    </Row>) : null
                }
            </div>
        </div>
    )
}

export default PostRate
