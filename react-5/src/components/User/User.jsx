import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../../redux/User/user.action'
const User = () => {
    let userData = useSelector((state) => {
        return state.users
    })
    let dispatch = useDispatch();
    let getDataHandler = () => {
        //dispatch an action
        dispatch(getDataAction())
    }
    return <div className="container mt-5">
        <button className="btn btn-warning " onClick={getDataHandler}>Get Data</button>
        <pre>{JSON.stringify(userData)}</pre>
        <div className="row">
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
}

export default User
