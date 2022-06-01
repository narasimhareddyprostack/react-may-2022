import { createStore } from "redux";
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
let store = createStore(rootReducer);
export { store }