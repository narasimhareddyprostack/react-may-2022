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
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">Message:{this.state.msg}</div>
                                <div className="card-body">
                                    <button className="btn btn-success mr-4" onClick={this.msgHandler.bind(this, "Good Morning")}>GM</button>
                                    <button className="btn btn-primary mr-4" onClick={this.msgHandler.bind(this, "Good Afternoon")}>GA</button>
                                    <button className="btn btn-warning" onClick={this.msgHandler.bind(this, "Good Night")}>GN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default Message
