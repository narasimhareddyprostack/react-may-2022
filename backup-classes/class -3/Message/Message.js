import React from 'react'
class Message extends React.Component {
    a = 10
    b = 20
    msg = "Good Morning"
    render() {
        return <div>
            <h3>Value: {this.a + this.b}</h3>
            <h2>{this.msg}</h2>
        </div>
    }
}
export default Message