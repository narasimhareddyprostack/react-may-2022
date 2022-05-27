import React, { useState } from 'react'
let Message = () => {
    //let msg = "Hello"
    let [a, b] = useState("Hello.......")

    return <>
        {/*  <h1>Message Component</h1> */}
        <h1>Message:{a}</h1>
        <button onClick={() => {
            b("Good Morning")
        }}>GM</button>
    </>
}
export default Message