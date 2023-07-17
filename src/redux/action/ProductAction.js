import baseURL from '../../Api/baseUrl'
import { GetAllProducts ,Get_Errors} from '../type'
const getAllProducts = () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/products') 
            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}

const getAllProductsPage = (page) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get(`/api/v1/products?page=${page}`)
            
            dispatch({ type: GetAllProducts, payload: res.data })
        }catch(e){
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data"+e })
        }
    }
}

export {getAllProducts ,getAllProductsPage}