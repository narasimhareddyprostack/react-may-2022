/* import './assets/thu/css/bootstrap.css' */
import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import ObjectTest from './PropsEX/ObjectTest'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <hr />
            <ObjectTest />
        </div>
    }
}
export default App