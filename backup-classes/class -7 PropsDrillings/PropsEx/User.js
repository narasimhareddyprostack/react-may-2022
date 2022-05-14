import React, { Component } from 'react'
import Person from './Person'
class User extends Component {
    constructor(props) {
        super(props)
        console.log("First Construcotr")
        this.user = { uid: 101, uName: "Priyanka", email: "priyanka@gmail.com" }

    }
    getUserDetails() { }
    componentDidMount() {
        console.log("Third-")
    }
    render() {
        console.log("Second -render method")
        return <div>
            <h1>User Comp</h1>
            <h2>User Name:{this.user.uName}</h2>
            <Person one={"one"} user={this.user} method1={this.getUserDetails} />
        </div>
    }
}
export default User