import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import heart from "../../images/heart.svg"
import heartred from '../../images/heartRed.svg'
const FavouriteCard = ({ img  ,amount , desc , title , city , duration}) => {
    return (
        <div>
            <div className='w-75 mx-auto favItem mt-4 text-center'>
                <img src={img} style={{ width: "300px", height: "200px" }} alt='img' />
                <div className='mx-3'>
                    <h2 className='infos'>{title}</h2>
                    <p className='infos infoDetails w-75'>{desc}</p>
                    <p className='infos'>{city}</p>
                    <div className='d-flex align-items-start w-100'>
                        <img src={heartred} style={{ color: "red", alignSelf: "start", margin: "5px" }} alt=""/>
                        <p style={{ color: "#08324B", fontSize: "18px", cursor: "pointer"}} className='infos'>إزالة من المفضلة</p>
                    </div>
                </div>
                <div className='priceDetails'>
                    <div className='detailsFavItemduration'>
                        <p style={{ color: "#9399A3" }}><span style={{ fontSize: "18px", color: "#08324B" }}>{amount}</span> جنيه</p>
                        <span style={{ marginTop: "-15px", display: "block", color: "#CB955B" }}>لمدة {duration} يوم</span>
                    </div>
                    <div className='detailFavItem'>
                        <div style={{ background: "#CB955B", color: "#08324B", padding: "5px 20px", borderRadius: "10px" }} className='d-inline'>
                            <span> <FontAwesomeIcon icon={faTruck} /> &nbsp; &nbsp;</span>
                            <span>غير قابل للشحن</span>
                        </div>
                        <div className='d-inline'>
                            <span style={{ color: "#FFA841" }} className='mx-4'><FontAwesomeIcon icon={faStar} />
                                4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteCard
