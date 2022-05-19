import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                mobile: "",
                password: ""
            },
            address: {

            }
        }
    }
    inputHandler = (event) => {
       
        this.setState({
            user: {

                [event.target.name]: event.target.value
            }

        })
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state.user)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Register without CC</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input name={this.state.user.name} onChange={this.inputHandler} placeholder="Name" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name={this.state.user.email} onChange={this.inputHandler} placeholder="Email" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name={this.state.user.mobile} onChange={this.inputHandler} placeholder="Mobile" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name={this.state.user.password} onChange={this.inputHandler} placeholder="Password" type="text" className="form-control" />
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
