import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({
                    employees: response.data
                })
            })
            .catch(() => { })
    }
    render() {
        return (
            <div>
                <h1>User Data</h1>
                <pre>{JSON.stringify(this.state)}</pre>

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
                                        this.state.employees.length > 0 ? <>
                                            {
                                                this.state.employees.map((emp) => {
                                                    return <tr>
                                                        <td>{emp.id}</td>
                                                        <td>{emp.name}</td>
                                                        <td>{emp.address.city.toUpperCase()}</td>
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
