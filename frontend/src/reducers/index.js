import { combineReducers } from "redux";
import alert from './Alert'
import auth from './auth'
import profile from './profile'
export default combineReducers({
    alert,
    auth,
    profile
})