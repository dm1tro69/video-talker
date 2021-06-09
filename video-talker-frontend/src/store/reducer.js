import {combineReducers} from "redux";
import dashboardReducer from './reducers/dashboardReducer'

export const mainReducer = combineReducers({
    dashboard: dashboardReducer
})
