import { FETCH_REQ, FETCH_SUCCESS, FETCH_FAILURE } from './user.action'
let initialState = {
    users: [],
    errMessage: "",
    loading: false
}
let userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'FETCH_REQ':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return {
                ...state, users: action.payload
            }
        case 'FETCH_FAILURE':
            return { ...state, errMessage: action.payload }
        default:
            return state
    }
}
export { userReducer }