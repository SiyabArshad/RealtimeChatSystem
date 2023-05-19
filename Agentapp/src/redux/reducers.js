import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { broadcastReducer } from "./broadcast/reducer";
export default combineReducers({
    authReducer,
    broadcastReducer
})