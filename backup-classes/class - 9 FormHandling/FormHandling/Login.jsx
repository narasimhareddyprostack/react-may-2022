import React, { Component } from 'react'
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        /*      console.log(event.target)
             console.log(event.target.value) */
        this.setState({
            email: event.target.value
        })

    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    loginHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Form Handling</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.loginHandler}>
                    <label>Email</label>
                    <input onChange={this.emailHandler} type="text" /> <br /><br />
                    <label>Password</label>
                    <input onChange={this.passwordHandler} type="text" /> <br /><br />
                    <input type="submit" value="login...." />
                </form>

            </div>
        )
    }
}

export default Login
