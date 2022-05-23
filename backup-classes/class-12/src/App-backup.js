import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './DummyComp/Home'
import About from './DummyComp/About'
import Contact from './DummyComp/Contact'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>

        </div>
    )
}

export default App
