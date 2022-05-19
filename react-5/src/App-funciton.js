import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './DummyComp/Home'
import About from './DummyComp/About'
import Contact from './DummyComp/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </Router>

        </div>
    )
}

export default App
