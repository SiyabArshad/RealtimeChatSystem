import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { broadcastReducer } from "./broadcast/reducer";
import { profileReducer } from "./profile/reducer";
export default combineReducers({
    authReducer,
    broadcastReducer,
    profileReducer
})