
import {GET_PROFILE,GET_PROFILES,GET_REPOS,PROFILE_ERROR,CLEAR_PROFILE} from '../actions/type'

const initialState = {
    profile:null,
    profiles:[],
    repos:[],
    loading:true,
    error:{}
}


export default function(state=initialState,action) {
    const {type,payload} = action;

    switch(type) {
            case GET_PROFILE:
                return{
                    ...state,
                    profile:payload,
                    loading:false
                }
            case PROFILE_ERROR:
                    return {
                        profile:null,
                        loading:false,
                        error:payload
                    }
            case CLEAR_PROFILE:
                return {
                ...state,
                profile:null,
                repos:[],
                loading:false
                }
            default: return state;
        }
}