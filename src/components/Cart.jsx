import React from 'react'
import {CartTotalContext} from './TotalContext.jsx';

export default function Cart() {

  const {totalAmount} = React.useContext(CartTotalContext);

  return (
    <div className='cart'>
      <h3>You have {totalAmount} products in the Cart</h3>
    </div>
  )
}
