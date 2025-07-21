
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

const CartData = () => {
    const{cartProducts} = useContext(CartContext) 
    console.log('cart data', cartProducts)
  return (
  <div>
      <div>CartData</div>
      <Link to='/' >Home</Link>
      <h3>Total Item : {cartProducts.length}</h3>

      {
        cartProducts.map((item,i)=><CartCard {...item} key={i} index={i}/>)
      }
  </div>
  )
}

export default CartData