import React from 'react'
import {CartTotalContext} from './TotalContext.jsx';

export default function CardProductCart(props) {

  const {removeCart} = React.useContext(CartTotalContext);

  return (
    <div className='card'>
        <div className='amount'>
            <h3>{props.quantity}</h3>
        </div>
        <div className='image' style={{backgroundColor: props.color}}>

        </div>
        <div className='info'>
            <h3>{props.title}</h3>
            <button className='btn remove' onClick={() => removeCart(props.idProduct)}>Remove</button>
        </div>
    </div>
  )
}
