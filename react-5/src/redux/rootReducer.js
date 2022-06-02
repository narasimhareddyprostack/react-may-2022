import { messageReducer } from './Message/message.reducer'
import { productReducer } from './Product/product.reducer'
import { combineReducers } from 'redux'
let rootReducer = combineReducers({ message: messageReducer, product: productReducer });

export { rootReducer }