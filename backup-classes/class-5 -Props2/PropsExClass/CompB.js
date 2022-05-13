import React, { Component } from 'react'

class CompB extends Component {
    render() {
        let { edetails, ename, eid } = this.props
        return (
            <div>
                <h1>Component B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Employee Name:{ename}</h2>
                <h3>Employee Salary:{this.props.edetails.sal}</h3>
            </div>
        )
    }
}

export default CompB
