import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    id = 101
    name = "Rahul Gandhi"
    loc = ['Noida', 'Wayanad']
    details = { email: 'Rahul@gmail.com', sal: 45000 }
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <hr />
                <CompB eid={this.id} ename={this.name} eloc={this.loc} edetails={this.details} />
            </div>
        )
    }
}

export default CompA
