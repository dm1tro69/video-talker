import {DASHBOARD_SET_USERNAME} from "../actions/dashboardActions";


const initialState = {
    username: '',
}

const dashboardReducer = (state=initialState, action) => {
    switch (action.type) {
        case DASHBOARD_SET_USERNAME:
            return {...state, username: action.username}
        default: return state

    }
}
export default dashboardReducer