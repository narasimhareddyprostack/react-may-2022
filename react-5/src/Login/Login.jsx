import React, { useState } from 'react'

const Login = () => {
    let [user, setUser] = useState({ email: "", password: "" })
    let inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault()
        alert(JSON.stringify(user))
    }
    return <div className="container">
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Login Details</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Please Enter Email " onChange={inputHandler} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Please Enter Password " onChange={inputHandler} />
                            </div>
                            <input type="submit" value="Lunch Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login
