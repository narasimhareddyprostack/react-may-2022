import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    loginHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.loginHandler}>
                                <div className="form-group">
                                    <input onChange={this.emailHandler} placeholder="Email Id" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.passwordHandler} placeholder="Password" type="text" className="form-control" />
                                </div>
                                <input type="submit" value="Sign IN" className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignIn
