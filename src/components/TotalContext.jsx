import {useState, createContext} from 'react'

export const CartTotalContext = createContext(null);
export default function TotalContext(props) {

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
  }  

  return (
    <CartTotalContext.Provider value={{products, addToCart}}>
        {props.children}
    </CartTotalContext.Provider>
  )
}
