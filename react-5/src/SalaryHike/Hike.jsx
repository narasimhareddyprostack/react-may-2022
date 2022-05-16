import React, { Component } from 'react'
class Hike extends Component {
    state = {
        sal: 50000
    }
    hikeHandler = (hike_Value) => {
        this.setState({ sal: this.state.sal + hike_Value })
        
    }
    render() {
        return (
            <div>
                <h1>Salary:{this.state.sal}</h1>
                <button onClick={this.hikeHandler.bind(this, 25000)}>Hike 50 %</button>
                <button onClick={this.hikeHandler.bind(this, 50000)}>Hike 100 %</button>
                <button onClick={this.hikeHandler.bind(this, 5000)}>Hike 10 %</button>
            </div>
        )
    }
}

export default Hike
