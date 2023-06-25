import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartTotalContext} from './TotalContext.jsx';

export default function Navbar() {

  const {totalAmount} = React.useContext(CartTotalContext);

  return (
    <div className='navbar'>
      <h1>Logo</h1>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">Cart ({totalAmount})</Link></li>
      </ul>
    </div>
  )
}
