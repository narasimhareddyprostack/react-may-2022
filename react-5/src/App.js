import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './DummyComp/Home'
import About from './DummyComp/About'
import Contact from './DummyComp/Contact'
import User from './User/User'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {

    render() {

        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App