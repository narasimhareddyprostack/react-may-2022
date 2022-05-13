import React, { Component } from 'react'

class Message extends Component {
    message = "Hello"
    gmHandle = () => {
        console.log(this.message)
        this.message = "Hello,GM Chandu"
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h3>Wish Message: {this.message}</h3>
                <button onClick={this.gmHandle}>GM</button>

            </div >
        )
    }
}

export default Message
