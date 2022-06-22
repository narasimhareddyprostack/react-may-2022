import React, { useRef } from 'react'

const Login = () => {
    let btnRef = useRef();
    let enableBtn = (event) => {
        console.log(btnRef)
        let flag = event.target.checked
        btnRef.current.disabled = !flag
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <input placeholder="Email" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Password" className="form-control" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" onChange={enableBtn} className="form-check-input" /> <label className="form-check-label" >Check me out</label>
                                </div>
                                <div className="form-group">
                                    <input ref={btnRef} type="submit" className="btn btn-success" disabled />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
