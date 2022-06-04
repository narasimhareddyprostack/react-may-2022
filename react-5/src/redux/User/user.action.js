import Axios from 'axios'
//action types
const FETCH_REQ = 'FETCH_REQ'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

let funReq = () => {
    return { type: FETCH_REQ }
}
let funSuccess = (user) => {
    return { type: FETCH_SUCCESS, payload: user }
}
let funFailure = (err) => {
    return {
        type: FETCH_FAILURE,
        payload: err
    }
}


let getDataAction = () => {
    console.log("view to Action");

    return (dispatch) => {
        dispatch(funReq())
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            dispatch(funSuccess(response.data))
        }).catch((err) => {
            dispatch(funFailure(err))
        })
    }
}

export { FETCH_REQ, FETCH_SUCCESS, FETCH_FAILURE, getDataAction }