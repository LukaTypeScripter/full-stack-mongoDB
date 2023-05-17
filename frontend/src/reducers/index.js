import { combineReducers } from "redux";
import alert from './Alert'
import auth from './auth'
export default combineReducers({
    alert,
    auth
})