import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import del from "../../images/delete.svg"
import baseURL from "../../Api/baseUrl";
const RateItem = (comment ,Identifier) => {
    console.log(comment.id);
    console.log(comment.Identifier);
    const userData = JSON.parse(localStorage.getItem('user'))

    const deleteComment = async()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        let res = await baseURL.delete(`/api/v1/reviews/${comment.id}` ,config)
        window.location.href=`/product/${comment.Identifier}`
    }
    return (
        <div style={{background:"#F8F8F8"}}>
            <div style={{ textAlign: "right" }} className="commentContainer">
                <Row className="mt-2">
                    <Col className="d-felx me-5 commentContainer" style={{position:"relative"}}>
                        <div className="rate-name  d-inline">{comment.user.name}</div>
                        <img className="" src={rate} alt="" height="16px" width="16px" />
                        <div className="cat-rate  d-inline  p-1 pt-2">{comment.rateUs}</div>
                        {
                            userData ? (
                                comment.user.name === userData.data.user.name ? (
                                    <img src={del} onClick={deleteComment} alt="delete" className="deleteComment"/>
                                ):null
                            ):null
                        }
                    </Col>
                </Row>
                <Row className="border-bottom mx-2">
                    <Col className="d-felx me-4 pb-2">
                        <div className="rate-description  d-inline ms-2">
                            {comment.comment}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default RateItem;
