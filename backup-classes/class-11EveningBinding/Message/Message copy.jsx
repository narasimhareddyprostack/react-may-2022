import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Hello"
        }
    }
    msgHandler = (message_Value) => {
        console.log(message_Value)
        this.setState({ msg: message_Value })
    }
    render() {
        return (
            <>
                <h3>Wish Message:{this.state.msg}</h3>
                <button onClick={this.msgHandler.bind(this, "Good Morning")}>GM</button>
                <button onClick={this.msgHandler.bind(this, "Good Afternoon")}>GA</button>
                <button onClick={this.msgHandler.bind(this, "Good Night")}>GN</button>
            </>
        )
    }
}

export default Message
