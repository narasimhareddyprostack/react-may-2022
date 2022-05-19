import React, { Component } from 'react'
class Hike extends Component {
    state = {
        sal: 50000
    }
    hikeHandlerFifty = () => {
        this.setState({ sal: this.state.sal + 25000 })
    }
    hikeHandlerHundred = () => {
        this.setState({ sal: this.state.sal + 50000 })
    }
    hikeHandlerTen = () => {
        this.setState({ sal: this.state.sal + 5000 })
    }
    render() {
        return (
            <div>
                <h1>Salary:{this.state.sal}</h1>
                <button onClick={this.hikeHandlerFifty}>Hike 50 %</button>
                <button onClick={this.hikeHandlerHundred}>Hike 100 %</button>
                <button onClick={this.hikeHandlerTen}>Hike 10 %</button>
            </div>
        )
    }
}

export default Hike
