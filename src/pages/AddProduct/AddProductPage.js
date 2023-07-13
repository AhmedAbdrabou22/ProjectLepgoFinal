import React from 'react'
import UploadImage from '../../components/AddProductComponent/UploadImage'
import UploadCondition from '../../components/AddProductComponent/UploadCondition'
import { Container, Row } from 'react-bootstrap'
const AddProductPage = () => {
    return (
        <Container style={{ minHeight: "1500px", paddingTop: "180px" }}>
            <div className='d-flex w-100 m-auto' style={{ flexDirection: "column" }}>
                <div className='w-50 m-auto text-center'>
                    <UploadImage />
                    <UploadCondition />
                </div>
            </div>
        </Container>
    )
}

export default AddProductPage
