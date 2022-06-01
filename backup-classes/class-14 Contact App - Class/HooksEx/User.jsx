import React, { useState, useEffect } from 'react'
import Axios from 'axios'
let User = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data)
        }).catch()
    });
    return (
        <div className="container mt-5">
            <h1>Displaying User Data</h1>
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? <>
                                    {
                                        users.map((user) => {
                                            return <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td><a href={user.website}>{user.website}</a></td>
                                            </tr>
                                        })
                                    }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
