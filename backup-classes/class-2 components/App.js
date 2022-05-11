//import React, { Component } from 'react'
import React from 'react'
import Message from './Message/Message'
class App extends React.Component {
    render() {
        return <div>
            <h1>App Component</h1>
            <Message />
            <Message />
            <Message />
            <Message />
            <button className="btn btn-success">Login</button>
        </div>
    }
}
export default App