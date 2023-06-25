import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CartTotalContext} from './TotalContext.jsx';

export default function Navbar() {

  const {products} = React.useContext(CartTotalContext);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(prevTotalAmount => prevTotalAmount + 1);
  }, [products])

  // console.log(products);


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
