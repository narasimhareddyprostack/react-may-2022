//react application main file 
//let ReactDOM = require('react-dom')   ES5 
import App from './App'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById("root"))
//what you want to render, where you want to render