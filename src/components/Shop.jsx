import React from 'react'
import CardProduct from './CardProduct.jsx';

import {CartTotalContext} from './TotalContext.jsx';

export default function Shop() {

  const {products} = React.useContext(CartTotalContext);

  const showProducts = products.map(item => {
    return <CardProduct key={item.id} 
                        idProduct={item.id}
                        quantity={item.quantity}
                        title={item.name}
                        color={item.color}
            />
  })

  return (
    <div className="shop">
      <div className="products-section">
        {showProducts}
      </div>
    </div>
  )
}
