import React, { Component } from 'react'
import { empData } from './empData'
class Employee extends Component {
    render() {
        return (
            <div>
                <h1>Employee Data</h1>
                <pre>{JSON.stringify(empData)}</pre>
            </div>
        )
    }
}

export default Employee
