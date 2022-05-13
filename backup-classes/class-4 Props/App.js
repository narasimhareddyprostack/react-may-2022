import React from 'react'
import Navbar from './Navbar/Navbar'
import CompA from "./PropsEX/CompA"

class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <hr />
            <CompA />
        </div>
    }
}
export default App