import {useState, createContext} from 'react'

export const CartTotalContext = createContext({totalAmount: 0});
export default function TotalContext(props) {

  const [totalAmount, setTotalAmount] = useState(0)

  function addToCart(id) {
    setProducts(prevProducts => 
      prevProducts.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalAmount(prevTotalAmount => prevTotalAmount + 1);
  }  

  return (
    <CartTotalContext.Provider value={{totalAmount, addToCart}}>
        {props.children}
    </CartTotalContext.Provider>
  )
}
