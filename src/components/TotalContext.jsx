import {useState, createContext, useEffect} from 'react'

export const CartTotalContext = createContext(null);
export default function TotalContext(props) {

  const [totalAmount, setTotalAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {id: 0, name: 'DOOM Eternal', quantity: 0, color: 'green'},
    {id: 1, name: 'Final Fantasy XVI', quantity: 0, color: 'gray'},
    {id: 2, name: 'Starfield', quantity: 0, color: 'purple'},
  ])


  function addToCart(id) {
    setProducts(prevProducts => 
      prevProducts.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }  


  function removeCart(id) {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }  

  
//TOTAL AMOUNT SHOP + NAVBAR
  useEffect(() => {
    // Calcola il conteggio totale dei prodotti
    const count = products.reduce((total, product) => total + product.quantity, 0);
    setTotalAmount(count);
  }, [products]);


//TOTAL AMOUNT CART
  useEffect(() => {
    // Calcola il conteggio totale dei prodotti
    const count = cart.reduce((total, product) => total + product.quantity, 0);
    setTotalAmount(count);
  }, [cart]);


  //VA A RIEMPIRE LO STATE PER CART
  useEffect(() => {
    const checkCart = products.filter((item) => item.quantity > 0);
    setCart(checkCart);
  }, [products]);


  //RIMUOVE DAL CART I PRODOTTI A ZERO
  useEffect(() => {
    const controlCart = cart.filter((item) => item.quantity != 0);
    setCart(controlCart);
  }, [cart]);



  return (
    <CartTotalContext.Provider value={{cart, products, totalAmount, addToCart, removeCart}}>
        {props.children}
    </CartTotalContext.Provider>
  )
}
