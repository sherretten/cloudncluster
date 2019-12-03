import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg">
        <Link to='/' className="navbar-brand">ClassProject</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">ClassProject</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/ourqueries" className="nav-link">Queries</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}