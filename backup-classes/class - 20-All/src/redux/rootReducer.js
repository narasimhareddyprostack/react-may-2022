import { combineReducers } from "redux";
import { userReducer } from './User/user.reducer'
let rootReducer = combineReducers({ users: userReducer })
export { rootReducer }