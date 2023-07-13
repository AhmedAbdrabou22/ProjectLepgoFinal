import baseURL from '../../Api/baseUrl'
import { GetAllProducts ,Get_Errors} from '../type'
const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/products') 
            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllProducts}