import {combineReducers} from "redux"
import CategoryReducers from "./categoryReducers"
import ProductReducer from './ProductReducer'
import UserReducer from "./Authreducer"

export default combineReducers({
    allCategory:CategoryReducers,
    allProducts:ProductReducer,
    UserReducer:UserReducer,
})