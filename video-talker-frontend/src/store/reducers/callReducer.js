import {CALL_SET_LOCAL_STREAM} from "../actions/callActions";

const initialState = {
    localStream: null
}

export const callReducer = (state=initialState, action) =>{
    switch (action.type)  {
        case CALL_SET_LOCAL_STREAM:
            return{...state, localStream: action.localStream}
        default:
            return state
    }
}