import {DASHBOARD_SET_ACTIVE_USERS, DASHBOARD_SET_USERNAME} from "../actions/dashboardActions";


const initialState = {
    username: '',
    activeUsers: []
}

const dashboardReducer = (state=initialState, action) => {
    switch (action.type) {
        case DASHBOARD_SET_USERNAME:
            return {...state, username: action.username}
        case DASHBOARD_SET_ACTIVE_USERS:
            return {...state, activeUsers: action.activeUsers}
        default: return state

    }
}
export default dashboardReducer