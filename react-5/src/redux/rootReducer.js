import { messageReducer } from './Message/message.reducer'
import { combineReducers } from 'redux'
let rootReducer = combineReducers({ message: messageReducer });

export { rootReducer }