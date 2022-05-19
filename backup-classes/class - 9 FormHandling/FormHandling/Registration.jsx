import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            password: ""
        }
    }
    inputHandler = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
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
                            <h3>Register without CC</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input name="name" onChange={this.inputHandler} placeholder="Name" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name="email" onChange={this.inputHandler} placeholder="Email" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name="mobile" onChange={this.inputHandler} placeholder="Mobile" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={this.inputHandler} placeholder="Password" type="text" className="form-control" />
                                </div>
                                <input type="submit" value="Sign UP..." className="btn btn-danger" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Registration
