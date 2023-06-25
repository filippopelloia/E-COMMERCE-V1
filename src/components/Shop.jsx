import {createContext, useState, useEffect} from 'react'
import CardProduct from './CardProduct.jsx';

import {CartTotalContext} from './TotalContext.jsx';

export default function Shop(props) {

  const {addToCart} = React.useContext(CartTotalContext);

  const [products, setProducts] = useState([
    {id: 0, name: 'DOOM Eternal', quantity: 0},
    {id: 1, name: 'Final Fantasy XVI', quantity: 0},
    {id: 2, name: 'Starfield', quantity: 0},
  ])

  function addToCart(id) {
    setProducts(prevProducts => 
      prevProducts.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    // setTotalAmount(prevTotalAmount => prevTotalAmount + 1);
  }  


  useEffect(() => {
    setTotalAmount(prevTotalAmount => prevTotalAmount + 1);
  }, [props.totalAmount])




  console.log(products);

  const showProducts = products.map(item => {
    return <CardProduct key={item.id} 
                        idProduct={item.id}
                        quantity={item.quantity}
                        title={item.name}
                        addToCart={addToCart}
            />
  })

  // console.log("Total amount of products: " + totalAmount);

  return (
    <div className="shop">
      <div className="products-section">
        {showProducts}
      </div>
    </div>
  )
}
