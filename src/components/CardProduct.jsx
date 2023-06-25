import React from 'react'

export default function CardProduct(props) {
  return (
    <div className='card'>
        <div className='image'>

        </div>
        <div className='info'>
            <h3>{props.title}</h3>
            <button className='btn' onClick={() => props.addToCart(props.idProduct)}>Add to Cart ({props.quantity})</button>
        </div>
    </div>
  )
}
