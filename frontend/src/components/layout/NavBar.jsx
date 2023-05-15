import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={"/"}><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link href="#">Developers</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
