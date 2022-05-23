import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor")
    }
    componentDidMount() {
        console.log("Third - Birth")
    }
    
    componentWillUnmount() {
        console.log("Death")
    }
    render() {
        console.log("Second render Method")
        return (
            <div>
                < h1 > Home Page</h1 >
            </div>
        )
    }
}

export default Home

