import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1>Logo</h1>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  )
}
