import { GM, GN, LUNCH } from './message.action'
let initialState = {
    msg: "Hello......"
}
let messageReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GM':
            return { msg: "Hello,Good Morning" }
        case 'GN':
            return { msg: "Hello,Good Night" }
        case 'BUNCH':
            return { msg: "Hello,BUNCH" }
        default:
            return state
    }
}
export { messageReducer }