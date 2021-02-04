import { GET_USER_DETAIL, GET_USER_LIST, POST_USER_CREATE, UPDATE_USER_CREATE } from "../../action/UserAction";

//di class ini berisi initial state sebagai variabel yg nantinya akan di isi dengan data dari api
//disini juga ada users (state=initialtate action ) yg nanti akan di gunakan di class lain
let initialState = {
    users : false,
    error : false,
    userDetail : false,
    errorDetail : false,
    postUserCreate: false,
    errorUserCreate: false,
    title : "wahidev academy",
}

const users = (state = initialState, action) => {
    switch (action.type) {
        //GET_USER_LIST ada di action dispatch di get all data
        case GET_USER_LIST:
            return{
                ...state,
                users: action.payload.data,
                error: action.payload.errorMessage
            }
            //GET_USER_DETAIL ada di action dispatch di get data by detail
        case GET_USER_DETAIL:
            return{
                ...state,
                userDetail: action.payload.data,
                errorDetail: action.payload.errorMessage
            }
            //POST_USER_CREATE ada di action dispatch di tambah data
        case POST_USER_CREATE:
            return{
                ...state,
                postUserCreate: action.payload.data,
                errorUserCreate: action.payload.errorMessage
            }
            //POST_USER_CREATE ada di action dispatch di update data
        case UPDATE_USER_CREATE:
            return{
                ...state,
                postUserCreate: action.payload.data,
                errorUserCreate: action.payload.errorMessage
            }
    
        default:
            return state;
    }
}



export default users
