import React from 'react'
import OfferCard from '../../components/Cards/OfferCard'
import { Row } from 'react-bootstrap'
const GetAllOffers = () => {
    let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    return (
        <div v style={{ minHeight: "770px" }}>
            <Row >
                {
                    arr ? (
                        arr.map((item) => {
                            return (
                                <OfferCard />
                            )
                        })
                    ) : (null)
                }
            </Row>
        </div>
    )
}

export default GetAllOffers
