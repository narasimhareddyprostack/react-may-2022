import React from 'react'
import Navbar from './Navbar/Navbar'
import User from './components/User/User'
import Employee from './components/User/Employee'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<User />} />
                        <Route path="/emp" element={<Employee />} />
                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    }
}
export default App