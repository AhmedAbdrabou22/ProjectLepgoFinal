import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap';
import plus from "../../images/plus.svg"
import mins from "../../images/minus.svg"
import LocationSvg from "../../images/location_pin.svg"
const UploadCondition = () => {
    const [count , SetCount] = useState(0)
    const increaseTime = ()=> SetCount(count + 1);
    const DecreaseTime = ()=>{
        if(count <= 0){
            SetCount(0)
        }else{
            SetCount(count-1)
        }
    }
    return (
        <div>
            <div style={{ textAlign: "right"  }} className='addProduct'>
                <div>
                    <label>تحديد نوع المنتج</label>
                    <br />
                    <input type='text' className='w-100 mt-2' placeholder='........اكتب هنا' />
                </div>
                <div className='mt-4'>
                    <label>إسم المنتج</label>
                    <br />
                    <input type='text' className='w-100 mt-2' placeholder='........اكتب هنا' />
                </div>
                <div className='mt-4 d-flex justify-content-between  align-items-center'>
                    <div className='w-50'>
                        <label>سعر الحجز</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="السعر" />
                    </div>
                    <div  className='w-50'>
                        <label>خصم(إختياري)</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="نسبة الخصم" />
                    </div>
                </div>
                <div className='mt-4 d-flex align-items-center'>
                    <div  className='w-50'>
                        <label>  مدة الحجز </label>
                        <br />
                        <input type='text' className='w-100 mt-2' placeholder="السعر" />
                    </div>

                    <div className='time w-50'  style={{marginRight:"50px"}}>
                        <div className='d-flex align-items-center'>
                            <div className='plustime' onClick={increaseTime}>
                                <img src={plus} alt="plus" />
                            </div>
                            <span>{count} ساعه </span>
                            <div className='minusTime' onClick={DecreaseTime}>
                                <img src={mins} alt="minus"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4 d-flex  align-items-center'>
                    <div  className='w-50'>
                        <label>المحافظه</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="المحافظة" />
                    </div>
                    <div  className='w-50'>
                        <label>المحافظه</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="المحافظة" />
                    </div>
                    <div className='locationTime '>
                        <img src={LocationSvg} alt="Location"/>
                    </div>
                </div>

                <div className='mt-4'>
                    <label>وصف المنتج</label>
                    <br/>
                    <textarea className='mt-2'  style={{resize: 'none'}} cols={80} rows={10}></textarea>
                </div>
                <div className='mt-4'>
                    <label>شروط حجز المنتج</label>
                    <br/>
                    <textarea className='mt-2'  style={{resize: 'none'}} cols={80} rows={10}></textarea>
                </div>
                <div className='text-center    mt-3'>
                    <Button style={{backgroundColor:"#CB955B" , outline:"none"}} className='w-50'>أضف الان</Button>
                </div>
            </div>
        </div>
    )
}

export default UploadCondition
