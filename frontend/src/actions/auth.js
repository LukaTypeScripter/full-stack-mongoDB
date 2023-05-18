import axios from 'axios';
import { REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL } from './type';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthyToken';
//load user

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:5000/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}






//Register User


export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('http://localhost:5000/api/users',body,config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
    } catch (err) {
        const error = err.response.data.errors;

        if(error){
            error.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }


        console.log(err);
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//login user
export const loginUser = ({ email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post('http://localhost:5000/api/auth',body,config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
    } catch (err) {
        const error = err.response.data.errors;

        if(error){
            error.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }


        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        })
    }
}