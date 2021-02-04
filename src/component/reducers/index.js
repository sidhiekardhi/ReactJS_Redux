import { combineReducers } from "redux";
import users from "./users";
import { reducer as formReducer } from 'redux-form'

//di kelas ini memanggil users yg telah di initialisasi dari users.js lalu ada form reducer juga nanti untuk pengisian data
export default combineReducers({
users, form: formReducer
})
