import {combineReducers} from "redux"
import CategoryReducers from "./categoryReducers"
import ProductReducer from './ProductReducer'
import UserReducer from "./Authreducer"
import OfferReducer from "./OfferReducer"
import FavouriteItemReducer from "./FavouriteReducer"
import StoreProductReducer from "./StoreProductReducer"
import UpdateDetails from "./UpdateDetailsReducer"
import GovernmentsReducer from "./GovernmentReducer"
import MyProductsRed from "./GetMyProductsReducer"

export default combineReducers({
    allCategory:CategoryReducers,
    allProducts:ProductReducer,
    UserReducer:UserReducer,
    OfferReducer:OfferReducer,
    FavouriteItemReducer:FavouriteItemReducer,
    StoreProductReducer: StoreProductReducer,
    updateDetails:UpdateDetails,
    GovernmentsReducer:GovernmentsReducer,
    MyProductsRed : MyProductsRed
})