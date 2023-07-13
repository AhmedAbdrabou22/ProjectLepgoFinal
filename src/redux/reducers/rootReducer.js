import {combineReducers} from "redux"
import CategoryReducers from "./categoryReducers"
import ProductReducer from './ProductReducer'

export default combineReducers({
    allCategory:CategoryReducers,
    allProducts:ProductReducer,
})