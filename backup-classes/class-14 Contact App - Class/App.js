import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './HooksEx/Product'
import User from './HooksEx/User'
import Home from './ContactApp/Home'
import Message from './HooksEx/Message'
import ContactApp from './ContactApp/ContactApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactApp />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App