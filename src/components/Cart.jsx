import React from 'react'
import CardProductCart from './CardProductCart.jsx';

import {CartTotalContext} from './TotalContext.jsx';

export default function Cart() {

  const {cart, totalAmount} = React.useContext(CartTotalContext);

  const showCart = cart.map(item => {
    return <CardProductCart key={item.id} 
                            idProduct={item.id}
                            quantity={item.quantity}
                            title={item.name}
                            color={item.color}
            />
  })

  return (
    <div className='cart'>
      <h3>You have {totalAmount} products in the Cart</h3>
      <div className='cart-container'>
        {showCart}
      </div>


      {cart.length > 0 && <div  className='cart-bottom'>
        <button className='btn checkout'>
          <h4>Checkout</h4>
        </button>
      </div>}

    </div>
  )
}
