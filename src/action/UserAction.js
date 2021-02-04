import axios from 'axios'

export const GET_USER_LIST = "GET_USER_LIST"
export const GET_USER_DETAIL = "GET_USER_DETAIL"
export const POST_USER_CREATE = "POST_USER_CREATE"
export const UPDATE_USER_CREATE = "UPDATE_USER_CREATE"

// di class ini di gunakan untuk menyimpan semua data API yg di gunakan untuk crud, 
// disini juga disiapkan dispatch dengan berbagai fungsi yg akan di panggil di kelas lain
//getall data get_user_list di gunakan di user.js
export const UserAction = () => {
    return (dispatch) => {
        axios.get("http://192.168.43.91/CI-tes/api/mahasiswas")
        .then(res => {
            const mahasiswa= res.data.data;
            dispatch({
                type: GET_USER_LIST,
                payload : {
                    data: mahasiswa,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USER_LIST,
                payload : {
                    data: false,
                    errorMessage: error.message,
                }
            })
            console.log(error);
          });
    }
}

//get data by id, GET_USER_DETAIL di gunakan di user.js
export const UserActionDetail = (id) => {
    return (dispatch) => {
        axios.get("http://192.168.43.91/CI-tes/api/mahasiswas/getId/"+ id)
        .then(res => {
            const mahasiswa= res.data.data;
            dispatch({
                type: GET_USER_DETAIL,
                payload : {
                    data: mahasiswa,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USER_DETAIL,
                payload : {
                    data: false,
                    errorMessage: error.message,
                }
            })
            console.log(error);
          });
    }
}

//tambah data, POST_USER_CREATE di gunakan di user.js
export const PostUser = (data) => {
    return (dispatch) => {
        axios.post("http://192.168.43.91/CI-tes/api/mahasiswas/tambah", data)
        .then(res => {
            console.log(res);
            const mahasiswa= res.data.data;
            dispatch({
                type: POST_USER_CREATE,
                payload : {
                    data: mahasiswa,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: POST_USER_CREATE,
                payload : {
                    data: false,
                    errorMessage: error.message,
                }
            })
            console.log(error);
          });
    }
}

//update data, UPDATE_USER_CREATE di gunakan di user.js
export const UpdateUser = (data, id) => {
    return (dispatch) => {
        axios.post("http://192.168.43.91/CI-tes/api/mahasiswas/update/"+id, data)
        .then(res => {
            console.log(res);
            const mahasiswa= res.data.data;
            dispatch({
                type: UPDATE_USER_CREATE,
                payload : {
                    data: mahasiswa,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: UPDATE_USER_CREATE,
                payload : {
                    data: false,
                    errorMessage: error.message,
                }
            })
            console.log(error);
          });
    }
}

//delete User, nggak mengembalikan response
export const DeleteUser = (id) => {
    return (dispatch) => {
        axios.delete("http://192.168.43.91/CI-tes/api/mahasiswas/delete/"+id)
        .then(res => {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
          });
    }
}


//biar ketika masukke form lain dia bersih enggak ada bekas data lagi
export const DeleteDataUser = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_DETAIL,
            payload : {
                data: false,
                errorMessage: false,
            }
        })
        dispatch({
            type: POST_USER_CREATE,
            payload : {
                data: false,
                errorMessage: false,
            }
        })
    }
}


