import React from 'react'
import { gmAction, gnAction, gaAction } from '../redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state.message;
    })
    //let msg = "Hello"
    let gmHandler = () => {
        //dispatch action
        dispatch(gmAction())
    }
    let gnHandler = () => {
        //dispatch action
        dispatch(gnAction())
    }
    let gaHandler = () => {
        dispatch(gaAction())
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(message)}</pre>
        <div className="row">

            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        Message:{message.msg}
                    </div>
                    <div className="card-body">
                        <button className="btn btn-success mr-5" onClick={gmHandler}>GM</button>
                        <button className="btn btn-primary mr-5" onClick={gnHandler}>GN</button>
                        <button className="btn btn-warning" onClick={gaHandler}>GA</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Message
