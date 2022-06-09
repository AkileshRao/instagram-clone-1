import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink
            to="explore"
        />Explore
    </nav>
  )
}

export default Navbar