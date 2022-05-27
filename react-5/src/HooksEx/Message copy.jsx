import React, { useState } from 'react'
let Message = () => {
    //let msg = "Hello"
    let [msg, setMsg] = useState("Hello")
    let gmHandler = () => {
        setMsg("Hello,GM")
    }
    let gnHandler = () => {
        setMsg("Hello,GN")
    }
    return <>
        {/*  <h1>Message Component</h1> */}
        <h1>{msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </>
}
export default Message