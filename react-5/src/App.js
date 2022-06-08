import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './HooksEx/Message'

import ETApp from './ET/ETApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/message" element={<Message />} />
                <Route path="/et" element={<ETApp />} />

            </Routes>
        </Router>

    </>
}

export default App
