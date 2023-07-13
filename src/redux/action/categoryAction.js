import baseURL from '../../Api/baseUrl'
import { AllCategory ,Get_Errors} from '../type'
const getAllCategory = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/categories') 
            console.log(res.data)
            dispatch({ type: AllCategory, payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}