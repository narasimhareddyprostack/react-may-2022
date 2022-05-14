import React, { Component } from 'react'

class Message extends Component {
    //message = "Hello,"//convert class property as state object property
    state = {
        message: "Hello"
    }
    gmHandler = () => {
        this.setState({ message: "GM Mr Rahul Gandhi" })
    }
    gnHandler = () => { }
    render() {
        console.log("render method executing ----1/2")
        return (
            <div>
                <h2>Message:{this.state.message}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message
