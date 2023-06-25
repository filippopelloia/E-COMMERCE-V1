import {useState} from 'react'
import CardProduct from './CardProduct.jsx';

export default function Shop() {

  const [products, setProducts] = useState([
    {id: 0, name: 'DOOM Eternal', quantity: 0},
    {id: 1, name: 'Final Fantasy XVI', quantity: 0},
    {id: 2, name: 'Starfield', quantity: 0},
  ])

  function addToCart(id) {
    setProducts(prevProducts => prevProducts.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  }  

  console.log(products);

  const showProducts = products.map(item => {
    return <CardProduct key={item.id} 
                        idProduct={item.id}
                        title={item.name}
                        addToCart={addToCart}
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
