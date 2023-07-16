import baseURL from '../../Api/baseUrl'

const createNewUsers = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/users/register' ,data)

            dispatch({ type: 'getAllUsers', payload: res })
        }catch(e){
            dispatch({ type: 'getAllUsers', payload: e.res })
        }
    }
}
const LoginUser = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/users/login' ,data)

            dispatch({ type: 'getLoginUser', payload: res })
        }catch(e){
            dispatch({ type: 'getLoginUser', payload: e.res })
        }
    }
}

const ForgetPass = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/users/forgot-password' ,data)

            dispatch({ type: 'ForgetPass', payload: res })
        }catch(e){
            dispatch({ type: 'ForgetPass', payload: e.res })
        }
    }
}

const VerifyEmailCode = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/users/verfiy-email' ,data)

            dispatch({ type: 'VerifyEmail', payload: res })
        }catch(e){
            dispatch({ type: 'VerifyEmail', payload: e.res })
        }
    }
}
const VerifyEmailCodeNumOtp = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/users/verfiy-email/otp' ,data)

            dispatch({ type: 'VerifyEmailOtp', payload: res })
            console.log(res);
        }catch(e){
            dispatch({ type: 'VerifyEmailOtp', payload: e.res })
        }
    }
}

export {createNewUsers , LoginUser , ForgetPass ,VerifyEmailCode ,VerifyEmailCodeNumOtp}