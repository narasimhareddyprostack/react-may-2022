import React, { Component } from 'react'

export class Message extends Component {
    state = {
        msg: "Hello"
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => {
                    this.setState({ msg: "Hello,Good Morning" })
                }}>GM....</button>
            </div>
        )
    }
}

export default Message
