import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
const RateItem = (comment) => {
    console.log(comment);
    console.log(comment.comment);
    console.log(comment.rateUs);
    console.log(comment.user);
    return (
        <div>
            <div style={{ textAlign: "right" }}>
                <Row className="mt-3">
                    <Col className="d-felx me-5">
                        <div className="rate-name  d-inline">{comment.user.name}</div>
                        <img className="" src={rate} alt="" height="16px" width="16px" />
                        <div className="cat-rate  d-inline  p-1 pt-2">{comment.rateUs}</div>
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
