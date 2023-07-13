import {combineReducers} from "redux"
import CategoryReducers from "./categoryReducers"

export default combineReducers({
    allCategory:CategoryReducers,
})