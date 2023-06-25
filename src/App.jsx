import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TotalContext from './components/TotalContext.jsx'
import Navbar from './components/Navbar.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'  

import './App.css'

function App() {

  return (
    <TotalContext>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </TotalContext>
  )
}

export default App
