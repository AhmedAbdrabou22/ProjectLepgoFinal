
// import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    favouriteList: [],
    loading: true,
}

const FavouriteItemReducer = (state = initial, action) => {
    switch (action.type) {
        case "PostFavouriteItem":
            return {
                ...state,
                favouriteList: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default FavouriteItemReducer