import React, { useState } from 'react'
let Message = () => {
    //let msg = "Hello"
    let [msg, setMsg] = useState("Hello")

    return <>
        {/*  <h1>Message Component</h1> */}
        <h1>Message:{msg}</h1>
        <button onClick={() => {
            setMsg("Good Morning")
        }}>GM</button>
    </>
}
export default Message