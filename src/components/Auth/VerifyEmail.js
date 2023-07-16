import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {VerifyEmailCodeNumOtp} from '../../redux/action/AuthAction';


const VerifyEmail= ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [code, setCode] = useState("")

    const [loading, setLoading] = useState(true)

    const onChangeCode = (event) => {
        setCode(event.target.value)
    }

    const onSubmit =async ()=>{
        setLoading(true)
        await dispatch(VerifyEmailCodeNumOtp({
            otp:code,
        }))
        setLoading(false)
    }
    const data = useSelector(state => state.UserReducer.VerifyEmailOtp)

    useEffect(() => {
        if (loading === false) {
            console.log(data);
        }
    }, [loading])


    return [ code ,onChangeCode , onSubmit]
}


export default VerifyEmail