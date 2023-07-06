import React from 'react'
import { Col } from 'react-bootstrap';
const UploadCondition = () => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className='w-50' style={{ position: "absolute", top: "26%", left: "0" }}>
            <div style={{ textAlign: "right" }} className='addProduct'>
                <div>
                    <label>تحديد نوع المنتج</label>
                    <br />
                    <input type='text' className='w-75 mt-2' placeholder='........اكتب هنا' />
                </div>
                <div className='mt-4'>
                    <label>إسم المنتج</label>
                    <br />
                    <input type='text' className='w-75 mt-2' placeholder='........اكتب هنا' />
                </div>
                <div className='mt-4 w-75 d-flex justify-content-between align-items-center'>
                    <div>
                        <label>سعر الحجز</label>
                        <br />
                        <input type='text' className='w-100 mt-2' placeholder="السعر" />
                    </div>
                    <div>
                        <label>خصم(إختياري)</label>
                        <br />
                        <input type='text' className='w-100 mt-2' placeholder="نسبة الخصم" />
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default UploadCondition
