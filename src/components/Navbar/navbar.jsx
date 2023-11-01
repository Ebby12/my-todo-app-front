import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <div>
        <ul>
           
            <Link to="/">
            <li>Task</li>
            </Link>
            <Link to="/profile">
            <li>Profile</li>
            </Link>
           
            </ul>
    </div>
  )
}   

export default Navbar