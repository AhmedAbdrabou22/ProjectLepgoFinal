import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const subTitle = ({ title, pathText, TitleMore }) => {
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center title'>
                <div>
                    <p>{title}</p>
                </div>
                {
                    TitleMore ? (
                        <div>
                            <Link to={`${pathText}`}>
                                <button className='OfferBtn'>جميع العروض</button>
                            </Link>
                        </div>
                    ) : (null)
                }
            </div>
        </Container>
    )
}

export default subTitle
