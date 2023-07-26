import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMyProductsMe } from '../../redux/action/GetMyProductsAction';
import OwnProductCard from '../Cards/OwnProductCard';
const GetMyProducts = () => {


    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getMyProductsMe())
    } , [])

    const data = useSelector(state => state.MyProductsRed.myProducts)

    if(data){
        console.log(data.products);
    }


    return (
        <div>
            {
                data && data.products ? (
                    data.products.map((item , index)=>{
                        return(
                            <OwnProductCard img={item.image} id={item.id} duration={item.duration} rates={item.total_rate} title={item.title} desc={item.desc} amount={item.amount}/>
                        )
                    })
                ):(<h1>No Products Yet</h1>)
            }
        </div>
    )
}

export default GetMyProducts
