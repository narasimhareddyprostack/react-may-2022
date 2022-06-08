import React, { useReducer } from 'react'
let initialState = {
    message: "Hello......"
}
let reduceFun = (state = initialState, action) => {
    console.log(action)
    switch (action.message) {
        case "GM":
            return { message: "Good Morning Mr...." }
        case "GN":
            return { message: "Good Night.,,,,,,,,,,,,,,,,,,,," }
        default:
            return state
    }
}

const Message = () => {
    //let [state, setState] = useState("HEllo")
    let [state, dispatch] = useReducer(reduceFun, initialState)
    return (
        <div>
            <pre>{JSON.stringify(state)}</pre>
            <h3>Wish Message:{state.message}</h3>
            <button onClick={() => { dispatch({ message: "GM" }) }}>GM</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => { dispatch({ message: "GN" }) }}>GN</button>
        </div>
    )
}

export default Message
