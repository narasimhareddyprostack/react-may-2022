import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/home" className="navbar-brand">React State - Bootstrap
            </a>
                <div className='ml-auto'>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/contact">Contat</a></li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
