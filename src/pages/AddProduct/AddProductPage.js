import React from 'react'
import UploadImage from '../../components/AddProductComponent/UploadImage'
import UploadCondition from '../../components/AddProductComponent/UploadCondition'
import { Container, Row } from 'react-bootstrap'
const AddProductPage = () => {
    return (
        <Container style={{minHeight:"1500px"}}>
            <Row className='d-flex justify-content-between align-items-center'>
                <UploadImage />
                <UploadCondition />
            </Row>
        </Container>
    )
}

export default AddProductPage
