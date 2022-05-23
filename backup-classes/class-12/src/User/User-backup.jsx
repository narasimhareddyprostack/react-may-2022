import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    dataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch((err) => {
                console.log("KGFError")
            })
    }
    render() {
        return (
            <div>
                <h1>User Data</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.dataHandler}>Click ...buddy</button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ? <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
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
            </div>
        )
    }
}

export default User
