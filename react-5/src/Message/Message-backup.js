import React, { Component } from 'react'
class Message extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor")
    }
    message = "Hello"
    
    render() {
        console.log("Second render Method")
        return (
            <div>
                <h2>Message Component</h2>
                <hr />
                <h3>Message:{this.message}</h3>
                <button onClick={}>GM</button>
                <button>GN</button>
            </div>
        )
    }
}

export default Message
