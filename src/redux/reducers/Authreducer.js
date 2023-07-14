const initial = {
    createUSer: [],
    LoginUser: [],
    loading: true,
}

const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case "getAllUsers":
            return {
                ...state,
                createUSer: action.payload,
                loading: false
            }
        case "getLoginUser":
            return{
                ...state,
                LoginUser: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default UserReducer