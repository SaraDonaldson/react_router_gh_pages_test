import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>Navbar

    <Link to ='/'>Home</Link>
    <Link to ='/dashboard'> Dashboard</Link>
    <Link to ='/projects'> Projects</Link>
    <Link to ='/profile'> About</Link>

    </div>
  )
}

export default Navbar