import React from 'react'
import {CartTotalContext} from './TotalContext.jsx';

export default function CardProduct(props) {

  const {addToCart} = React.useContext(CartTotalContext);

  return (
    <div className='card'>
        <div className='image'>

        </div>
        <div className='info'>
            <h3>{props.title}</h3>
            <button className='btn' onClick={() => addToCart(props.idProduct)}>Add to Cart ({props.quantity})</button>
        </div>
    </div>
  )
}
