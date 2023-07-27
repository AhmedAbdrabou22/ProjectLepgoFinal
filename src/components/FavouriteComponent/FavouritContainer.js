import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
import FavouriteCard from '../Cards/FavouriteCard'
import bmw from "../../images/range-rover-1806931.png"
import carch from "../../images/Group 598@2x.png"
import SubTitle from "../utility/subTitle.js"
import MostRented from '../Home/MostRented'
import ProductCardContainer from '../Home/ProductCardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { ShowFavouriteItem } from '../../redux/action/FavouriteAction'
import { Spinner } from 'react-bootstrap'
import swal from 'sweetalert'
const FavouritContainer = () => {


    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true)

    const [FavProducts , setFavProducts] = useState([]);

    useEffect(()=>{
        const get = async()=>{
            setLoading(true)
            await dispatch(ShowFavouriteItem());
            setLoading(false)
        }
        get();
    } , [])


    const res = useSelector(state => state.FavouriteItemReducer.getFavouriteItems)


    useEffect(()=>{
        if(loading === false){
            if(res.data){
                // console.log(res.data); 
                if(localStorage.getItem('user')){
                    setFavProducts(res.data.map(item=>item.product_id))
                }else{
                    swal("لا بد من التسجيل اولا ")
                }
            }
        }
    } , [loading])
    console.log(res);
    let count = FavProducts.length;
    return (
        <div>
            <SubTitle title="المفضله" /> <span>({count} منتجات)</span>
            {
                res.data  ?(
                    localStorage.getItem('user') ? (
                        res.data.map((item)=>{
                            return(
                                <FavouriteCard img={item.image} title={item.title} desc={item.desc} amount={item.amount} city={item.city} duration = {item.duration} identity={item.id}  id={item.product_id} rate={item.total_rate}/>
                            )
                        })
                    ):(null)
                ):(<Spinner/>)
            }
            {/* <MostRented/> */}
        </div>

    )
}

export default FavouritContainer
