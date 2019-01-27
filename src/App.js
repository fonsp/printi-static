import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Printer from './components/Printer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="\" component={Home} />
        <Route path="\:printer" component={Printer} />
      </Router>
    )
  }
}

export default App
