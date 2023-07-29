import baseURL from '../../Api/baseUrl'
const PostCommenttoProduct = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/reviews/store',data,config) 
            dispatch({ type: "PostComment", payload: res.data })
            console.log(res);
        } catch (e) {
            dispatch({ type: "PostComment", payload: "Error through Loadin Data" + e })
        }
    }
}

export {PostCommenttoProduct}