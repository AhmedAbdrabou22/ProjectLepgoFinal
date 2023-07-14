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

export {createNewUsers , LoginUser}