import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/message" element={<Message />} />

                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    }
}
export default App