import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../../redux/User/user.action'
const User = () => {
    let userData = useSelector((state) => {
        return state.users
    })
    let dispatch = useDispatch();
    /*  let getDataHandler = () => {
         //dispatch an action
         dispatch(getDataAction())
     } */
    useEffect(() => {
        dispatch(getDataAction())
    }, [])

    return <div className="container mt-5">
        {/*  <button className="btn btn-warning " onClick={getDataHandler}>Get Data</button> */}
        <pre>{JSON.stringify(userData)}</pre>
        <div className="row">
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Id</th>
                            <th>  <input
                                type="search"


                                className="input"
                                placeholder="Filter"
                            /></th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.users.length > 0 ? <React.Fragment>
                                {
                                    userData.users.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </React.Fragment> : null

                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default User
