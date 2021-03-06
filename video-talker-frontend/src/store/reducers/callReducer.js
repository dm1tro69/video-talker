import * as callActions from "../actions/callActions";

const initialState = {
    localStream: null,
    callState: callActions.callStates.CALL_UNAVAILABLE,
    callingDialogVisible: false,
    callerUsername: ''
}

export const callReducer = (state=initialState, action) =>{
    switch (action.type)  {
        case callActions.CALL_SET_LOCAL_STREAM:
            return{...state, localStream: action.localStream}
        case callActions.CALL_SET_CALL_STATE:
            return {...state, callState: action.callState}
        case callActions.CALL_SET_CALLING_DIALOG_VISIBLE:
            return {...state, callingDialogVisible: action.visible}
        case callActions.CALL_SET_CALLER_USERNAME:
            return {...state, callerUsername: action.callerUsername}
        default:
            return state
    }
}