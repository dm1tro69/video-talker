import {createStore} from "redux";
import {mainReducer} from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(mainReducer, composeWithDevTools());