import React, { useState , useEffect  } from 'react'
import { Button, Col } from 'react-bootstrap';
import plus from "../../images/plus.svg"
import mins from "../../images/minus.svg"
import LocationSvg from "../../images/location_pin.svg"
// import React, { useState } from 'react'
// import { Col } from 'react-bootstrap'
import imageDefault from "../../images/Uploading-bro.svg"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from '../../redux/action/categoryAction.js'



const UploadCondition = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    
    const categories = useSelector(state => state.allCategory.category)



    const [images, setImages] = useState([]);
    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
    };
    // console.log(images);




    const [count, SetCount] = useState(0)
    const increaseTime = () => SetCount(count + 1);
    const DecreaseTime = () => {
        if (count <= 0) {
            SetCount(0)
        } else {
            SetCount(count - 1)
        }
    }




    const [title , setTilte] = useState("");
    const [desc , setDesc] = useState("");
    const [conditions , setConditions] = useState("");
    const [location , setLocation] = useState('');
    const [place , setPlace] = useState('');
    const [duration , setDuration] = useState("");
    const [amount , setAmount] = useState("");
    const [categoryId , setCategoryId] = useState(0);

    //Store Id Category
    const onSelectCategory =  (e)=>{
        setCategoryId(e.target.value)
    }
    console.log(categoryId);
    // if(categories){
    //     console.log(categories.data);
    // }
    return (
        <div>
            <div>
                <div>
                    <div className="file-input">
                        <input type="file" id="file" accept="image/*" multiple={true} max={`4`} onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                        <img src={imageDefault} alt="Select images" onClick={handleLabelClick} />
                    </div>
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}
                                style={{ width: "100px", height: "100px" }} />
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "right" }} className='addProduct'>
                <div className="mt-5">
                    <abel>تحديد نوع المنتج</abel>
                    <select className="w-100 mt-2 py-2" 

                        name="category"
                        onChange={onSelectCategory}
                    >
                        <option value="0">اختر التصنيف</option>
                        {
                            categories.data ? (
                                categories.data.map((item)=>{
                                    return(
                                        <option value={item.id}>{item.title_ar}</option>
                                    )
                                })
                            ):(null)
                        }
                    </select>
                </div>
                <div className='mt-4'>
                    <label>إسم المنتج</label>
                    <br />
                    <input type='text' className='w-100 mt-2' placeholder='........اكتب هنا' 
                    value={title}
                    onChange={(e)=>setTilte(e.target.value)}
                    />
                </div>
                <div className='mt-4 d-flex justify-content-between  align-items-center'>
                    <div className='w-50'>
                        <label>سعر الحجز</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="السعر" 

                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}
                        />
                    </div>
                    <div className='w-50'>
                        <label>خصم(إختياري)</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="نسبة الخصم" />
                    </div>
                </div>
                <div className='mt-4 d-flex align-items-center'>
                    <div className='w-50'>
                        <label>  مدة الحجز </label>
                        <br />
                        <input type='text' className='w-100 mt-2' placeholder="السعر"
                        
                        value={duration}
                        onChange={(e)=>setDuration(e.target.value)}
                        />
                    </div>

                    <div className='time w-50' style={{ marginRight: "50px" }}>
                        <div className='d-flex align-items-center'>
                            <div className='plustime' onClick={increaseTime}>
                                <img src={plus} alt="plus" />
                            </div>
                            <span>{count} ساعه </span>
                            <div className='minusTime' onClick={DecreaseTime}>
                                <img src={mins} alt="minus" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4 d-flex  align-items-center'>
                    <div className='w-50'>
                        <label>المحافظه</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="المحافظة" 
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                        />
                    </div>
                    <div className='w-50'>
                        <label>المحافظه</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="المحافظة"
                        
                        value={place}
                        onChange={(e)=>setPlace(e.target.value)}

                        />
                    </div>
                    <div className='locationTime '>
                        <img src={LocationSvg} alt="Location" />
                    </div>
                </div>

                <div className='mt-4'>
                    <label>وصف المنتج</label>
                    <br />
                    <textarea className='mt-2' style={{ resize: 'none' }} cols={80} rows={10}
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className='mt-4'>
                    <label>شروط حجز المنتج</label>
                    <br />
                    <textarea className='mt-2' style={{ resize: 'none' }} cols={80} rows={10}
                    
                    value={conditions}
                    onChange={(e)=>setConditions(e.target.value)}
                    ></textarea>
                </div>
                <div className='text-center    mt-3'>
                    <Button style={{ backgroundColor: "#CB955B", outline: "none" }} className='w-50'>أضف الان</Button>
                </div>
            </div>
        </div>
    )
}

export default UploadCondition
