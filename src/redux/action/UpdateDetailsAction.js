
import baseURL from '../../Api/baseUrl'

const UpdateDetails = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.put('/api/v1/users/update_details' ,data , config )

            dispatch({ type: 'updateDetails', payload: res })
        } catch (e) {
            dispatch({ type: 'updateDetails', payload: e.res })
            console.log(e);
        }
    }
}



export {UpdateDetails}